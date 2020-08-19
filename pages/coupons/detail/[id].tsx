import React from 'react'
import SiteLayout from '@components/common/layout'
import CouponSearch from '@components/coupon/couponsearch'
import CouponDetail from '@src/components/coupon/coupondetail'

const coupon = () => {
  return (
    <SiteLayout defaultKey={'coupon-1'} defaultOpenKeys={['coupon']}>
      <CouponDetail />
    </SiteLayout>
  )
}

export default coupon
