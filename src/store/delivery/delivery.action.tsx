import { ActionType, createAction, createAsyncAction } from 'typesafe-actions'
import { AxiosError } from 'axios'
import { LineItemDto } from './delivery.type'

//검색필터
export const filterSet = createAction('@delivery/FILTER_SET')<any>()
//검색초기화
export const filterReset = createAction('@delivery/FILTER_RESET')<undefined>()

//배송/물류관리 - 제품관리
export const requestLineItemListAsync = createAsyncAction(
  '@delivery/REQUEST_LINE_ITEM_LIST',
  '@delivery/LINE_ITEM_LIST_SUCCESS',
  '@delivery/LINE_ITEM_LIST_FAILURE'
)<any, LineItemDto, AxiosError>()

export const actions = {
  filterSet,
  filterReset,
  requestLineItemListAsync,
}

export type DeliveryAction = ActionType<typeof actions>
