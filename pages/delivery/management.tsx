import React from 'react'
import SiteLayout from '@components/common/layout'
import DeliverySearch from '@src/components/delivery/deliverysearch'

//배송/물류관리 -> 제품관리
const product: React.FC = () => {
  return (
    <SiteLayout defaultKey={'delivery-1'} defaultOpenKeys={['delivery']}>
      <DeliverySearch />
    </SiteLayout>
  )
}

export default product
