import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import * as S from './couponmake.styled'
import PageNavigation from '@src/components/common/pagenavigation'
import * as coupon from '@store/coupons/coupons.action'
import { RootState } from '@src/store/rootReducer'
import CouponMakeSetting from '../couponmakesetting'
import CouponProductsList from '../couponproductlist'
import { DetailSectionWrap } from 'styles/common/style'

const CouponMake: React.FC = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const { query } = router

  const { detail } = useSelector((state: RootState) => state.couponsPage)
  const { products }: any = detail

  //쿠폰디테일
  useEffect(() => {
    dispatch(coupon.requestCouponDetailAsync.request({ id: query.id }))
  }, [])

  return (
    <S.CouponDetailWrap>
      <PageNavigation />
      <DetailSectionWrap>
        {/* 쿠폰정보 */}
        <CouponMakeSetting detail={detail} />
        {/* 상품프로덕트 */}
        <CouponProductsList />
      </DetailSectionWrap>
    </S.CouponDetailWrap>
  )
}

export default CouponMake
