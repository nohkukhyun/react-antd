import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Select } from 'antd'
import { RootState } from '@store/rootReducer'
import { lineupSelect } from '@src/store/data/search.data'
import { step } from '@src/store/data/service'

const { Option } = Select

interface SelectFormProps {
  type?: string
  page?: string
}
const SelectForm: React.FC<SelectFormProps> = ({ type = '', page }) => {
  const dispatch = useDispatch()

  const { filter } = useSelector((state: RootState) => state.couponsPage)

  //계정, 타입 셀렉박스 만들기
  const selectItems = (array) => {
    const sItem = array.map((sname: { title: string; key: string }, i: number) => {
      return (
        <Option value={sname.key} key={i}>
          {sname.title}
        </Option>
      )
    })
    return sItem
  }

  //계정 셀렉
  const serviceOptionItems = selectItems(lineupSelect)
  //타입 셀렉
  const stepOptionItems = selectItems(step)

  //셀렉트 선택
  const handleSelected = (value, key = '') => {}

  const typeDefaultValue = () => {
    let value
    if (type === 'license') value = filter.licenseTypeCode
    else if (type === 'relation') value = filter.relationTypeCode
    return value
  }

  return (
    <Select
      // defaultValue={filter.service === 'JUNIOR' ? '21세기영어' : ''}
      value={typeDefaultValue()}
      style={{ width: 150, marginRight: '30px' }}
      onChange={(value) => handleSelected(value, 'service')}
    >
      {type === 'license' ? serviceOptionItems : type === 'relation' ? stepOptionItems : ''}
    </Select>
  )
}

export default SelectForm
