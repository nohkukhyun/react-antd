import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as S from '../userinfo/userinfo.styled'
import { Table, Descriptions, Button, Modal, Input, Badge } from 'antd'
import { requestPaymentListAsync } from '@src/store/members/members.action'
import { RootState } from '@src/store/rootReducer'
import { memberDto } from '@src/store/members/members.type'
import 'styles/common/style'
import {
  numberComma,
  changeToPaymentStatusType,
  timeToDate,
  changeToPaymentStatusTypeCode,
} from '@src/utils/common'
import Link from 'next/link'

interface UserPayHistoryProps {
  detail: memberDto
}

const UserPayHistory: React.FC<UserPayHistoryProps> = ({ detail }) => {
  //회원상세 - 결제정보
  const userPayHisotryTh = [
    {
      title: '결제일자',
      dataIndex: 'createdAsTimestamp',
      render: (createdAsTimestamp) => timeToDate(createdAsTimestamp),
    },
    {
      title: '주문번호',
      dataIndex: 'id',
      width: 300,
      render: (id, data) => (
        <Link
          href={`/payments/detail/[id]?licenseId=${data.licenseId}&licenseTypeCode=JUNIOR`}
          as={`/payments/detail/${id}?licenseId=${data.licenseId}&licenseTypeCode=JUNIOR`}
        >
          <a>{id}</a>
        </Link>
      ),
    },
    // {
    //   title: '상품ID',
    //   dataIndex: 'transactionProducts',
    //   render: (transactionProducts) =>
    //     transactionProducts?.map((data, i) => {
    //       return <span key={i}>{data.id}</span>
    //     }),
    // },
    // {
    //   title: '상품명',
    //   dataIndex: 'transactionProducts',
    //   render: (transactionProducts) =>
    //     transactionProducts.map((data) => {
    //       // return data.transactionCourseItems
    //     }),
    // },
    {
      title: '상태',
      dataIndex: 'paymentStatusTypeCode',
      render: (paymentStatusTypeCode, data) => {
        return changeToPaymentStatusTypeCode(paymentStatusTypeCode)
      },
    },
    {
      title: '결제가',
      dataIndex: 'totalPaidAmount',
      render: (totalPaidAmount) => numberComma(totalPaidAmount),
    },
    {
      title: '취소/환불가',
      dataIndex: 'refund',
      key: 'refund',
    },
    {
      title: '결제수단/방법',
      dataIndex: 'installment',
      render: (installment, data) => {
        return `${
          installment > 1 ? `${installment}'개월'}` : '일시불'
        } / ${changeToPaymentStatusType(data.paymentMethodTypeCode)}`
      },
    },
    {
      title: '취소/환불일자',
      dataIndex: 'refunddate',
      key: 'refunddate',
    },
  ]

  const dispatch = useDispatch()
  const { payment } = useSelector((state: RootState) => state.membersPage)
  const { list } = payment
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
        <S.Title>결제 정보</S.Title>
        <Button type="primary">결제 추가</Button>
      </div>
      <Table
        columns={userPayHisotryTh}
        dataSource={list.length > 0 ? list : []}
        locale={{ emptyText: '결제 정보가 없습니다.' }}
        size={'small'}
      />
    </>
  )
}

export default UserPayHistory
