import { createAsyncAction, ActionType, createAction } from 'typesafe-actions'
import { ProductState, ProductDto } from './products.type'
import { AxiosError } from 'axios'

//상품내역조회

// export const REQUEST_PRODUCT_LIST = '@product/REQUEST_PRODUCTS_LIST'
// export const REQUEST_PRODUCTS_LIST_SUCCESS = '@product/REQUEST_PRODUCTS_LIST_SUCCESS'
// export const REQUEST_PRODUCTS_LIST_FAILURE = '@product/REQUEST_PRODUCTS_LIST_FAILURE'

export const requestProductsListAsync = createAsyncAction(
  '@product/REQUEST_PRODUCTS_LIST',
  '@product/REQUEST_PRODUCTS_LIST_SUCCESS',
  '@product/REQUEST_PRODUCTS_LIST_FAILURE'
)<any, ProductDto, AxiosError>()

export const selectedProductSet = createAction('@product/SELECTED_PRODUCT_SET')<ProductDto>()

export const resetSelectedProductSet = createAction('@product/RESET_SELECTED_PRODUCT_SET')<
  undefined
>()

export const actions = {
  requestProductsListAsync,
  selectedProductSet,
  resetSelectedProductSet,
}

export type ProductAction = ActionType<typeof actions>
