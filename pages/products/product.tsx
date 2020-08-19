import React from 'react'
import SiteLayout from '@components/common/layout'
import Products from '@components/products'

const product: React.FC = () => {
  return (
    <SiteLayout defaultKey={'product-1'} defaultOpenKeys={['product']}>
      <Products />
    </SiteLayout>
  )
}

export default product
