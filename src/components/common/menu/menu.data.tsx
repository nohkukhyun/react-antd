import {
  UserOutlined,
  SmileOutlined,
  QuestionCircleOutlined,
  GiftOutlined,
  RocketOutlined,
  DollarOutlined,
  PercentageOutlined,
  MailOutlined,
} from '@ant-design/icons'

export interface MenuItem {
  key: string
  title: string
  icon?: React.ReactNode
  submenu?: SubMenuItem[]
}

export interface SubMenuItem {
  subkey?: string
  subtitle: string
  link: string
  icon?: React.ReactNode
}

export const menuData: MenuItem[] = [
  // {
  //   key: 'account',
  //   title: '계정 관리',
  //   icon: <SmileOutlined />,
  //   submenu: [
  //     {
  //       subkey: 'account-1',
  //       subtitle: '계정 관리',
  //       link: '/auth/list',
  //     },
  //   ],
  // },
  {
    key: 'member',
    title: '회원 관리',
    icon: <UserOutlined />,
    submenu: [
      {
        subkey: 'member-1',
        subtitle: '일반 회원 관리',
        link: '/members/member',
      },
    ],
  },
  // {
  //   key: 'cs',
  //   title: 'CS 관리',
  //   icon: <QuestionCircleOutlined />,
  //   submenu: [
  //     {
  //       subkey: 'cs-1',
  //       subtitle: 'CS 상담 관리',
  //       link: '/cs/counsel',
  //     },
  //     {
  //       subkey: 'cs-2',
  //       subtitle: 'FAQ 관리',
  //       link: '/cs/faq',
  //     },
  //   ],
  // },
  // {
  //   key: 'product',
  //   title: '상품 판매 관리',
  //   icon: <GiftOutlined />,
  //   submenu: [
  //     {
  //       subkey: 'product-1',
  //       subtitle: '상품 관리',
  //       link: '/products/product',
  //     },
  //   ],
  // },
  {
    key: 'delivery',
    title: '배송/물류 관리',
    icon: <RocketOutlined />,
    submenu: [
      {
        subkey: 'delivery-1',
        subtitle: '제품 관리',
        link: '/delivery/management',
      },
    ],
  },
  {
    key: 'payment',
    title: '결제 관리',
    icon: <DollarOutlined />,
    submenu: [
      {
        subkey: 'payment-1',
        subtitle: '결제 조회',
        link: '/payments/payment',
      },
    ],
  },
  {
    key: 'coupon',
    title: '할인 이용권 관리',
    icon: <MailOutlined />,
    submenu: [
      {
        subkey: 'coupon-1',
        subtitle: '내부 쿠폰 관리',
        link: '/coupons/coupon',
      },
    ],
  },
  // {
  //   key: 'test',
  //   title: 'test',
  //   icon: <PercentageOutlined />,
  //   submenu: [
  //     {
  //       subkey: 'coupon-1',
  //       subtitle: '내부 쿠폰 관리',
  //       link: '/test/testOne',
  //     },
  //   ],
  // },
]
