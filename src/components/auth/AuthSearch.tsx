import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SearchBar from '@components/common/searchbar'
import { Select, Input, DatePicker, Button, Row, Table, Spin } from 'antd'
import * as auth from '@store/auth/auth.action'
import SearchContent from '@components/common/searchcontent/'
import { RootState } from '@store/rootReducer'
import { authListTh } from './data'
import * as coupon from '@store/coupons/coupons.action'

const { Option } = Select

const AuthSearch: React.FC = () => {
  const dispatch = useDispatch()
  const { list } = useSelector((state: RootState) => state.authPage)
  const [loading, setLoading] = useState(false)

  const handleCurrentPage = (page, key = '') => {
    const value = page.current
  }

  useEffect(() => {
    setLoading(true)
    dispatch(auth.requestAuthListAsync.request({ team: 'JUNIOR', username: '' }))
  }, [])

  return (
    <div className="SearchSectionWrap">
      {/* <SearchBar>
        <Row>
          <InputBox>
            <S.Text>기간</S.Text>
            <Input.Group compact>
              <Select
                value={couponDateSearchFrom[0].title}
                onChange={(value) => handleSelected(value, 'term')}
              >
                {selectItems(couponDateSearchFrom)}
              </Select>
              <DatePicker />
            </Input.Group>
          </InputBox>

          <InputBox>
            <S.Text>검색</S.Text>
            <Input.Group compact>
              <Select
                value={couponNameSearchForm[0].title}
                onChange={(value) => handleSelected(value, 'keyword')}
              >
                {selectItems(couponNameSearchForm)}
              </Select>
              <Input value={''} placeholder="입력해주세요." style={{ width: 150 }} />
            </Input.Group>
          </InputBox>

          <InputBox>
            <S.Text>구분</S.Text>
            <Select
              value={couponCategorySearchForm[0].title}
              onChange={(value) => handleSelected(value, 'category')}
            >
              {selectItems(couponCategorySearchForm)}
            </Select>
          </InputBox>

          <InputBox>
            <S.Text>라인업</S.Text>
            <Select
              value={''}
              onChange={(value) => handleSelected(value, 'service')}
              style={{ width: 130 }}
            >
            </Select>
          </InputBox>

          <InputBox>
            <S.Text>상태</S.Text>
            <Select
              value={couponStatusSearchForm[0].title}
              onChange={(value) => handleSelected(value, 'status')}
            >
              {selectItems(couponStatusSearchForm)}
            </Select>
          </InputBox>

          <Button type="primary" style={{ marginRight: '10px' }}>
            조회
          </Button>
          <Button>초기화</Button>
        </Row>
      </SearchBar> */}
      <SearchContent>
        <Table
          columns={authListTh}
          dataSource={list ? list : []}
          // pagination={{ pageSize: filter.pageSize }}
          locale={{ emptyText: '쿠폰 정보가 없습니다.' }}
          onChange={(page) => handleCurrentPage(page, 'current')}
        />
        {!loading ? <Spin /> : ''}
      </SearchContent>
    </div>
  )
}

export default AuthSearch
