import { all } from 'redux-saga/effects'
import { authSaga } from '@store/auth/auth.saga'
import { memberSaga } from '@store/members/members.saga'
import { couponSaga } from '@store/coupons/coupons.saga'
import { deliverySaga } from '@store/delivery/delivery.saga'
import { productSaga } from '@store/products/products.saga'
import { paymentSaga } from '@store/payment/payment.saga'

export default function* rootSaga() {
  yield all([authSaga(), memberSaga(), couponSaga(), deliverySaga(), productSaga(), paymentSaga()])
}
