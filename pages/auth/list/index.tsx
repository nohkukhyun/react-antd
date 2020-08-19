import AuthSearch from '@src/components/auth'
import React from 'react'
import SiteLayout from '@components/common/layout'

const coupon = () => {
  return (
    <SiteLayout defaultKey={'account-1'} defaultOpenKeys={['account']}>
      <AuthSearch />
    </SiteLayout>
  )
}

export default coupon
