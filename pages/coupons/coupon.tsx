import React from 'react'
import SiteLayout from '@components/common/layout'
import CouponSearch from '@components/coupon/couponsearch'

const coupon = () => {
  return (
    <SiteLayout defaultKey={'coupon-1'} defaultOpenKeys={['coupon']}>
      <CouponSearch />
    </SiteLayout>
  )
}

export default coupon
