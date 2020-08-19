import React, { useState } from 'react'
import { Select } from 'antd'
import * as S from './pageselect.styled'

const { Option } = Select

export interface PageSelectProps {
  page: {
    pageSize: number
    currentPage: number
  }
  handleSelected: (value, key) => void
}

const PageSelect: React.FC<PageSelectProps> = ({ page, handleSelected }) => {
  //페이지 셀렉
  return (
    <S.PageSelectWrap>
      <Select
        defaultValue={`${page.pageSize} page`}
        onChange={(value) => handleSelected(value, 'pagesize')}
      >
        <Option value={10}>10 page</Option>
        <Option value={20}>20 page</Option>
        <Option value={50}>50 page</Option>
        <Option value={100}>100 page</Option>
      </Select>
    </S.PageSelectWrap>
  )
}

export default PageSelect
