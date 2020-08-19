import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as S from '../../../../styles/common/style'
import SearchBar from '@components/common/searchbar'
import { Select, Input, DatePicker, Button, Row, Table, Spin, Col } from 'antd'
import InputBox from '@components/common/inputbox'
import {
  couponDateSearchFrom,
  couponNameSearchForm,
  couponCategorySearchForm,
  couponStatusSearchForm,
  lineupSelect,
} from '@store/data/search.data'
import { requestFetchCouponAsync, filterSet, filterReset } from '@store/coupons/coupons.action'
import SearchContent from '@components/common/searchcontent/'
import { RootState } from '@store/rootReducer'
import { couponTh } from './data'
import * as coupon from '@store/coupons/coupons.action'
import Link from 'next/link'
import SelectForm from '@src/components/common/select'
import { step } from '@src/store/data/service'
import { makeSelectOptions } from '@src/utils/common'

const { Option } = Select

const CouponSearch: React.FC = () => {
  const dispatch = useDispatch()
  const { filter, list } = useSelector((state: RootState) => state.couponsPage)
  const [loading, setLoading] = useState(false)
  const [rowKey, setRowKey] = useState(null)

  //셀렉트 선택
  const handleSelected = (value, key = '') => {
    dispatch(filterSet({ key, value }))
  }

  //페이지
  const handleCurrentPage = (page, key = '') => {
    const value = page.current
    dispatch(filterSet({ value, key }))
  }

  const handleDate = (date, value, key) => {
    dispatch(filterSet({ value, key }))
  }

  //초기화
  const handleReset = () => {
    dispatch(filterReset())
  }

  const handleInputText = (e, key) => {
    let value = e.target.value
    dispatch(filterSet({ value, key }))
  }

  //계정 셀렉
  const serviceOptionItems = makeSelectOptions(lineupSelect)
  //타입 셀렉
  const stepOptionItems = makeSelectOptions(step)

  //테이블 로우값
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => selectedProduct(selectedRowKeys, selectedRows),
  }

  const selectedProduct = (selectedRowKeys, selectedRows) => {
    // dispatch(selectedProductIdSet(selectedRowKeys))
    // dispatch(selectedProductSet(selectedRows))
  }

  useEffect(() => {
    setLoading(true)
    dispatch(requestFetchCouponAsync.request({}))
  }, [])

  return (
    <S.SearchSectionWrap>
      {/* <SearchBar>
        <Row>
          <Col span={8}>
            <Input.Group compact>
              기간
              <Select
                value={filter.searchDate}
                onChange={(value) => handleSelected(value, 'searchDate')}
              >
                <Option value="created">등록일자</Option>
                <Option value="expired">만료일자</Option>
              </Select>
              <DatePicker
                onChange={(date, dateString) => handleDate(date, dateString, 'searchDateText')}
                style={{ width: 250 }}
              />
            </Input.Group>
          </Col>
          <Col span={8}>
            <Input.Group compact>
              검색
              <Select
                value={filter.searchType}
                onChange={(value) => handleSelected(value, 'searchType')}
              >
                <Option value={'name'}>쿠폰이름</Option>
                <Option value={'content'}>메모</Option>
              </Select>
              <Input
                style={{ width: '60%' }}
                value={filter.searchKeyword}
                placeholder="입력해주세요."
                onChange={(e) => handleInputText(e, 'searchKeyword')}
              />
            </Input.Group>
          </Col>
        </Row>
        <br />
        <Row>
          <Col span={6}>
            구분
            <Select
              value={filter.relationTypeCode}
              onChange={(value) => handleSelected(value, 'relationTypeCode')}
              style={{ width: 200 }}
            >
              {stepOptionItems}
            </Select>
          </Col>

          <Col span={6}>
            라인업
            <Select
              value={filter.licenseTypeCode}
              onChange={(value) => handleSelected(value, 'licenseTypeCode')}
              style={{ width: 200 }}
            >
              {serviceOptionItems}
            </Select>
          </Col>
          <Col span={6}>
            상태
            <Select
              value={couponStatusSearchForm[0].title}
              onChange={(value) => handleSelected(value, 'status')}
              style={{ width: 200 }}
            ></Select>
          </Col>
          <Button type="primary">조회</Button>
          <Button>초기화</Button>
        </Row>
      </SearchBar> */}

      <SearchContent>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
          <h3>쿠폰정보</h3>
          <Link href="/coupons/make">
            <Button type={'primary'}>쿠폰추가</Button>
          </Link>
        </div>
        <Table
          columns={couponTh}
          dataSource={list ? list : []}
          pagination={{ pageSize: filter.pageSize }}
          locale={{ emptyText: '쿠폰 정보가 없습니다.' }}
          onChange={(page) => handleCurrentPage(page, 'current')}
          rowSelection={rowSelection}
          rowKey={(list) => list.id}
        />
        {!loading ? <Spin /> : ''}
      </SearchContent>
    </S.SearchSectionWrap>
  )
}

export default CouponSearch
