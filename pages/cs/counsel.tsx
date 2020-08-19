import React from 'react'
import SiteLayout from '@components/common/layout/Layout'
import Counsel from '@components/cs/counsel/Counsel'

const counsel: React.FC = () => {
  return (
    <SiteLayout defaultKey={'cs-1'} defaultOpenKeys={['cs']}>
      <Counsel />
    </SiteLayout>
  )
}

export default counsel
