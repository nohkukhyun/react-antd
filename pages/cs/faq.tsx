import React from 'react'
import SiteLayout from '@components/common/layout/Layout'
import Faq from '@components/cs/faq/Faq'

const faq: React.FC = () => {
  return (
    <SiteLayout defaultKey={'cs-2'} defaultOpenKeys={['cs']}>
      <Faq />
    </SiteLayout>
  )
}

export default faq
