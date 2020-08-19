import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import * as S from './coupondetail.styled'
import CouponDetailInfo from '../coupondetailinfo'
import CouponDetailProduct from '../coupondetailproduct'
import PageNavigation from '@src/components/common/pagenavigation'
import * as coupon from '@store/coupons/coupons.action'
import { RootState } from '@src/store/rootReducer'
import { requestProductsListAsync } from '@src/store/products/proudcts.action'

const CouponDetail: React.FC = () => {
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
      {/* 쿠폰정보 */}
      <CouponDetailInfo detail={detail} />
      {/* 상품프로덕트 */}
      <CouponDetailProduct detail={detail} products={products} />
    </S.CouponDetailWrap>
  )
}

export default CouponDetail
