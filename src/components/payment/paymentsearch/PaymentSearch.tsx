import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as S from '../../../../styles/common/style'
import SearchBar from '@components/common/searchbar'
import {
  Select,
  Input,
  DatePicker,
  Button,
  Row,
  Table,
  Spin,
  Col,
  Divider,
  AutoComplete,
} from 'antd'
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
import Link from 'next/link'
import SelectForm from '@src/components/common/select'
import { step } from '@src/store/data/service'
import { makeSelectOptions } from '@src/utils/common'
import { requestPaymentListAsync } from '@src/store/payment/payment.action'

const { Option } = Select

const PaymentSearch: React.FC = () => {
  const dispatch = useDispatch()
  const { filter, list } = useSelector((state: RootState) => state.couponsPage)
  const [loading, setLoading] = useState(false)

  const paymentTh = [
    {
      title: '라인업',
      dataIndex: 'licenseTypeCode',
    },
    {
      title: '구분',
      dataIndex: '',
    },
    {
      title: '판매채널',
      dataIndex: '',
    },
    {
      title: '주문번호',
      dataIndex: '',
    },
    {
      title: '상품ID',
      dataIndex: '',
    },
    {
      title: '상품명',
      dataIndex: 'name',
    },
    {
      title: '판매가',
      dataIndex: 'amount',
    },
    {
      title: '최종판매가',
      dataIndex: 'totalPrice',
    },
    {
      title: '결제수단',
      dataIndex: '',
    },
    {
      title: '결제방식',
      dataIndex: '',
    },
    {
      title: '유저ID',
      dataIndex: '',
    },
    {
      title: '결제요청일',
      dataIndex: '',
    },
    {
      title: '결제완료일',
      dataIndex: '',
    },
    {
      title: '상태',
      dataIndex: 'status',
    },
  ]

  //셀렉트 선택
  const handleSelected = (value, key = '') => {
    dispatch(filterSet({ value, key }))
  }

  //페이지
  const handleCurrentPage = (page, key = '') => {
    const value = page.current
    dispatch(filterSet({ value, key }))
  }

  //초기화
  const handleReset = () => {
    dispatch(filterReset())
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
    console.log({ selectedRowKeys, selectedRows })
  }

  useEffect(() => {
    setLoading(true)
    dispatch(
      requestPaymentListAsync.request({
        licenseId: '5000266',
        licenseTypeCode: filter.licenseTypeCode,
      })
    )
  }, [])

  return (
    <S.SearchSectionWrap>
      {/* <SearchBar>
        <Row>
          <Col span={8}>
            <span style={{ marginRight: '10px' }}>결제구분</span>
            <Select
              value={couponDateSearchFrom[0].title}
              onChange={(value) => handleSelected(value, 'term')}
              style={{ width: 250 }}
            ></Select>
          </Col>
          <Col span={8}>
            판매채널
            <Select
              value={couponDateSearchFrom[0].title}
              onChange={(value) => handleSelected(value, 'term')}
              style={{ width: 250 }}
            ></Select>
          </Col>
          <Col span={8}>
            결제수단
            <Select
              value={couponDateSearchFrom[0].title}
              onChange={(value) => handleSelected(value, 'term')}
              style={{ width: 250 }}
            ></Select>
          </Col>
        </Row>
        <br />
        <Row>
          <Col span={8}>
            <span style={{ marginRight: '10px' }}>결제완료일자</span>
            <Select
              value={couponDateSearchFrom[0].title}
              onChange={(value) => handleSelected(value, 'term')}
            ></Select>
            <DatePicker />
          </Col>
          <Col span={8}>
            <Input.Group compact>
              <Select defaultValue="Sign Up" style={{ width: '25%' }}>
                <Option value="Sign Up">Sign Up</Option>
                <Option value="Sign In">Sign In</Option>
              </Select>
              <Input style={{ width: '50%' }} placeholder="com plz" value={''} />
            </Input.Group>
          </Col>
          <Col span={8}>
            결제 방식
            <Select
              value={couponDateSearchFrom[0].title}
              onChange={(value) => handleSelected(value, 'term')}
              style={{ width: 250 }}
            ></Select>
          </Col>
        </Row>
        <br />
        <Row>
          <Col span={8}>
            <span style={{ marginRight: '10px' }}>결제상태</span>
            <Select
              value={couponDateSearchFrom[0].title}
              onChange={(value) => handleSelected(value, 'term')}
            ></Select>
            <DatePicker />
          </Col>
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
          columns={paymentTh}
          dataSource={[]}
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

export default PaymentSearch
