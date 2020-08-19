import React from 'react'
import * as S from './searchcontent.styled'

export interface SearchContentProps {
  children?: React.ReactNode
}

const SearchContent: React.FC<SearchContentProps> = ({ children }) => {
  return (
    <S.SearchContentWrap>
      <S.SearchContentWrapBody>{children}</S.SearchContentWrapBody>
    </S.SearchContentWrap>
  )
}

export default SearchContent
