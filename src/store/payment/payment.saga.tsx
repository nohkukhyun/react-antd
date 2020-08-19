import { takeEvery, put, call, all } from 'redux-saga/effects'
import * as paymentApi from '@store/payment/payment.api'
import * as payment from '@store/payment/payment.action'
import { TransactionDto } from './payment.type'

//쿠폰 리스트
function* requestPaymentList(action) {
  const { payload } = action
  try {
    const paymentListData: TransactionDto = yield call(paymentApi.requestPaymentList, payload)
    yield put(payment.requestPaymentListAsync.success(paymentListData))
  } catch (error) {
    yield put(payment.requestPaymentListAsync.failure(error))
  }
}

//쿠폰상세조회
function* requestCouponDetail(action) {
  const { payload } = action
  try {
    const paymentDetailData: TransactionDto = yield call(paymentApi.requestPaymentDetail, payload)
    yield put(payment.requestPaymentDetailAsync.success(paymentDetailData))
  } catch (error) {
    yield put(payment.requestPaymentDetailAsync.failure(error))
  }
}

export function* paymentSaga() {
  yield all([
    yield takeEvery(payment.requestPaymentListAsync.request, requestPaymentList),
    yield takeEvery(payment.requestPaymentDetailAsync.request, requestCouponDetail),
  ])
}
