import { Button, Badge } from 'antd'
import Link from 'next/link'
import {
  timeToDate,
  numberComma,
  changeToPaymentStatusTypeCode,
  changeToPaymentStatusType,
} from '@src/utils/common'

export const userProfileTh = [
  {
    title: '프로필',
    dataIndex: 'profileType',
    key: 'profileType',
  },
  {
    title: '이름',
    dataIndex: 'profileName',
    key: 'profileName',
  },
  {
    title: '출생년도',
    dataIndex: 'birthday',
    key: 'birthday',
  },
  {
    title: '최근 레벨테스트 결과',
    dataIndex: '',
    key: '',
  },
  {
    title: '상태',
    dataIndex: '',
    key: '',
  },
  {
    title: '학습내역',
    dataIndex: '',
    key: '',
  },
  {
    title: '프로필 수정',
    render: () => <Button>dd</Button>,
  },
]

export const deilveryTh = [
  {
    title: '주문번호',
    dataIndex: 'ordernumber',
    key: 'ordernumber',
  },
  {
    title: '택배사',
    dataIndex: 'ordernumber',
    key: 'ordernumber',
  },
  {
    title: '송장번호',
    dataIndex: 'ordernumber',
    key: 'ordernumber',
  },
  {
    title: 'SKU',
    dataIndex: 'ordernumber',
    key: 'ordernumber',
  },
  {
    title: '배송상태',
    dataIndex: 'ordernumber',
    key: 'ordernumber',
  },
  {
    title: '주문번호',
    dataIndex: 'ordernumber',
    key: 'ordernumber',
  },
  {
    title: '배송시작일자',
    dataIndex: 'ordernumber',
    key: 'ordernumber',
  },
  {
    title: '배송완료일자',
    dataIndex: 'ordernumber',
    key: 'ordernumber',
  },
  {
    title: '수령인',
    dataIndex: 'ordernumber',
    key: 'ordernumber',
  },
  {
    title: '배송지',
    dataIndex: 'ordernumber',
    key: 'ordernumber',
  },
]

export const deviceTh = [
  {
    title: '번호',
    dataIndex: 'ordernumber',
    key: 'ordernumber',
  },
  {
    title: '접속환경',
    dataIndex: 'ordernumber',
    key: 'ordernumber',
  },
  {
    title: '접속환경 버전',
    dataIndex: 'ordernumber',
    key: 'ordernumber',
  },
  {
    title: '최근 접속 일자',
    dataIndex: 'ordernumber',
    key: 'ordernumber',
  },
  {
    title: '앱 버전',
    dataIndex: 'ordernumber',
    key: 'ordernumber',
  },
  {
    title: 'IP주소',
    dataIndex: 'ordernumber',
    key: 'ordernumber',
  },
]

export const couselTh = [
  {
    title: '작성일자',
    dataIndex: 'createdAsTimestamp',
    render: (createdAsTimestamp) => timeToDate(createdAsTimestamp),
  },
  {
    title: '인입채널',
    dataIndex: 'channelTypeCode',
    render: (channelTypeCode) =>
      channelTypeCode === 'CHANNEL_TALK'
        ? '채널톡'
        : channelTypeCode === 'PHONE'
        ? '전화'
        : channelTypeCode === 'ETC'
        ? '기타'
        : '',
  },
  {
    title: '내용',
    dataIndex: 'content',
    width: '40%',
  },
  {
    title: '문의유형',
    dataIndex: 'category',
    render: (category) => category?.name,
  },
  {
    title: '상담결과',
    dataIndex: 'statusTypeCode',
    render: (statusTypeCode) =>
      statusTypeCode === 'OPEN'
        ? '생성'
        : statusTypeCode === 'PENDING'
        ? '대기'
        : statusTypeCode === 'COMPLETED'
        ? '완료'
        : statusTypeCode === 'PROGRESS'
        ? '진행중'
        : '',
  },
  {
    title: '작성자',
    dataIndex: 'writer',
    key: 'writer',
  },
]
