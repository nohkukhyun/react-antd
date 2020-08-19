import * as member from './members.action'
import { FilterState } from './members.type'
import { getType, ActionType } from 'typesafe-actions'

//멤버조회 검색 서치폼
const initialState: FilterState = {
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
  profile: {
    list: [],
    popupState: {
      firstName: '',
      id: 0,
      lastName: '',
      licenseId: 0,
      licenseTypeCode: 0,
      profileTypeCode: 0,
      yearOfBirth: '',
      birthday: '',
    },
  },
  payment: {
    list: [],
  },
  enquiry: {
    list: [],
    popupState: {
      categoryId: 0,
      channelTypeCode: 'PHONE',
      content: '',
      id: 0,
      licenseId: 0,
      licenseType: 0,
      licenseTypeCode: '',
      statusTypeCode: 'OPEN',
    },
    category: [],
  },
  coupon: {
    list: [],
    popupState: {
      couponPlanId: 0,
      memo: '',
    },
  },
}

export type MembersAction =
  | ReturnType<typeof member.filterSet>
  | ReturnType<typeof member.UserCouponPopupSet>
  | ActionType<typeof member.requestEnquiryListAsync>

const membersPage = (state: FilterState = initialState, action: MembersAction): FilterState => {
  switch (action.type) {
    case member.FILTER_SET:
      const key = action.payload.key
      return {
        ...state,
        filter: {
          ...state.filter,
          licenseTypeCode: key === 'service' ? action.payload.value : state.filter.licenseTypeCode,
          relationTypeCode: key === 'type' ? action.payload.value : state.filter.relationTypeCode,
          searchType: key === 'searchType' ? action.payload.value : state.filter.searchType,
          searchKeyword:
            key === 'searchKeyword' ? action.payload.value : state.filter.searchKeyword,
          pageSize: key === 'pagesize' ? action.payload.value : state.filter.pageSize,
          currentPage: key === 'current' ? action.payload.value : state.filter.currentPage,
        },
      }

    case member.FILTER_RESET:
      return {
        ...state,
        filter: {
          licenseTypeCode: 9,
          relationTypeCode: 'guest',
          searchType: 'id',
          searchKeyword: '',
          pageSize: state.filter.pageSize,
          currentPage: state.filter.currentPage,
        },
      }

    case member.ENQUIRY_SET:
      // const type = action.payload.key
      return {
        ...state,
        enquiry: {
          ...state.enquiry,
          popupState: {
            ...state.enquiry.popupState,
            ...action.payload,
          },
          // channel: type === 'channel' ? action.payload.value : state.counselPopup.channel,
          // memo: type === 'memo' ? action.payload.value : state.counselPopup.memo,
        },
      }

    case member.REQUEST_MEMBER_SUCCESS:
      return {
        ...state,
        list: action.payload === '' ? null : [action.payload],
      }

    //회원상세정보
    case member.REQUEST_MEMBER_DETAIL_SUCCESS:
      return {
        ...state,
        detail: action.payload,
      }

    //결제정보리스트
    case getType(member.requestPaymentListAsync.success):
      return {
        ...state,
        payment: {
          ...state.payment,
          list: action.payload,
        },
      }

    //결제정보리스트실패
    case getType(member.requestPaymentListAsync.failure):
      return {
        ...state,
        payment: {
          ...state.payment,
          list: action.payload,
        },
      }

    //회원상세 쿠폰정보
    case member.REQUEST_USER_COUPON_LIST_SUCCESS:
      return {
        ...state,
        coupon: {
          ...state.coupon,
          list: action.payload,
        },
      }

    case getType(member.UserCouponPopupSet):
      return {
        ...state,
        coupon: {
          ...state.coupon,
          popupState: {
            couponPlanId:
              action.payload.couponPlanId === 'couponPlanId'
                ? action.payload.value
                : state.coupon.popupState.couponPlanId,
            memo:
              action.payload.memo === 'memo' ? action.payload.value : state.coupon.popupState.memo,
          },
        },
      }

    case getType(member.requestProfileListAsync.success):
      return {
        ...state,
        profile: {
          ...state.profile,
          list: action.payload,
        },
      }

    case getType(member.UserChildrenSet):
      return {
        ...state,
        profile: {
          ...state.profile,
          popupState: {
            ...state.profile.popupState,
            ...action.payload,
          },
        },
      }

    case getType(member.UserChildrenReset):
      return {
        ...state,
        profile: {
          ...state.profile,
          popupState: initialState.profile.popupState,
        },
      }

    case getType(member.requestEnquiryListAsync.success):
      return {
        ...state,
        enquiry: {
          ...state.enquiry,
          list: action.payload,
        },
      }

    //회원상세 -> 상담추가 -> 상담유형 가져오기
    case getType(member.requestEnquiryCategoryListAsync.success):
      return {
        ...state,
        enquiry: {
          ...state.enquiry,
          category: action.payload,
        },
      }

    default:
      return state
  }
}

export default membersPage
