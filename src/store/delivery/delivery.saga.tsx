import { takeEvery, put, call, all } from 'redux-saga/effects'
import * as delivery from './delivery.action'
import * as deliveryApi from './delivery.api'
import { LineItemDto } from './delivery.type'

//쿠폰 리스트
function* requestLineItem(action) {
  const { payload } = action
  try {
    const lineItem: LineItemDto = yield call(deliveryApi.requestLineItem, payload)
    yield put(delivery.requestLineItemListAsync.success(lineItem))
  } catch (error) {
    yield put(delivery.requestLineItemListAsync.failure(error))
  }
}

export function* deliverySaga() {
  yield all([takeEvery(delivery.requestLineItemListAsync.request, requestLineItem)])
}
