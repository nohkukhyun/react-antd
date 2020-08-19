import React, { useState, useEffect } from 'react'
import { Layout } from 'antd'
import Logo from '../logo'
import MenuLayout from '../menu'
import Link from 'next/link'
import { authCheckReturnLoginPage } from '@src/utils/common'

const { Header, Footer, Sider, Content } = Layout

interface SiteLayout {
  children: React.ReactNode
  defaultKey?: string
  defaultOpenKeys?: string[]
}

const SiteLayout: React.FC<SiteLayout> = ({ children, defaultKey, defaultOpenKeys }) => {
  const [collapsed, setCollapsed] = useState(false)

  //사이드바 조절
  const onCollapse = () => {
    setCollapsed(!collapsed)
  }

  useEffect(() => {
    //로그인체크
    authCheckReturnLoginPage()
  }, [])

  return (
    <Layout style={{ height: '100vh', overflow: 'hidden' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <Logo image={'/21c.png'} width={''} height={'50px'} />
        <MenuLayout defaultKey={defaultKey} defaultOpenKeys={defaultOpenKeys} />
      </Sider>
      <Layout>
        <Header>{/* <Link href="/auth/login">로그인</Link> */}</Header>
        <Content>
          <div style={{ padding: '50px', overflowY: 'scroll', height: '100%' }}>{children}</div>
        </Content>
        {/* <Footer>Footer</Footer> */}
      </Layout>
    </Layout>
  )
}

export default SiteLayout
