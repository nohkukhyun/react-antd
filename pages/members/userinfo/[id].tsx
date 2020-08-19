import React from 'react'
import SiteLayout from '@components/common/layout'
import UserInfo from '@components/members/userinfo'

export interface IDProps {
  props?: any
}

const ID: React.FC<IDProps> = ({ props }) => {
  return (
    <SiteLayout defaultKey="member-1" defaultOpenKeys={['member']}>
      <UserInfo />
    </SiteLayout>
  )
}

export default ID
