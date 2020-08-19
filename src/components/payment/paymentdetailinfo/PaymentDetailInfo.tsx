import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { DetailSectionWrap, Text, TopButtonWrap } from 'styles/common/style'
import { Table, Button, Descriptions, Divider, Badge } from 'antd'
import DescriptionsItem from 'antd/lib/descriptions/Item'
import { TransactionDto } from '@src/store/payment/payment.type'
import { timeToDate, changeToPaymentStatusTypeCode } from '@src/utils/common'
import { RootState } from '@src/store/rootReducer'
import UserDescription from '@src/components/members/userdescription'

interface PaymentDetailProps {
  detail: TransactionDto | any
}
const PaymentDetailInfo: React.FC<PaymentDetailProps> = ({ detail }) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const { query } = router
  const { filter } = useSelector((state: RootState) => state.paymentPage)
  const productsTh = [
    {
      title: '주문번호',
      dataIndex: 'transactionId',
    },
    {
      title: '상품ID',
      dataIndex: 'productId',
    },
    {
      title: '할인가',
      dataIndex: 'discountAmount',
    },
    {
      title: '상태',
      dataIndex: 'status',
    },
  ]

  const { transactionProducts } = detail

  const productsData = () => {
    const rs = transactionProducts?.map((data: any) => {
      return data?.transactionCourseItems
    })

    return rs
  }

  const expandedRowRender = () => {
    const rs = transactionProducts?.map((data: any) => {
      return data?.transactionCourseItems
    })

    const productArr = rs.map((data) => {
      return data
    })

    const columns = [
      {
        title: '상품번호',
        dataIndex: 'id',
      },
      {
        title: '결제번호',
        dataIndex: 'transactionId',
      },
      {
        title: '라인아이템',
        dataIndex: 'lineItemId',
      },
      {
        title: '상태',
        dataIndex: 'status',
      },
    ]

    productArr.map((cData) => {
      return cData
    })

    return <Table columns={columns} dataSource={productArr?.[0]} pagination={false} />
  }

  // const handleCurrentPage = (page, key = '') => {
  //   const value = page.current
  //   dispatch(filterSet({ value, key }))
  // }

  return (
    <>
      <DetailSectionWrap>
        <TopButtonWrap>
          <Button type="primary">환불 및 취소</Button>
        </TopButtonWrap>
        <Descriptions title="주문번호" bordered column={11} size="small" layout={'vertical'}>
          <DescriptionsItem label="주문번호">{detail.id}</DescriptionsItem>
          <DescriptionsItem label="결제일자">
            {timeToDate(detail.createdAsTimestamp)}
          </DescriptionsItem>
          <DescriptionsItem label="구분">
            {changeToPaymentStatusTypeCode(detail.paymentStatusTypeCode, false)}
          </DescriptionsItem>
          <DescriptionsItem label="상태">{detail.status}</DescriptionsItem>
          <DescriptionsItem label="결제수단">{detail.paymentMethodTypeCode}</DescriptionsItem>
          <DescriptionsItem label="결제방식">
            {detail.installment === 1 ? '일시불' : `${detail.installment}개월`}
          </DescriptionsItem>
          {/* <DescriptionsItem label="할인가">
            {detail.totalPrice - detail.totalPaidAmount}
          </DescriptionsItem>
          <DescriptionsItem label="최종판매가">{detail.totalPaidAmount}</DescriptionsItem> */}
          <DescriptionsItem label="판매자">{'판매자데이터모름'}</DescriptionsItem>
        </Descriptions>
      </DetailSectionWrap>

      <DetailSectionWrap>
        <Table
          columns={productsTh}
          dataSource={transactionProducts?.length > 0 ? transactionProducts : []}
          pagination={{ pageSize: filter.pageSize }}
          locale={{ emptyText: '상품 정보가 없습니다.' }}
          expandable={{ expandedRowRender }}
          // onChange={(page) => handleCurrentPage(page, 'current')}
        ></Table>
        <Divider />
        {/* <Descriptions title="회원정보" bordered column={2} size="small">
          <DescriptionsItem label="ID">''</DescriptionsItem>
          <DescriptionsItem label="계정">''</DescriptionsItem>
          <DescriptionsItem label="타입">''</DescriptionsItem>
          <DescriptionsItem label="전화번호">''</DescriptionsItem>
        </Descriptions> */}
      </DetailSectionWrap>
    </>
  )
}

export default PaymentDetailInfo
