import { getType } from 'typesafe-actions'
import * as payment from './payment.action'
import { PaymentState } from './payment.type'

const initialState: PaymentState = {
  filter: {
    licenseTypeCode: 'JUNIOR',
    relationTypeCode: 'GUEST',
    searchType: 'id',
    searchKeyword: '',
    pageSize: 20,
    currentPage: 1,
  },
  list: [],
  detail: {},
  error: null,
}

const paymentPage = (state: PaymentState = initialState, action: payment.PaymentAction) => {
  switch (action.type) {
    case getType(payment.filterSet):
      const key = action.payload.key
      return {
        ...state,
        filter: {
          ...state.filter,
          ...action.payload,
        },
      }

    case getType(payment.filterReset):
      return {
        ...state,
        filter: initialState.filter,
      }

    case getType(payment.requestPaymentListAsync.success):
      return {
        ...state,
        list: action.payload,
      }

    case getType(payment.requestPaymentListAsync.failure):
      return {
        ...state,
        list: action.payload,
      }

    case getType(payment.requestPaymentDetailAsync.success):
      return {
        ...state,
        detail: action.payload,
      }

    case getType(payment.requestPaymentDetailAsync.failure):
      return {
        ...state,
        error: action.payload,
      }

    default:
      return state
  }
}

export default paymentPage
