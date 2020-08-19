import React, { useState, useEffect } from 'react'
import { Table, Button } from 'antd'
import { DetailSectionWrap } from 'styles/common/style'
import { numberComma, changeToLineUpName } from '@utils/common'
import Modal from 'antd/lib/modal/Modal'
import Products from '@src/components/products'

interface CouponProductList {
  detail: {}
  products: any[]
}

const CouponProductsList: React.FC<CouponProductList> = ({ detail, products }) => {
  const [modalInfo, setModalInfo] = useState({
    show: false,
    loading: false,
    text: '',
  })

  const couponProductTh = [
    {
      title: '상품ID',
      dataIndex: 'id',
    },
    {
      title: '라인업',
      dataIndex: 'licenseTypeCode',
      render: (licenseTypeCode) => changeToLineUpName(licenseTypeCode),
    },
    {
      title: '판매채널',
      dataIndex: 'productTypeCode',
    },
    {
      title: '상품명',
      dataIndex: 'name',
    },
    {
      title: '판매가',
      dataIndex: 'totalPrice',
      render: (totalPrice) => numberComma(totalPrice),
    },
    {
      title: '할인가',
      dataIndex: 'amount',
      render: (amount) => numberComma(amount),
    },
    {
      title: '최종 판매가',
      dataIndex: 'totalPrice',
      render: (name, data) => {
        let val = data.totalPrice - data.amount

        return numberComma(val)
      },
    },
  ]

  //products안에 detail amount집어넣기
  const productData = () => {
    const { amount }: any = detail
    const rs = products?.map((data) => {
      return (data.amount = amount)
    })
    return rs
  }

  //모달 오픈
  const showModal = () => {
    setModalInfo({ ...modalInfo, show: true })
  }

  //모달 숨기기
  const hideModal = () => {
    setModalInfo({ ...modalInfo, show: false })
  }

  console.log('here products', { products })
  return (
    <>
      <DetailSectionWrap>
        <Table
          columns={couponProductTh}
          dataSource={products?.length > 0 ? products : []}
          locale={{ emptyText: '상품정보가 없습니다.' }}
        />
      </DetailSectionWrap>
    </>
  )
}

export default CouponProductsList
