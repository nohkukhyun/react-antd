export interface serviceType {
  id: number
  nameKr: string
  nameEng: string
}

//회원관리 - 계정
export const service: serviceType[] = [
  {
    id: 1,
    nameKr: '전체',
    nameEng: 'all',
  },
  {
    id: 2,
    nameKr: '통합',
    nameEng: 'total',
  },
  {
    id: 3,
    nameKr: '리얼클래스',
    nameEng: 'real',
  },
  {
    id: 4,
    nameKr: '브릿잉글리쉬',
    nameEng: 'brit',
  },
  {
    id: 5,
    nameKr: '닥터뮤지',
    nameEng: 'drmuzy',
  },
  {
    id: 6,
    nameKr: '홈글리쉬',
    nameEng: 'homeglish',
  },
  {
    id: 7,
    nameKr: '21세기영어',
    nameEng: 'junior',
  },
]

export interface stepType {
  title: string
  dataIndex: string
  key: string
}

export const step: stepType[] = [
  {
    title: 'GUEST',
    dataIndex: 'GUEST',
    key: 'GUEST',
  },
  {
    title: 'QA',
    dataIndex: 'QA',
    key: 'QA',
  },
  {
    title: 'B2B',
    dataIndex: 'B2B',
    key: 'B2B',
  },
  {
    title: 'EMPLOYEE',
    dataIndex: 'EMPLOYEE',
    key: 'EMPLOYEE',
  },
  {
    title: 'FNF',
    dataIndex: 'FNF',
    key: 'FNF',
  },
  {
    title: 'NORMAL',
    dataIndex: 'NORMAL',
    key: 'NORMAL',
  },
  {
    title: 'UNKNOWN',
    dataIndex: 'UNKNOWN',
    key: 'UNKNOWN',
  },
]
