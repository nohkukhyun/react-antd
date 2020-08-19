import { getAPI } from '@store/api/index'

//상담정보
const FETCH_API_URL = 'api/coupon/list'
export const requestFetchCoupons = () => {
  let path = FETCH_API_URL
  return getAPI(path)
}
