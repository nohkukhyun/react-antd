import { takeEvery, put, call, all } from 'redux-saga/effects'
import * as members from '@store/members/members.action'
import * as membersApi from '@store/members/members.api'
import {
  memberDto,
  childrenUserProfileDto,
  EnquiryTicketPostDto,
  ProfileListDto,
  PaymentDto,
  LicenseDto,
} from '@store/members/members.type'
import { CouponDto } from '../coupons/coupons.type'
import { useSelector } from 'react-redux'
import { RootState } from '../rootReducer'
import { EnquiryTicketDto } from '@store/enquiry/enquiry.type'

//셀렉옵션
function* requestSearchMember(action) {
  const { payload } = action
  try {
    const memberData: LicenseDto = yield call(membersApi.requestMemberInfo, payload)
    yield put(members.requestMemberAsync.success(memberData))
  } catch (error) {
    yield put(members.requestMemberAsync.failure(error))
  }
}

//회원상세 페이지
function* requestMemberDetail(action) {
  const { payload } = action

  try {
    const memberData: memberDto = yield call(membersApi.requestMemberInfo, payload)
    yield put(members.requestMemberDetailAsync.success(memberData))
  } catch (error) {
    yield put(members.requestMemberDetailAsync.failure(error))
  }
}

//회원상세 - 결제정보
function* requestPaymentList(action) {
  const { payload } = action
  try {
    const paymentData: PaymentDto = yield call(membersApi.requestPaymentList, payload)
    yield put(members.requestPaymentListAsync.success(paymentData))
  } catch (error) {
    yield put(members.requestPaymentListAsync.failure(error))
  }
}

//회원 쿠폰 리스트
function* requestUserCouponList(action) {
  const { payload } = action

  try {
    const couponData: any = yield call(membersApi.requestCouponList, payload)
    yield put(members.requestUserCouponListAsync.success(couponData))
  } catch (error) {
    yield put(members.requestUserCouponListAsync.failure(error))
  }
}

//회원쿠폰발급
function* postUserCoupon(action) {
  const { payload } = action

  try {
    const postUserCouponData: any = yield call(membersApi.postUserCoupon, payload)
    yield put(members.postUserCouponPopup.success(postUserCouponData))
  } catch (error) {
    yield put(members.postUserCouponPopup.failure(error))
  }
}

//자녀 프로필 리스트
function* requestProfileList(action) {
  const { payload } = action
  try {
    const memberData: ProfileListDto = yield call(membersApi.requestProfileList, payload)
    yield put(members.requestProfileListAsync.success(memberData))
  } catch (error) {
    yield put(members.requestProfileListAsync.failure(error))
  }
}

//자녀 프로필 생성
function* postUserChildren(action) {
  const { payload } = action

  try {
    const childrenData: childrenUserProfileDto = yield call(membersApi.postUserChildren, payload)
    yield put(members.postUserChildrenPopup.success(childrenData))
  } catch (error) {
    yield put(members.postUserChildrenPopup.failure(error))
  }
}

//자녀 프로필 수정
function* editUserChildren(action) {
  const { payload } = action
  console.log('editUserChildren', { payload })
  try {
    const childrenData: childrenUserProfileDto | any = yield call(
      membersApi.editUserChildren,
      payload
    )
    console.log('editUserChildren', { childrenData })
    yield put(members.editUserChildrenPopup.success(childrenData))
    if (childrenData.status === 200) {
      yield put(
        members.requestProfileListAsync.request({
          licenseId: payload.licenseId,
          licenseTypeCode: payload.licenseTypeCode,
        })
      )
    }
  } catch (error) {
    yield put(members.editUserChildrenPopup.failure(error))
  }
}

//회원관리상세 - 상담정보티켓
function* requestEnquiryList(action) {
  const { payload } = action
  try {
    const enquiryData: EnquiryTicketDto = yield call(membersApi.requestEnquiryList, payload)
    yield put(members.requestEnquiryListAsync.success(enquiryData))
  } catch (error) {
    yield put(members.requestEnquiryListAsync.failure(error))
  }
}

//회원관레상세 - 상담정보티켓 - 문의유형
function* requestEnquiryCategoryList() {
  try {
    const enquiryData: EnquiryTicketDto = yield call(membersApi.requestEnquiryCategoryList)
    yield put(members.requestEnquiryCategoryListAsync.success(enquiryData))
  } catch (error) {
    yield put(members.requestEnquiryCategoryListAsync.failure(error))
  }
}

//회원관리상세 - 상담추가
function* postEnquiryTieckt(action) {
  const { payload } = action
  try {
    const enquiryTicketData: EnquiryTicketPostDto | any = yield call(
      membersApi.postEnquiryTicket,
      payload
    )
    yield put(members.postEnquiryTicketAsync.success(enquiryTicketData))
    if (enquiryTicketData.status === 200) {
      yield put(
        members.requestEnquiryListAsync.request({
          licenseId: payload.licenseId,
          licenseTypeCode: payload.licenseTypeCode,
        })
      )
    }
  } catch (error) {
    yield put(members.postEnquiryTicketAsync.failure(error))
  }
}

export function* memberSaga() {
  yield all([
    takeEvery(members.REQUEST_MEMBER_SEARCH, requestSearchMember),
    takeEvery(members.REQUEST_MEMBER_DETAIL, requestMemberDetail),
    takeEvery(members.requestPaymentListAsync.request, requestPaymentList),
    takeEvery(members.REQUEST_USER_COUPON_LIST, requestUserCouponList),
    takeEvery(members.postUserCouponPopup.request, postUserCoupon),
    takeEvery(members.requestProfileListAsync.request, requestProfileList),
    takeEvery(members.postUserChildrenPopup.request, postUserChildren),
    takeEvery(members.editUserChildrenPopup.request, editUserChildren),
    takeEvery(members.requestEnquiryListAsync.request, requestEnquiryList),
    takeEvery(members.requestEnquiryCategoryListAsync.request, requestEnquiryCategoryList),
    takeEvery(members.postEnquiryTicketAsync.request, postEnquiryTieckt),
  ])
}
