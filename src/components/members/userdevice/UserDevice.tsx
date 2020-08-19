import React from 'react'
import * as S from '../userinfo/userinfo.styled'
import { Table, Tabs, Select, Input } from 'antd'
import { deviceTh } from '@store/data/userinfo.data'

const { TabPane } = Tabs
const { Option } = Select
const { TextArea } = Input

const UserDevice: React.FC = () => {
  const callBack = (key) => {}

  return (
    <>
      <S.Title>기기 정보</S.Title>
      <Tabs defaultActiveKey={'1'} onChange={callBack}>
        <TabPane tab="부모" key="1">
          <Table
            columns={deviceTh}
            dataSource={[]}
            locale={{ emptyText: '부모 기기 정보가 없습니다.' }}
            size={'small'}
          />
        </TabPane>
        <TabPane tab="자녀" key="2">
          <Table
            columns={deviceTh}
            dataSource={[]}
            locale={{ emptyText: '자녀 기기 정보가 없습니다.' }}
            size={'small'}
          />
        </TabPane>
      </Tabs>
    </>
  )
}

export default UserDevice
