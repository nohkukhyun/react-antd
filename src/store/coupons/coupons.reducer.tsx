import { ActionType, getType } from 'typesafe-actions'
import { CouponAction, actions as coupon } from './coupons.action'
import { CouponState } from './coupons.type'
import { filterSet } from '../members/members.action'

const initialState: CouponState = {
  filter: {
    licenseTypeCode: 'JUNIOR',
    relationTypeCode: 'GUEST',
    searchDate: 'created',
    searchDateText: '',
    searchType: 'name',
    searchKeyword: '',
    status: 1,
    pageSize: 20,
    currentPage: 1,
  },
  list: [],
  detail: {},
  makeState: {
    amount: 0,
    couponTypeCode: 'FIXED_AMOUNT',
    description: '',
    enabled: false,
    expiration: '',
    id: 0,
    licenseTypeCode: 'JUNIOR',
    name: '',
    relationTypeCode: 'GUEST',
    restricted: false,
    singleCode: false,
    stock: 0,
    codeExpiration: 0,
    productIds: [],
  },
}

const couponsPage = (state: CouponState = initialState, action: CouponAction) => {
  switch (action.type) {
    case getType(coupon.filterSet):
      const key = action.payload.key
      return {
        ...state,
        filter: {
          ...state.filter,
          licenseTypeCode:
            key === 'licenseTypeCode' ? action.payload.value : state.filter.licenseTypeCode,
          searchDate: key === 'searchDate' ? action.payload.value : state.filter.searchDate,
          searchDateText:
            key === 'searchDateText' ? action.payload.value : state.filter.searchDateText,
          searchType: key === 'searchType' ? action.payload.value : state.filter.searchType,
          relationTypeCode:
            key === 'relationTypeCode' ? action.payload.value : state.filter.relationTypeCode,
          searchKeyword:
            key === 'searchKeyword' ? action.payload.value : state.filter.searchKeyword,
          status: key === 'status' ? action.payload.value : state.filter.status,
          pageSize: key === 'pagesize' ? action.payload.value : state.filter.pageSize,
          currentPage: key === 'current' ? action.payload.value : state.filter.currentPage,
        },
      }

    case getType(coupon.filterReset):
      return {
        ...state,
        filter: initialState.filter,
      }

    case getType(coupon.requestFetchCouponAsync.success):
      return {
        ...state,
        list: action.payload,
      }

    case getType(coupon.requestCouponDetailAsync.success):
      return {
        ...state,
        detail: action.payload,
      }

    case getType(coupon.CouponMakeSet):
      return {
        ...state,
        makeState: {
          ...state.makeState,
          ...action.payload,
        },
      }

    case getType(coupon.resetCouponMakeState):
      return {
        ...state,
        makeState: initialState.makeState,
      }

    case getType(coupon.selectedProductIdSet):
      return {
        ...state,
        makeState: {
          ...state.makeState,
          productIds: action.payload,
        },
      }

    default:
      return state
  }
}

export default couponsPage
