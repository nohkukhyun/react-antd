import styled from 'styled-components'

export const SearchSectionWrap = styled.div`
  width: 100%;
  position: relative;
`

export const Text = styled.p`
  color: #07031a;
  font-size: 16px;
  margin-right: 10px;
  position: relative;
  margin-top: 20px;
  &.small {
    font-size: 13px;
  }
  &.big {
    font-size: 20px;
  }
`

export const DetailSectionWrap = styled.div`
  margin-top: 50px;
  background-color: #fff;
  padding: 30px;
  &:nth-child(1) {
    margin-top: 0;
  }
`

export const TopButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`
