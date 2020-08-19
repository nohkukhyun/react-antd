import { takeEvery, put, call, all } from 'redux-saga/effects'
import * as coupons from '@store/coupons/coupons.action'
import * as couponApi from '@store/coupons/coupons.api'
import { memberDto, EnquiryPopup } from '@store/members/members.type'
import { CouponDto, CouponCommand } from '../coupons/coupons.type'

//쿠폰 리스트
function* requestCouponList() {
  try {
    const couponData: CouponDto = yield call(couponApi.requestFetchCoupons)
    yield put(coupons.requestFetchCouponAsync.success(couponData))
  } catch (error) {
    yield put(coupons.requestFetchCouponAsync.failure(error))
  }
}

//쿠폰상세조회
function* requestCouponDetail(action) {
  const { payload } = action
  try {
    const couponData: CouponDto = yield call(couponApi.requestCouponDetail, payload)
    yield put(coupons.requestCouponDetailAsync.success(couponData))
  } catch (error) {
    yield put(coupons.requestCouponDetailAsync.failure(error))
  }
}

//쿠폰생성
function* postCouponMake(action) {
  const { payload } = action
  try {
    const couponData: CouponCommand | any = yield call(couponApi.postCouponMake, payload)
    yield put(coupons.postCouponMakeAsync.success(couponData))
    if (couponData.status === 200) {
      yield put(coupons.resetCouponMakeState())
      // window.location.href = '/coupons/coupon'
    }
  } catch (error) {
    yield put(coupons.postCouponMakeAsync.failure(error))
  }
}

export function* couponSaga() {
  yield all([
    yield takeEvery(coupons.requestFetchCouponAsync.request, requestCouponList),
    yield takeEvery(coupons.requestCouponDetailAsync.request, requestCouponDetail),
    yield takeEvery(coupons.postCouponMakeAsync.request, postCouponMake),
  ])
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
