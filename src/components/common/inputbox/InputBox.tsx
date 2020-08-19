import React from 'react'
import * as S from './inputbox.styled'

interface InputBoxProps {
  children?: React.ReactNode
  style?: React.CSSProperties
}

const InputBox: React.FC<InputBoxProps> = ({ children, style }) => {
  return <S.InputWrap style={style}>{children}</S.InputWrap>
}

export default InputBox
