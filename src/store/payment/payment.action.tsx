import { ActionType, createAction, createAsyncAction } from 'typesafe-actions'
import { AxiosError } from 'axios'
import { PaymentDto } from '../members/members.type'
import { TransactionDto } from './payment.type'

//검색 필터 설정
export const filterSet = createAction('FILTER_SET')<any>()
//검색초기화
export const filterReset = createAction('FILTER_RESET')()

//결제리스트
export const requestPaymentListAsync = createAsyncAction(
  '@payment/REQUEST_PAYMENT_LIST',
  '@payment/PAYMENT_LIST_SUCCESS',
  '@payment/PAYMENT_LIST_FAILURE'
)<any, PaymentDto, AxiosError>()

//결제상세조회
export const requestPaymentDetailAsync = createAsyncAction(
  '@payment/REQUEST_PAYMENT_DETAIL',
  '@payment/PAYMENT_DETAIL_SUCCESS',
  '@payment/PAYMENT_DETAIL_FAILURE'
)<any, TransactionDto, AxiosError>()

export const actions = {
  filterSet,
  filterReset,
  requestPaymentListAsync,
  requestPaymentDetailAsync,
}
export type PaymentAction = ActionType<typeof actions>
