import { takeEvery, put, call } from 'redux-saga/effects'
import * as coupons from '@store/coupons/coupons.action'
import * as couponApi from '@store/coupons/coupons.api'
import { memberDto } from '@store/members/members.type'
import { CouponDto } from '../coupons/coupons.type'

//쿠폰 리스트
function* requestCouponList() {
  try {
    const couponData: CouponDto = yield call(couponApi.requestFetchCoupons)
    yield put(coupons.requestFetchCouponAsync.success(couponData))
  } catch (error) {
    yield put(coupons.requestFetchCouponAsync.failure(error))
  }
}

export function* watchRequestCouponList() {
  yield takeEvery(coupons.requestFetchCouponAsync.request, requestCouponList)
}

//셀렉옵션
// function* requestSearchMember(action) {
//   const { payload } = action
//   try {
//     const memberData: memberDto = yield call(couponApi.fetchMemberRequest, payload)
//     yield put(coupons.fetchMemberIdAsync.success(memberData))
//   } catch (error) {
//     yield put(coupons.fetchMemberIdAsync.failure(error))
//   }
// }

// export function* watchRequestMember() {
//   yield takeEvery(coupons., requestSearchMember)
// }
