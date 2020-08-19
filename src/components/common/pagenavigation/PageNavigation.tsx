import React from 'react'
import { useRouter } from 'next/router'
import { PageHeader } from 'antd'

const PageNavigation: React.FC = () => {
  const router = useRouter()

  const pageNavigationTitle = () => {
    let navigation = {
      title: '',
      subtitle: '',
    }
    if (router.pathname === '/payments/detail/[id]')
      (navigation.title = '결제 정보'), (navigation.subtitle = '상세 정보')
    else if (router.pathname === '/members/userinfo/[id]')
      (navigation.title = '회원 정보'), (navigation.subtitle = '상세 정보')
    else if (router.pathname === '/coupons/detail/[id]')
      (navigation.title = '쿠폰 정보'), (navigation.subtitle = '상세 정보')
    else if (router.pathname === '/coupons/make')
      (navigation.title = '쿠폰 생성'), (navigation.subtitle = '상세 정보')
    return navigation
  }

  const navi = pageNavigationTitle()

  return (
    <div>
      <PageHeader
        ghost={false}
        onBack={() => window.history.back()}
        title={navi.title}
        subTitle={navi.subtitle}
        extra={
          [
            // <Button key="3">Operation</Button>,
            // <Button key="2">Operation</Button>,
            // <Button key="1" type="primary">
            //   Primary
            // </Button>,
          ]
        }
      ></PageHeader>
    </div>
  )
}

export default PageNavigation
