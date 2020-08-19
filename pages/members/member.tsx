import React from 'react'
import SiteLayout from '@components/common/layout/Layout'
import Member from '@components/members/member'
import { Layout, Menu } from 'antd'
const { Header, Footer, Sider, Content } = Layout

const member = () => {
  return (
    <SiteLayout defaultKey="member-1" defaultOpenKeys={['member']}>
      <Member />
    </SiteLayout>
  )
}

export default member
