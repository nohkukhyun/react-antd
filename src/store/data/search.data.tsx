import React from 'react'
import Link from 'next/link'
import { changeToLineUpName } from '@src/utils/common'

export const memberSearchFrom = [
  {
    title: '계정',
    dataIndex: 'licenseType',
    key: 'licenseType',
    render: (licenseTypeCode) => changeToLineUpName(licenseTypeCode),
  },
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    render: (id) => (
      <Link href={`/members/userinfo/[id]`} as={`/members/userinfo/${id}`}>
        <a>{id}</a>
      </Link>
    ),
  },
  {
    title: '타입',
    dataIndex: 'relationType',
    key: 'relationType',
  },
  {
    title: '가입경로',
    dataIndex: 'snsType',
    key: 'snsType',
  },
  {
    title: '이메일',
    dataIndex: 'accountName',
    key: 'accountName',
    render: (accountName, id) => (
      <Link href={`/members/userinfo/[id]`} as={`/members/userinfo/${id.id}`}>
        <a>{accountName}</a>
      </Link>
    ),
  },
  {
    title: '전화번호',
    dataIndex: 'phoneNumber',
    key: 'phoneNumber',
  },
  {
    title: '닉네임',
    dataIndex: 'nickname',
    key: 'nickname',
  },
  {
    title: '가입일',
    dataIndex: 'created',
    key: 'created',
    render: (created) => created && `${created[0]}.${created[1]}.${created[2]}`,
  },
  {
    title: '마케팅수신동의',
    dataIndex: 'agreements',
    key: 'agreements',
    // render: (mktagree) => (mktagree ? '동의' : '비동의'),
  },
]

export const couponDateSearchFrom = [
  {
    title: '등록일자',
    dataIndex: 'register',
    key: 'register',
  },
  {
    title: '만료일자',
    dataIndex: 'expired',
    key: 'expired',
  },
]

export const couponNameSearchForm = [
  {
    title: '쿠폰이름',
    dataIndex: 'couponName',
    key: 'couponName',
  },
  {
    title: '메모',
    dataIndex: 'memo',
    key: 'memo',
  },
]

export const couponCategorySearchForm = [
  {
    title: '마케팅',
    dataIndex: 'mkt',
    key: 'mkt',
  },
  {
    title: 'TM',
    dataIndex: 'tm',
    key: 'tm',
  },
  {
    title: '온라인',
    dataIndex: 'online',
    key: 'online',
  },
]

export const lineupSelect = [
  // {
  //   title: '전체',
  //   dataIndex: 'UNKNOWN',
  //   key: 'UNKNOWN',
  // },
  {
    title: '리얼클래스',
    dataIndex: 'REALCLASS',
    key: 'REALCLASS',
  },
  {
    title: '브릿잉글리쉬',
    dataIndex: 'BRIT_ENGLISH',
    key: 'BRIT_ENGLISH',
  },
  {
    title: '닥터뮤지',
    dataIndex: 'DRMUZY',
    key: 'DRMUZY',
  },
  {
    title: '홈글리쉬',
    dataIndex: 'HOMEGLISH',
    key: 'HOMEGLISH',
  },
  {
    title: '주니어',
    dataIndex: 'JUNIOR',
    key: 'JUNIOR',
  },
  {
    title: '기타',
    dataIndex: 'UNKNOWN',
    key: 'UNKNOWN',
  },
]

//타입셀렉옵션
export const typeSelect = [
  {
    title: 'B2B',
    key: 'B2B',
  },
  {
    title: 'EMPLOYEE',
    key: 'EMPLOYEE',
  },
  {
    title: 'FNF',
    key: 'FNF',
  },
  {
    title: 'GUEST',
    key: 'GUEST',
  },
  {
    title: 'NORMAL',
    key: 'NORMAL',
  },
  {
    title: 'QA',
    key: 'QA',
  },
  {
    title: 'UNKNOWN',
    key: 'UNKNOWN',
  },
]

export const couponStatusSearchForm = [
  {
    title: '전체',
    dataIndex: 'all',
    key: 'all',
  },
  {
    title: '사용중',
    dataIndex: 'use',
    key: 'use',
  },
  {
    title: '사용중지',
    dataIndex: 'stop',
    key: 'stop',
  },
]

//아이템 타입 코드
export const itemTypeCode = [
  {
    title: 'BOOK',
    key: 'BOOK',
  },
  {
    title: 'BOOK_DOWNLOAD',
    key: 'BOOK_DOWNLOAD',
  },
  {
    title: 'CURRICULUM',
    key: 'CURRICULUM',
  },
  {
    title: 'DEVICE',
    key: 'DEVICE',
  },
  {
    title: 'QPOINT',
    key: 'QPOINT',
  },
  {
    title: 'SPEAKER',
    key: 'SPEAKER',
  },
  {
    title: 'THIRD_PARTY',
    key: 'THIRD_PARTY',
  },
  {
    title: 'UNKNOWN',
    key: 'UNKNOWN',
  },
]
