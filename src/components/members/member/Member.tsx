import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as S from './member.styled'
import SearchBar from '@components/common/searchbar'
import SearchContent from '@components/common/searchcontent'
import { Select, Input, Button, Table, Alert, Row, Col } from 'antd'
import { step } from '@store/data/service'

import { lineupSelect, memberSearchFrom } from '@store/data/search.data'
import InputBox from '@components/common/inputbox'
import PageSelect from '@components/common/pageselect'
import { filterSet, filterReset, requestMemberAsync } from '@store/members/members.action'
import { RootState } from '@store/rootReducer'
import { makeSelectOptions } from '@src/utils/common'

const { Option } = Select
interface OptionType {
  nameEng: string
  nameKr: string
}
const Member: React.FC = () => {
  const dispatch = useDispatch()
  const { filter, list } = useSelector((state: RootState) => state.membersPage)
  const [text, setText] = useState('')
  const [alert, setAlert] = useState(false)

  //셀렉트 선택
  const handleSelected = (value, key = '') => {
    dispatch(filterSet({ value, key }))
  }

  const handleCurrentPage = (page, key = '') => {
    const value = page.current
    dispatch(filterSet({ value, key }))
  }

  //초기화
  const handleReset = () => {
    dispatch(filterReset())
  }

  //계정 셀렉
  const serviceOptionItems = makeSelectOptions(lineupSelect)
  //타입 셀렉
  const stepOptionItems = makeSelectOptions(step)

  const handleChange = (e, key) => {
    let value = e.target.value
    setText(value)
    dispatch(filterSet({ value, key }))
  }

  const handleSubmit = (keyword, type, service) => {
    if (keyword === '') return window.alert('검색어를 입력해주세요')
    else dispatch(requestMemberAsync.request({ keyword, type, service }))
  }

  const errorAlert = () => {
    setTimeout(() => {
      return <Alert message="Error" type="error" showIcon />
    }, 1000)
  }

  useEffect(() => {
    // authTokenExpiredCheck()
  }, [])

  return (
    <S.MemberWrap>
      <SearchBar>
        <Row>
          <Col span={6}>
            계정
            <Select
              defaultValue={filter.licenseTypeCode === 'JUNIOR' ? '21세기영어' : ''}
              // value={filter.service === 'JUNIOR' ? '21세기영어' : ''}
              style={{ width: '80%' }}
              onChange={(value) => handleSelected(value, 'service')}
            >
              {serviceOptionItems}
            </Select>
          </Col>
          <Col span={6}>
            타입
            <Select
              defaultValue={'게스트'}
              value={filter.relationTypeCode}
              style={{ width: '80%' }}
              onChange={(value) => handleSelected(value, 'type')}
            >
              {stepOptionItems}
            </Select>
          </Col>
          <Col span={6}>
            <Input.Group compact>
              <Select
                onChange={(value) => handleSelected(value, 'searchType')}
                value={filter.searchType}
              >
                <Option value="id">아이디</Option>
                <Option value="email">이메일</Option>
                <Option value="phone">전화번호</Option>
              </Select>
              <Input
                style={{ width: '60%' }}
                placeholder="com plz"
                value={text}
                onChange={(e) => handleChange(e, 'searchKeyword')}
              />
              {alert && errorAlert}
            </Input.Group>
          </Col>
          <Col>
            <Button
              type="primary"
              style={{ marginRight: '10px' }}
              onClick={() =>
                handleSubmit(filter.searchKeyword, filter.searchType, filter.licenseTypeCode)
              }
            >
              조회
            </Button>
            <Button onClick={() => handleReset()}>초기화</Button>
          </Col>
        </Row>
      </SearchBar>
      {/* 테이블내용 */}
      <SearchContent>
        <Table
          columns={memberSearchFrom}
          dataSource={list ? list : []}
          pagination={{ pageSize: filter.pageSize }}
          locale={{ emptyText: '회원 정보가 없습니다.' }}
          onChange={(page) => handleCurrentPage(page, 'current')}
        />
        {/* 페이지 */}
        {list && list.length > 0 ? (
          <PageSelect page={filter} handleSelected={handleSelected} />
        ) : (
          ''
        )}
      </SearchContent>
    </S.MemberWrap>
  )
}

export default Member
