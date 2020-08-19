import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import {
  requestMemberDetailAsync,
  requestUserCouponListAsync,
  requestEnquiryCategoryListAsync,
  requestProfileListAsync,
  requestPaymentListAsync,
  requestEnquiryListAsync,
} from '@store/members/members.action'
import * as S from './userinfo.styled'
import UserDescription from '../userdescription'
import UserProfile from '../userprofile'
import UserPayHistory from '../userpayhistory'
import UserDelivery from '../userdelivery'
import UserDevice from '../userdevice'
import UserCoupon from '../usercoupon'
import UserCounsel from '../usercounsel'
import { Skeleton } from 'antd'
import { RootState } from '@store/rootReducer'
import PageNavigation from '@src/components/common/pagenavigation'

export interface UserInfoProps {}

const UserInfo: React.FC<UserInfoProps> = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const query = router.query
  const { id, licenseTypeCode } = query

  const { filter, detail, coupon, enquiry } = useSelector((state: RootState) => state.membersPage)
  // const queryParam = querystring.parse(router)

  //유저의 정보 가져오기
  useEffect(() => {
    dispatch(
      requestMemberDetailAsync.request({ keyword: id, type: 'id', service: filter.licenseTypeCode })
    )
  }, [])

  //유저 쿠폰 리스트
  useEffect(() => {
    dispatch(requestUserCouponListAsync.request({ id: id, type: filter.licenseTypeCode }))
  }, [])

  //유저결제정보
  useEffect(() => {
    if (Object.keys(detail).length > 0) {
      dispatch(
        requestPaymentListAsync.request({
          licenseId: id,
          licenseTypeCode: filter.licenseTypeCode,
        })
      )
    }
  }, [detail])

  //유저 상담정보 리스트가져오기
  useEffect(() => {
    dispatch(requestEnquiryListAsync.request({ licenseId: id, licenseTypeCode: 'JUNIOR' }))
  }, [])

  useEffect(() => {
    dispatch(requestEnquiryCategoryListAsync.request({}))
  }, [])

  return (
    <S.UserInfoWrap>
      <PageNavigation />
      {/* 유저 정보 */}
      <S.UserSectionWrap>
        {Object.keys(detail).length === 0 ? <Skeleton /> : <UserDescription detail={detail} />}
      </S.UserSectionWrap>
      {/* 유저 프로필 */}
      <S.UserSectionWrap>
        {Object.keys(detail).length === 0 ? <Skeleton /> : <UserProfile detail={detail} />}
      </S.UserSectionWrap>
      {/* 유저 결제내역 */}
      <S.UserSectionWrap>
        <UserPayHistory detail={detail} />
      </S.UserSectionWrap>
      {/* 유저 배송정보 */}
      <S.UserSectionWrap>
        <UserDelivery />
      </S.UserSectionWrap>
      {/* 유저 기기 */}
      {/* <S.UserSectionWrap>
        <UserDevice />
      </S.UserSectionWrap> */}
      {/* 유저 상담정보 */}
      <S.UserSectionWrap>
        {Object.keys(enquiry).length === 0 ? <Skeleton /> : <UserCounsel enquiry={enquiry} />}
      </S.UserSectionWrap>
      {/* 유저 쿠폰정보 */}
      <S.UserSectionWrap>
        {Object.keys(detail).length === 0 ? (
          <Skeleton />
        ) : (
          <UserCoupon coupon={coupon} detail={detail} />
        )}
      </S.UserSectionWrap>
    </S.UserInfoWrap>
  )
}

export default UserInfo
