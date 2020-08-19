import {
  requestProductsListAsync,
  ProductAction,
  selectedProductSet,
  resetSelectedProductSet,
} from './proudcts.action'
import { ProductState } from './products.type'
import { getType } from 'typesafe-actions'

const initialState: ProductState = {
  list: [],
  error: '',
  selectedProduct: [],
}

const product = (state: ProductState = initialState, action: ProductAction) => {
  switch (action.type) {
    // case getType(requestProductsListAsync.request):
    //   return {
    //     ...state,
    //     list: action.payload,
    //   }

    case getType(requestProductsListAsync.success):
      return {
        ...state,
        list: action.payload,
        error: '',
      }

    case getType(requestProductsListAsync.failure):
      return {
        ...state,
        list: '',
        error: action.payload,
      }

    case getType(selectedProductSet):
      return {
        ...state,
        selectedProduct: action.payload,
      }

    case getType(resetSelectedProductSet):
      return {
        ...state,
        selectedProduct: initialState.selectedProduct,
      }

    default:
      return state
  }
}

export default product
