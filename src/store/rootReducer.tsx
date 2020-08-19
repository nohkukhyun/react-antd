import { combineReducers } from 'redux'
import membersPage from './members/members.reducer'
import couponsPage from './coupons/coupons.reducer'
import authPage from './auth/auth.reducer'
import product from './products/products.reducer'
import deliveryPage from './delivery/delivery.reducer'
import paymentPage from './payment/payment.reducer'

const rootReducer = combineReducers({
  authPage,
  membersPage,
  couponsPage,
  deliveryPage,
  paymentPage,
  product,
})

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>
