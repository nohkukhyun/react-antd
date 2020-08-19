import { createAsyncAction, createAction } from 'typesafe-actions'
import { AxiosError } from 'axios'
import { CouponDto } from '../coupons/coupons.type'
import { create } from 'domain'
import { childrenUserProfileDto, ProfileListDto, PaymentDto, LicenseDto } from './members.type'

export const FILTER_SET = 'FILTER_SET'
export const FILTER_RESET = 'FILTER_RESET'

//검색 필터 설정
export const filterSet = (payload) => ({
  type: FILTER_SET,
  payload,
})

//검색 필터 초기화
export const filterReset = () => ({
  type: FILTER_RESET,
})

//검색 서치 조회
export const REQUEST_MEMBER_SEARCH = '@member/REQUEST_MEMBER_SEARCH'
export const REQUEST_MEMBER_SUCCESS = '@member/REQUEST_MEMBER_SUCCESS'
export const REQUEST_MEMBER_FAILURE = '@member/REQUEST_MEMBER_FAILURE'

export const requestMemberAsync = createAsyncAction(
  REQUEST_MEMBER_SEARCH,
  REQUEST_MEMBER_SUCCESS,
  REQUEST_MEMBER_FAILURE
)<any, LicenseDto, AxiosError>()

//유저 상세 페이지
export const REQUEST_MEMBER_DETAIL = '@member/REQUEST_MEMBER_DETAIL'
export const REQUEST_MEMBER_DETAIL_SUCCESS = '@member/REQUEST_MEMBER_DETAIL_SUCCESS'
export const REQUEST_MEMBER_DETAIL_FAILURE = '@member/REQUEST_MEMBER_DETAIL_FAILURE'

export const requestMemberDetailAsync = createAsyncAction(
  REQUEST_MEMBER_DETAIL,
  REQUEST_MEMBER_DETAIL_SUCCESS,
  REQUEST_MEMBER_DETAIL_FAILURE
)<any, any, AxiosError>()

//유저 쿠폰 페이지
export const REQUEST_USER_COUPON_LIST = '@member/REQUEST_USER_COUPON_LIST'
export const REQUEST_USER_COUPON_LIST_SUCCESS = '@member/REQUEST_USER_COUPON_LIST_SUCCESS'
export const REQUEST_USER_COUPON_LIST_FAILURE = '@member/REQUEST_USER_COUPON_LIST_FAILURE'

export const requestUserCouponListAsync = createAsyncAction(
  REQUEST_USER_COUPON_LIST,
  REQUEST_USER_COUPON_LIST_SUCCESS,
  REQUEST_USER_COUPON_LIST_FAILURE
)<any, CouponDto, AxiosError>()

//상담추가 설정
export const ENQUIRY_SET = '@member/ENQUIRY_SET'

export const enquirySet = (payload) => ({
  type: ENQUIRY_SET,
  payload,
})

//멤버 상세 상담추가 팝업
export const POST_COUNSEL_MEMO_POPUP = '@member/POST_COUNSEL_MEMO_POPUP'
export const POST_COUNSEL_MEMO_POPUP_SUCCESS = '@member/POST_COUNSEL_MEMO_POPUP_SUCCESS'
export const POST_COUNSEL_MEMO_POPUP_FAILURE = '@member/POST_COUNSEL_MEMO_POPUP_FAILURE'

export const postCounselMemoPopup = createAsyncAction(
  POST_COUNSEL_MEMO_POPUP,
  POST_COUNSEL_MEMO_POPUP_SUCCESS,
  POST_COUNSEL_MEMO_POPUP_FAILURE
)<any, any, AxiosError>()

//쿠폰발급 필터값
export const UserCouponPopupSet = createAction('@members/USER_COUPON_POPUP_SET')<any>()

//쿠폰발급
export const postUserCouponPopup = createAsyncAction(
  '@members/POST_USER_COUPON',
  '@members/POST_USER_COUPON_SUCCESS',
  '@members/POST_USER_COUPON_FAILURE'
)<any, any, AxiosError>()

export const requestProfileListAsync = createAsyncAction(
  '@members/PROFILE_LIST',
  '@members/PROFILE_LIST_SUCCESS',
  '@members/PROFILE_LIST_FAILURE'
)<any, ProfileListDto, AxiosError>()

//자녀프로필셋
export const UserChildrenSet = createAction('@members/USER_CHILDREN_SET')<any>()
//자녀프로필리셋
export const UserChildrenReset = createAction('@members/USER_CHILDREN_RESET')<undefined>()

//자녀프로필 생성
export const postUserChildrenPopup = createAsyncAction(
  '@members/POST_USER_CHILDREN',
  '@members/POST_USER_CHILDREN_SUCCESS',
  '@members/POST_USER_CHILDREN_FAILURE'
)<childrenUserProfileDto, any, AxiosError>()

//자녀프로필 수정
export const editUserChildrenPopup = createAsyncAction(
  '@members/EDIT_USER_CHILDREN',
  '@members/EDIT_USER_CHILDREN_SUCCESS',
  '@members/EDIT_USER_CHILDREN_FAILURE'
)<childrenUserProfileDto, any, AxiosError>()

//회원상세관리 - 상담정보 행 티켓
export const requestEnquiryListAsync = createAsyncAction(
  '@coupons/REQUEST_ENQUIEY_LIST',
  '@coupons/REQUEST_ENQUIEY_LIST_SUCCESS',
  '@coupons/REQUEST_ENQUIEY_LIST_FAILURE'
)<any, any, AxiosError>()

//회원상세관리 - 상담정보 -> 상담추가 > 문의유형 셀렉트
export const requestEnquiryCategoryListAsync = createAsyncAction(
  '@coupons/REQUEST_ENQUIEY_CATEGORY_LIST',
  '@coupons/REQUEST_ENQUIEY_CATEGORY_LIST_SUCCESS',
  '@coupons/REQUEST_ENQUIEY_CATEGORY_LIST_FAILURE'
)<any, any, AxiosError>()

//회원상세관리 - 상담정보 -> 상담추가
export const postEnquiryTicketAsync = createAsyncAction(
  '@coupons/POST_ENQUIRY_TICKET',
  '@coupons/POST_ENQUIRY_TICKET_SUCCESS',
  '@coupons/POST_ENQUIRY_TICKET_FAILURE'
)<any, any, AxiosError>()

//회원상세관리 - 결제정보
export const requestPaymentListAsync = createAsyncAction(
  '@members/REQUEST_PAYMENT_LIST',
  '@members/PAYMENT_LIST_SUCCESS',
  '@members/PAYMENT_LIST_FAILURE'
)<any, PaymentDto, AxiosError>()
