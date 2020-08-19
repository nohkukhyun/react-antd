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
  itemTypeCode,
} from '@store/data/search.data'
import SearchContent from '@components/common/searchcontent/'
import { RootState } from '@store/rootReducer'
import {
  requestLineItemListAsync,
  filterSet,
  filterReset,
} from '@src/store/delivery/delivery.action'
import { timeToDate, makeSelectOptions } from '@src/utils/common'
import PageSelect from '@src/components/common/pageselect'

const { Option } = Select

const DeliverySearch: React.FC = () => {
  const dispatch = useDispatch()
  const { filter, list } = useSelector((state: RootState) => state.deliveryPage)
  const [loading, setLoading] = useState(false)

  const deilveryTh = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '구분',
      dataIndex: 'itemTypeCode',
      key: 'itemTypeCode',
    },
    {
      title: '제품명',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '정상가',
      dataIndex: 'cost',
      key: 'cost',
    },
    {
      title: '재고',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: '등록일',
      dataIndex: 'createdAsTimestamp',
      key: 'createdAsTimestamp',
      render: (createdAsTimestamp) => timeToDate(createdAsTimestamp),
    },
  ]

  //계정 셀렉
  const serviceOptionItems = makeSelectOptions(lineupSelect)
  //아이템 타입코드
  const itemOptionItems = makeSelectOptions(itemTypeCode)

  const handleCurrentPage = (page, key = '') => {
    const value = page.current
  }

  //셀렉트 선택
  const handleSelected = (value, key = '') => {
    if (key === 'licenseTypeCode') dispatch(filterSet({ licenseTypeCode: value }))
    else if (key === 'itemTypeCode') dispatch(filterSet({ itemTypeCode: value }))
  }

  const handleReset = () => {
    dispatch(filterReset())
  }

  useEffect(() => {
    setLoading(true)
    dispatch(
      requestLineItemListAsync.request({ itemTypeCode: 'CURRICULUM', licenseTypeCode: 'JUNIOR' })
    )
  }, [])

  return (
    <S.SearchSectionWrap>
      <SearchBar>
        <Row>
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
            상품타입
            <Select
              value={filter.itemTypeCode}
              onChange={(value) => handleSelected(value, 'itemTypeCode')}
              style={{ width: 200 }}
            >
              {itemOptionItems}
            </Select>
          </Col>
          <Col span={4}>
            <Button type="primary">조회</Button>
            <Button onClick={handleReset}>초기화</Button>
          </Col>
        </Row>
      </SearchBar>

      <SearchContent>
        <Table
          columns={deilveryTh}
          dataSource={list.length > 0 ? list : []}
          pagination={{ pageSize: filter.pageSize }}
          locale={{ emptyText: '쿠폰 정보가 없습니다.' }}
          onChange={(page) => handleCurrentPage(page, 'current')}
          onRow={list.id}
        />
        {/* 페이지 */}
        {list && list.length > 0 ? (
          <PageSelect page={filter} handleSelected={handleSelected} />
        ) : (
          ''
        )}
        {!loading ? <Spin /> : ''}
      </SearchContent>
    </S.SearchSectionWrap>
  )
}

export default DeliverySearch

{
  /* <SearchBar>
        <Row>
          <InputBox>
            <S.Text>기간</S.Text>
            <Input.Group compact>
              <Select
                value={couponDateSearchFrom[0].title}
                onChange={(value) => handleSelected(value, 'term')}
              >
                {selectItems(couponDateSearchFrom)}
              </Select>
              <DatePicker />
            </Input.Group>
          </InputBox>

          <InputBox>
            <S.Text>검색</S.Text>
            <Input.Group compact>
              <Select
                value={couponNameSearchForm[0].title}
                onChange={(value) => handleSelected(value, 'keyword')}
              >
                {selectItems(couponNameSearchForm)}
              </Select>
              <Input value={''} placeholder="입력해주세요." style={{ width: 150 }} />
            </Input.Group>
          </InputBox>

          <InputBox>
            <S.Text>구분</S.Text>
            <Select
              value={couponCategorySearchForm[0].title}
              onChange={(value) => handleSelected(value, 'category')}
            >
              {selectItems(couponCategorySearchForm)}
            </Select>
          </InputBox>

          <InputBox>
            <S.Text>라인업</S.Text>
            <Select
              value={''}
              onChange={(value) => handleSelected(value, 'service')}
              style={{ width: 130 }}
            >
            </Select>
          </InputBox>

          <InputBox>
            <S.Text>상태</S.Text>
            <Select
              value={couponStatusSearchForm[0].title}
              onChange={(value) => handleSelected(value, 'status')}
            >
              {selectItems(couponStatusSearchForm)}
            </Select>
          </InputBox>

          <Button type="primary" style={{ marginRight: '10px' }}>
            조회
          </Button>
          <Button>초기화</Button>
        </Row>
      </SearchBar> */
}
