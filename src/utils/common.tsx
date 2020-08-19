import moment from 'moment'
import { Select, Badge } from 'antd'
const { Option } = Select

//timestamp to date
export const timeToDate = (date: number) => {
  if (!date) return
  let timetoDate = moment.utc(date).format('YYYY-MM-DD HH:mm:ss')
  return timetoDate
}

//콤마
export const numberComma = (value) => {
  if (!value) return
  let val = value.toString()
  let commaValue = val.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return commaValue
}

//만료체크
export const authTokenExpiredCheck = () => {
  const date = new Date()
  const now = date.getTime()
  const exDate = localStorage.getItem('new_expires_in')
  if (now > Number(exDate)) {
    window.location.href = '/auth/login'
  }
}

//로그인했는지 안했는지
export const authCheckReturnLoginPage = (check = false) => {
  const accesToken = localStorage.getItem('access_token')
  const refreshToken = localStorage.getItem('refresh_token')
  if (accesToken === null && refreshToken === null) {
    window.location.href = '/auth/login'
  }
}

//계정, 타입 셀렉박스 만들기
export const makeSelectOptions = (array) => {
  const sItem = array.map((sname: { title: string; key: string }, i: number) => {
    return (
      <Option value={sname.key} key={i}>
        {sname.title}
      </Option>
    )
  })
  return sItem
}

//라인센스 타입의 따른 서비스이름
export const changeToLineUpName = (data: string) => {
  switch (data) {
    case 'JUNIOR':
      return '21세기영어'
    case 'BRIT_ENGLISH':
      return '브릿잉글리쉬'
    case 'DRMUZY':
      return '닥터뮤지'
    case 'HOMEGLISH':
      return '홈글리쉬'
    case 'REALCLASS':
      return '리얼클래스'
    case 'OKDOCTOR':
      return '오케이닥터'
    case 'QUALSON':
      return '퀄슨'
    case 'SUPERFAN':
      return '슈퍼팬'
    case 'SUPERFAN_H':
      return '슈퍼팬_H'
    case 'SUPERFAN_O':
      return '슈퍼팬_O'

    default:
      return data
  }
}

//결제
export const changeToPaymentStatusType = (data: string) => {
  switch (data) {
    case 'COUPON':
      return '쿠폰'
    case 'HYOSUNG_CREDIT_CARD':
      return '효성신용카드'
    case 'KAKAO_PAY':
      return '카카오페이'
    case 'LGU_BANK_TRANSFER':
      return '계좌이체'
    case 'LGU_CREDIT_CARD':
      return '신용카드'
    case 'LGU_MOBILE':
      return '모바일결제'
    case 'LGU_VIRTUAL_ACCOUNT':
      return '무통장입금'
    case 'NAVER_PAY':
      return '네이버페이'
    case 'QUALSON':
      return '퀄슨'
    case 'QUALSON_POINT':
      return '퀄슨포인트'
    case 'TOSS':
      return '토스'
    case 'UNKNOW':
      return '기타'
    default:
      return data
  }
}

//결제상태값이름
export const changeToPaymentStatusTypeCode = (data: string, badge = true) => {
  switch (data) {
    case 'CANCELLED':
      return badge ? (
        <Badge color={'#ff5722'} offset={[-80, 10]}>
          취소
        </Badge>
      ) : (
        '취소'
      )
    case 'COMPLETED':
      return badge ? (
        <Badge color={'#005086'} offset={[-80, 10]}>
          결제완료
        </Badge>
      ) : (
        '결제완료'
      )
    case 'FAILED':
      return badge ? (
        <Badge color={'#810000'} offset={[-80, 10]}>
          결제실패
        </Badge>
      ) : (
        '결제실패'
      )
    case 'PENDING':
      return badge ? (
        <Badge color={'#dddddd'} offset={[-80, 10]}>
          입금대기
        </Badge>
      ) : (
        '입금대기'
      )
    case 'PLACE_ORDER':
      return badge ? (
        <Badge color={'#318fb5'} offset={[-80, 10]}>
          현장결제
        </Badge>
      ) : (
        '현장결제'
      )
    case 'POST_ORDER':
      return badge ? (
        <Badge color={'#318fb5'} offset={[-80, 10]}>
          포스트오더
        </Badge>
      ) : (
        '포스트 오더'
      )
    case 'PRE_ORDER':
      return badge ? (
        <Badge color={'#00bcd4'} offset={[-80, 10]}>
          사전예약
        </Badge>
      ) : (
        '사전예약'
      )
    case 'REFUND':
      return badge ? (
        <Badge color={'#dd2c00'} offset={[-80, 10]}>
          환불
        </Badge>
      ) : (
        '환불'
      )
    case 'T_COMPLETED':
      return badge ? (
        <Badge color={'#dd2c00'} offset={[-80, 10]}>
          결제완료
        </Badge>
      ) : (
        '결제완료'
      )
    case 'UNKNOWN':
      return '기타'
    default:
      return data
  }
}

export const changeToProductPeriodTypeCode = (data: string) => {
  switch (data) {
    case 'DAY':
      return '일'
    case 'MONTH':
      return '개월'
    case 'YEAR':
      return '년'
    case 'DEFAULT':
      return ''

    default:
      return data
  }
}
