import React, { useState } from 'react'
import { Descriptions, Radio, Select, Input, DatePicker, Button } from 'antd'
import { DetailSectionWrap } from 'styles/common/style'
import { lineupSelect, typeSelect } from '@src/store/data/search.data'
import { RootState } from '@src/store/rootReducer'
import { useSelector, useDispatch } from 'react-redux'
import * as coupon from '@store/coupons/coupons.action'

const { Option } = Select

interface CouponMakeProps {
  detail: any
}

const CouponMakeSetting: React.FC<CouponMakeProps> = ({ detail }) => {
  const dispatch = useDispatch()
  const { makeState } = useSelector((state: RootState) => state.couponsPage)
  const { selectedProduct } = useSelector((state: RootState) => state.product)
  const [loading, setLoading] = useState(false)

  //계정, 타입 셀렉박스 만들기
  const selectItems = (array) => {
    const sItem = array.map((sname: { title: string; key: string }, i: number) => {
      return (
        <Option value={sname.key} key={i}>
          {sname.title}
        </Option>
      )
    })
    return sItem
  }

  //판매처셀렉옵션
  const serviceOptionItems = selectItems(lineupSelect)
  //판매처선택
  const handleLicenseTypeCode = (value) => {
    dispatch(coupon.CouponMakeSet({ licenseTypeCode: value }))
  }

  //스탁옵션
  const stockOptions = [
    { label: '무제한', value: true },
    { label: '', value: false },
  ]

  //쿠폰발행갯수셋팅
  const handleStockSetting = (e) => {
    const value = e.target.value
    dispatch(coupon.CouponMakeSet({ singleCode: value }))
  }

  //발행개수
  const handleInputText = (e) => {
    const value = e.target.value
    const name = e.target.name
    if (name === 'stock') dispatch(coupon.CouponMakeSet({ stock: Number(value) }))
    else if (name === 'name') dispatch(coupon.CouponMakeSet({ name: value }))
    else if (name === 'description') dispatch(coupon.CouponMakeSet({ description: value }))
    else if (name === 'amount') dispatch(coupon.CouponMakeSet({ amount: Number(value) }))
    else if (name === 'expiration') dispatch(coupon.CouponMakeSet({ expiration: value }))
    else if (name === 'codeExpiration')
      dispatch(coupon.CouponMakeSet({ codeExpiration: Number(value) }))
  }

  //타입셀렉트
  const typeOptionItems = selectItems(typeSelect)
  const handleRelationTypeCode = (value) => {
    dispatch(coupon.CouponMakeSet({ relationTypeCode: value }))
  }

  //만료일자셋팅
  const handleExpirseSetting = (date, dateString) => {
    dispatch(coupon.CouponMakeSet({ expiration: dateString }))
  }

  //할인금액
  const handleAmountSetting = (value) => {
    dispatch(coupon.CouponMakeSet({ couponTypeCode: value }))
  }

  const handleMakeSubmit = () => {
    setLoading(true)
    dispatch(coupon.postCouponMakeAsync.request(makeState))
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }

  return (
    <>
      <Button
        type={'primary'}
        style={{ position: 'absolute', right: '30px', top: '80px' }}
        onClick={handleMakeSubmit}
        loading={loading}
      >
        등록
      </Button>

      <Descriptions bordered column={2} title="쿠폰 정보">
        <Descriptions.Item label="판매처">
          <Select
            value={makeState.licenseTypeCode}
            style={{ width: '100%' }}
            onChange={(value) => handleLicenseTypeCode(value)}
          >
            {serviceOptionItems}
          </Select>
        </Descriptions.Item>

        <Descriptions.Item label="발행개수">
          <Radio.Group
            options={stockOptions}
            onChange={handleStockSetting}
            value={makeState.singleCode}
          />
          <Input
            value={makeState.stock}
            onChange={(e) => handleInputText(e)}
            name="stock"
            style={{ width: '100px' }}
            disabled={makeState.singleCode}
          />
        </Descriptions.Item>

        <Descriptions.Item label="이름">
          <Input value={makeState.name} name="name" onChange={(e) => handleInputText(e)} />
        </Descriptions.Item>

        <Descriptions.Item label="메모">
          <Input
            value={makeState.description}
            name="description"
            onChange={(e) => handleInputText(e)}
          />
        </Descriptions.Item>

        <Descriptions.Item label="타입">
          <Select
            value={makeState.relationTypeCode}
            style={{ width: '100%' }}
            onChange={(value) => handleRelationTypeCode(value)}
          >
            {typeOptionItems}
          </Select>
        </Descriptions.Item>

        <Descriptions.Item label="만료 일자">
          <DatePicker onChange={handleExpirseSetting} />
        </Descriptions.Item>

        <Descriptions.Item label="사용 유효 기간">
          <Input
            value={makeState.codeExpiration}
            name="codeExpiration"
            onChange={(e) => handleInputText(e)}
            style={{ width: '90%', marginRight: '10px' }}
          />
          초
        </Descriptions.Item>

        <Descriptions.Item label="할인 금액">
          <Select
            value={makeState.couponTypeCode === 'FIXED_AMOUNT' ? '정액' : '정률'}
            style={{ width: '20%' }}
            onChange={(value) => handleAmountSetting(value)}
          >
            <Option value="FIXED_AMOUNT">정액</Option>
            <Option value="FIXED_RATE">정률</Option>
          </Select>
          <Input
            value={makeState.amount}
            name="amount"
            onChange={(e) => handleInputText(e)}
            style={{ width: '40%', marginRight: '10px' }}
          />
          원
        </Descriptions.Item>
      </Descriptions>
    </>
  )
}

export default CouponMakeSetting
