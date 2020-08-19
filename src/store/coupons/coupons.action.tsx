import { ActionType, createAction, createAsyncAction } from 'typesafe-actions'
import { AxiosError } from 'axios'
import { CouponDto, CouponCommand, ProductDto } from './coupons.type'

//검색 필터 설정
export const filterSet = createAction('FILTER_SET')<any>()
//검색초기화
export const filterReset = createAction('FILTER_RESET')()

//쿠폰 리스트 조회
export const requestFetchCouponAsync = createAsyncAction(
  '@coupons/REQUEST_FETCH_COUPON',
  '@coupons/REQUEST_FETCH_COUPON_SUCCESS',
  '@coupons/REQUEST_FETCH_COUPON_FAILURE'
)<unknown, any, AxiosError>()

//쿠폰 상세 액션
export const requestCouponDetailAsync = createAsyncAction(
  '@couponse/REQUEST_COUPON_DETAIL',
  '@couponse/REQUEST_COUPON_DETAIL_SUCCESS',
  '@couponse/REQUEST_COUPON_DETAIL_FAILURE'
)<any, CouponDto, AxiosError>()

//쿠폰생성셋팅
export const CouponMakeSet = createAction('@coupons/COUPON_MAKE_SET')<CouponCommand>()

//쿠폰추가
export const postCouponMakeAsync = createAsyncAction(
  '@coupons/POST_COUPON_MAKE',
  '@coupons/COUPON_MAKE_SUCCESS',
  '@coupons/COUPON_MAKE_FAILURE'
)<CouponCommand, any, AxiosError>()

export const selectedProductIdSet = createAction('@coupon/SELECTED_PRODUCT_SET')<ProductDto>()

export const resetCouponMakeState = createAction('@coupo/RESET_COUPON_MAKE_STATE')<undefined>()

export const actions = {
  filterSet,
  filterReset,
  CouponMakeSet,
  requestFetchCouponAsync,
  requestCouponDetailAsync,
  postCouponMakeAsync,
  selectedProductIdSet,
  resetCouponMakeState,
}
export type CouponAction = ActionType<typeof actions>
