import React from 'react'
import SiteLayout from '@src/components/common/layout'
import CouponMake from '@src/components/coupon/couponmake'

const couponmake = () => {
  return (
    <SiteLayout defaultKey={'coupon-1'} defaultOpenKeys={['coupon']}>
      <CouponMake />
    </SiteLayout>
  )
}

export default couponmake
