import { getType } from 'typesafe-actions'
import * as delivery from './delivery.action'
import { deliveryState } from './delivery.type'

const initialState: deliveryState = {
  filter: {
    licenseTypeCode: 'JUNIOR',
    itemTypeCode: 'CURRICULUM',
    pageSize: 20,
    currentPage: 1,
  },
  list: [],
  detail: {},
}

const deliveryPage = (state: deliveryState = initialState, action: delivery.DeliveryAction) => {
  switch (action.type) {
    case getType(delivery.filterSet):
      return {
        ...state,
        filter: {
          ...state.filter,
          ...action.payload,
        },
      }

    case getType(delivery.filterReset):
      return {
        ...state,
        filter: initialState.filter,
      }

    case getType(delivery.requestLineItemListAsync.success):
      return {
        ...state,
        list: action.payload,
      }

    default:
      return state
  }
}

export default deliveryPage
