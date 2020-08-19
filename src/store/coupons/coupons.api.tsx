import { getAPI, postAPI } from '@store/api/index'

//쿠폰 리스트 조회
const FETCH_API_URL = 'api/coupon/list'
export const requestFetchCoupons = () => {
  let path = FETCH_API_URL
  return getAPI(path)
}

//쿠폰 페이지 상세내역조회
//쿠폰 리스트 조회
export const requestCouponDetail = (payload) => {
  const { id } = payload
  let path = `api/coupon?id=${id}`
  return getAPI(path)
}

export const postCouponMake = (payload) => {
  let path = 'api/coupon'
  return postAPI(path, payload)
}
