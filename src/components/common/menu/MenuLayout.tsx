import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Menu, Alert } from 'antd'
import Link from 'next/link'
import { menuData, MenuItem, SubMenuItem } from './menu.data'
import { RootState } from '@src/store/rootReducer'
const { SubMenu } = Menu

/**
 * 사이드 바를 페이지 마다 불러오기 때문에
 * defaultKey, defaultOpenKeys를 메뉴 셀렉티드 디폴트 값을 설정해준다.
 */
interface MenuLayoutProps {
  defaultKey?: string
  defaultOpenKeys?: string[]
}

const MenuLayout: React.FC<MenuLayoutProps> = ({ defaultKey, defaultOpenKeys }) => {
  // const { auth } = useSelector((state: RootState) => state)

  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={[defaultKey]}
      defaultOpenKeys={defaultOpenKeys}
    >
      {menuData.map((item: MenuItem, i: number) => {
        let subMenuData = item.submenu
        return (
          <SubMenu key={item.key} icon={item.icon} title={item.title}>
            {subMenuData.map((subitem: SubMenuItem) => {
              return (
                <Menu.Item key={`${subitem.subkey}`}>
                  {/* {!authCheckBoolean() ? (
                    <Alert message="로그인 먼저 해주세요" type="error" />
                  ) : ( */}
                  <Link href={subitem.link}>
                    <a>{subitem.subtitle}</a>
                  </Link>
                  {/* )} */}
                </Menu.Item>
              )
            })}
          </SubMenu>
        )
      })}
    </Menu>
  )
}

export default MenuLayout
