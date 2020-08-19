import React from 'react'
import SiteLayout from '@components/common/layout/Layout'
import PaymentDetail from '@src/components/payment/paymentdetail'

const payment: React.FC = () => {
  return (
    <SiteLayout defaultKey={'payment-1'} defaultOpenKeys={['payment']}>
      <PaymentDetail />
    </SiteLayout>
  )
}

export default payment
