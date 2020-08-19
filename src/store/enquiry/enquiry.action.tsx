import { ActionType, createAction, createAsyncAction } from 'typesafe-actions'
import { AxiosError } from 'axios'

//회원상세관리 - 상담정보 행 티켓
export const requestEnquiryListAsync = createAsyncAction(
  '@coupons/REQUEST_ENQUIEY_LIST',
  '@coupons/REQUEST_ENQUIEY_LIST_SUCCESS',
  '@coupons/REQUEST_ENQUIEY_LIST_FAILURE'
)<any, any, AxiosError>()

export const actions = {
  requestEnquiryListAsync,
}

export type EnquiryAction = ActionType<typeof actions>
