import { takeEvery, put, call, all } from 'redux-saga/effects'
import { requestProductsListAsync } from '@store/products/proudcts.action'
import * as productApi from '@store/products/products.api'
import { ProductState } from '@store/products/products.type'
import { getType } from 'typesafe-actions'

function* requestProductList(action) {
  const { payload } = action
  try {
    const productListData: any = yield call(productApi.requestProductList, payload)
    yield put(requestProductsListAsync.success(productListData))
  } catch (error) {
    yield put(requestProductsListAsync.failure(error))
  }
}

export function* productSaga() {
  yield all([takeEvery(requestProductsListAsync.request, requestProductList)])
}
