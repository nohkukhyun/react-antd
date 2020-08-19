import React from 'react'
import * as S from './searchbar.styled'

export interface SearchBarProps {
  children?: React.ReactNode
}

const SearchBar: React.FC<SearchBarProps> = ({ children }) => {
  return <S.SearchBarWrap>{children}</S.SearchBarWrap>
}

export default SearchBar
