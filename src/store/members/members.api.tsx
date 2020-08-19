import { getAPI, putAPI, postAPI } from '@store/api/index'

const API_URL = 'api/user/search/'
const COUPON_API_URL = 'api/user/coupon/list'
const POST_COUPON_URL = 'api/user/coupon'
const POST_USER_CHILDREN_URL = 'api/user/profile'

//회원 상세정보
export const requestMemberInfo = (payload: { keyword: string; type: string; service: string }) => {
  let path = API_URL
  if (!payload) return

  const { keyword, type, service } = payload

  if (type === 'email') {
    path += `email?accountName=${keyword}&licenseTypeCode=${service}`
  } else if (type === 'id') {
    path += `id?id=${keyword}&licenseTypeCode=${service}`
  } else if (type === 'phone') {
    path += `phone?phoneNumber=${keyword}&licenseTypeCode=${service}`
  }

  return getAPI(path)
}

//회원결제정보
export const requestPaymentList = (payload: { licenseId: number; licenseTypeCode: string }) => {
  const { licenseId, licenseTypeCode } = payload
  let path = `api/payment/transaction/list?licenseId=${licenseId}&licenseTypeCode=${licenseTypeCode}`
  return getAPI(path)
}

//회원상세 - 쿠폰정보
export const requestCouponList = (payload: { id: string; type: string }) => {
  let path = COUPON_API_URL
  if (!payload) return

  const { id, type } = payload

  path += `?licenseId=${id}&licenseTypeCode=${type}`

  return getAPI(path)
}

//회원 쿠폰 발급
export const postUserCoupon = (payload) => {
  let path = POST_COUPON_URL

  return putAPI(path, payload)
}

//자녀 프로필 리스트
export const requestProfileList = (payload: { licenseId: number; licenseTypeCode: string }) => {
  const { licenseId, licenseTypeCode } = payload
  let path = `api/user/profile/list?licenseId=${licenseId}&licenseTypeCode=${licenseTypeCode}`
  return getAPI(path)
}

//자녀 프로필 생성
export const postUserChildren = (payload) => {
  let path = POST_USER_CHILDREN_URL
  return postAPI(path, payload)
}

//자녀 프로필 수정
export const editUserChildren = (payload) => {
  let path = POST_USER_CHILDREN_URL
  return putAPI(path, payload)
}

//회원상세정보 - 상담정보 리스트
export const requestEnquiryList = (payload: { licenseId: string; licenseTypeCode: string }) => {
  let path = 'api/user/api/enquiry/ticket/list'
  if (!payload) return

  const { licenseId, licenseTypeCode } = payload
  path += `?licenseId=${licenseId}&licenseTypeCode=${licenseTypeCode}`

  return getAPI(path)
}

//회원상세정보 - 상담정보 - 문의유형 리스트
export const requestEnquiryCategoryList = () => {
  let path = 'api/enquiry/category/list'

  return getAPI(path)
}

//자녀 프로필 생성
export const postEnquiryTicket = (payload) => {
  let path = 'api/user/api/enquiry/ticket'
  return postAPI(path, payload)
}
