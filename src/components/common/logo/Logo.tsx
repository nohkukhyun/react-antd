import React from 'react'
import * as S from './logo.styled'

interface LogoProps {
  image: string
  width?: string
  height?: string
}

const Logo: React.FC<LogoProps> = ({ image, width, height }) => {
  return (
    <S.LogoWrap>
      <S.LogoImage src={image} width={width} height={height} />
    </S.LogoWrap>
  )
}

export default Logo
