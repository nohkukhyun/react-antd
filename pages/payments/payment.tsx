import React from 'react'
import SiteLayout from '@components/common/layout/Layout'
import PaymentDetail from '@src/components/payment/paymentdetail'
import PaymentSearch from '@src/components/payment/paymentsearch'

const payment: React.FC = () => {
  return (
    <SiteLayout defaultKey={'payment-1'} defaultOpenKeys={['payment']}>
      <PaymentSearch />
    </SiteLayout>
  )
}

export default payment
