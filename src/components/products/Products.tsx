import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Table, Descriptions, Select, Button } from 'antd'
import { requestCouponDetailAsync, selectedProductIdSet } from '@src/store/coupons/coupons.action'
import { numberComma, changeToLineUpName, changeToProductPeriodTypeCode } from '@src/utils/common'
import { RootState } from '@src/store/rootReducer'
import { requestProductsListAsync, selectedProductSet } from '@src/store/products/proudcts.action'
import DescriptionsItem from 'antd/lib/descriptions/Item'
import { lineupSelect } from '@src/store/data/search.data'

interface ProductsProps {}

const Products: React.FC<ProductsProps> = () => {
  const dispatch = useDispatch()
  const { list } = useSelector((state: RootState) => state.product)
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
    {
      title: '전체학습기간',
      dataIndex: 'period',
      render: (period, data) =>
        `${period} ${changeToProductPeriodTypeCode(data.productPeriodTypeCode)}`,
    },
    {
      title: '상태',
      dataIndex: 'productStatusTypeCode',
      render: (productStatusTypeCode) => productStatusTypeCode,
    },
  ]

  const handleServiceSubmit = (serviceName = 'JUNIOR') => {
    dispatch(
      requestProductsListAsync.request({
        licenseTypeCode: serviceName,
        productStatusTypeCode: 'ACTIVE',
        productTypeCode: 'ONLINE',
      })
    )
  }

  //테이블 로우값
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => selectedProduct(selectedRowKeys, selectedRows),
  }

  const selectedProduct = (selectedRowKeys, selectedRows) => {
    dispatch(selectedProductIdSet(selectedRowKeys))
    dispatch(selectedProductSet(selectedRows))
  }

  // useEffect(() => {
  //   dispatch(
  //     requestProductsListAsync.request({
  //       licenseTypeCode: 'JUNIOR',
  //       productStatusTypeCode: 'ACTIVE',
  //       productTypeCode: 'ONLINE',
  //     })
  //   )
  // }, [])

  return (
    <>
      <Descriptions>
        <Descriptions.Item label="서비스 필터">
          <Button type={'primary'} onClick={() => handleServiceSubmit('JUNIOR')}>
            주니어
          </Button>
        </Descriptions.Item>
      </Descriptions>
      <Table
        columns={couponProductTh}
        dataSource={list.length > 0 ? list : []}
        locale={{ emptyText: '상품정보가 없습니다.' }}
        rowSelection={rowSelection}
        rowKey={(list) => list.id}
      />
    </>
  )
}

export default Products
