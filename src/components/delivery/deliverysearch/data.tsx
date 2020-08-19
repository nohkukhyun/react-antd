import Link from 'next/link'

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
    title: '생성일자',
    dataIndex: '',
  },
  {
    title: '라인업',
    dataIndex: 'licenseType',
    render: (licenseType) => (licenseType === 9 ? '주니어' : licenseType),
  },
  // {
  //   title: '발행된 쿠폰 수',
  //   dataIndex: '',
  //   key: '',
  // },
  // {
  //   title: '등록된 쿠폰 수',
  //   dataIndex: '',
  //   key: '',
  // },
  // {
  //   title: '사용된 쿠폰 수',
  //   dataIndex: '',
  //   key: '',
  // },
  // {
  //   title: '만료된 쿠폰 수',
  //   dataIndex: '',
  //   key: '',
  // },
  // {
  //   title: '등록일자',
  //   dataIndex: '',
  //   key: '',
  // },
]
