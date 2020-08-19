import React from 'react'
import * as S from '../userinfo/userinfo.styled'
import { Table, Descriptions, Button, Modal, Select, Input } from 'antd'
import { deilveryTh } from '@store/data/userinfo.data'

const { Option } = Select
const { TextArea } = Input

const UserDelivery: React.FC = () => {
  return (
    <>
      <S.Title>배송 정보</S.Title>
      <Table
        columns={deilveryTh}
        dataSource={[]}
        locale={{ emptyText: '배송 정보가 없습니다.' }}
        size={'small'}
      />
    </>
  )
}

export default UserDelivery
