import Link from 'next/link'
import { render } from 'react-dom'
import { changeToLineUpName, timeToDate } from '@src/utils/common'

export const couponTh = [
  {
    title: '구분',
    dataIndex: 'relationType',
  },
  {
    title: '쿠폰이름',
    dataIndex: 'name',
    render: (name, id) => (
      <Link href="/coupons/detail/[id]" as={`/coupons/detail/${id.id}`}>
        <a>{name}</a>
      </Link>
    ),
  },
  {
    title: '메모',
    dataIndex: 'description',
  },
  {
    title: '만료일자',
    dataIndex: 'expiration',
    render: (expiration) => `${expiration?.[0]}.${expiration?.[1]}.${expiration?.[2]}`,
  },
  {
    title: '할인금액',
    dataIndex: 'amount',
  },
  {
    title: '라인업',
    dataIndex: 'licenseTypeCode',
    render: (licenseTypeCode) => changeToLineUpName(licenseTypeCode),
  },
  {
    title: '남은 쿠폰 수',
    dataIndex: 'stock',
    render: (stock, data) => (!data?.singleCode ? '무제한' : stock),
  },
  {
    title: '등록일자',
    dataIndex: 'createdAsTimestamp',
    render: (createdAsTimestamp) => timeToDate(createdAsTimestamp),
  },
]
