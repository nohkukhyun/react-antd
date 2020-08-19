import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Table, Button } from 'antd'
import { DetailSectionWrap } from 'styles/common/style'
import { numberComma, changeToLineUpName } from '@utils/common'
import Modal from 'antd/lib/modal/Modal'
import Products from '@src/components/products'

import { RootState } from '@src/store/rootReducer'
import { resetSelectedProductSet } from '@src/store/products/proudcts.action'

interface CouponProductList {}

const CouponProductsList: React.FC<CouponProductList> = () => {
  const dispatch = useDispatch()
  const { selectedProduct } = useSelector((state: RootState) => state.product)
  const [modalInfo, setModalInfo] = useState({
    show: false,
    loading: false,
    text: '',
  })

  const couponProductTh = [
    {
      title: 'ID',
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
    // {
    //   title: '할인가',
    //   dataIndex: 'amount',
    //   render: (amount) => numberComma(amount),
    // },
    // {
    //   title: '최종 판매가',
    //   dataIndex: 'totalPrice',
    //   render: (name, data) => {
    //     let val = data.totalPrice - data.amount

    //     return numberComma(val)
    //   },
    // },
  ]

  //모달 오픈
  const showModal = () => {
    setModalInfo({ ...modalInfo, show: true })
  }

  //모달 숨기기
  const hideModal = () => {
    setModalInfo({ ...modalInfo, show: false })
  }

  const cancelModal = () => {
    setModalInfo({ ...modalInfo, show: false })
    dispatch(resetSelectedProductSet())
  }

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', margin: '30px 0' }}>
        <h3>쿠폰 적용 상품 선택</h3>
        <Button type={'ghost'} onClick={showModal}>
          + 선택
        </Button>
        <Modal
          title="상품 선택"
          visible={modalInfo.show}
          width={1100}
          onCancel={hideModal}
          // onOk={handleEnquiryTicketSubmit}
          confirmLoading={modalInfo.loading}
          centered
          footer={[
            <Button onClick={cancelModal}>취소</Button>,
            <Button type={'primary'} loading={modalInfo.loading} onClick={hideModal}>
              저장
            </Button>,
          ]}
        >
          <Products />
        </Modal>
      </div>

      <Table
        columns={couponProductTh}
        dataSource={selectedProduct.length > 0 ? selectedProduct : []}
        locale={{ emptyText: '상품정보가 없습니다.' }}
      />
    </>
  )
}

export default CouponProductsList
