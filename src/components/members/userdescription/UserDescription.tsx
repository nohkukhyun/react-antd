import React from 'react'
import { useSelector } from 'react-redux'
import * as S from './userdescription.styled'
import { Descriptions } from 'antd'
import { requestMemberAsync } from '@store/members/members.action'
import { RootState } from '@store/rootReducer'
import { memberDto } from '@store/members/members.type'

export interface UserDescriptionProps {
  detail: memberDto
}

const UserDescription: React.FC<UserDescriptionProps> = ({ detail }) => {
  //라인업 서비스이름
  const licenseTypeChangeToName = () => {
    switch (detail.licenseType) {
      case 9:
        return '21세기영어'
      default:
        detail.licenseType
    }
  }

  //타입별 이름
  const relationTypeChangeToName = () => {
    //relationTypeCode 요청예정
    switch (detail.relationType) {
      case 5:
        return '5번은 뭐지?'
      default:
        return detail.relationType
    }
  }

  //가입경로별 이름
  const snsTypeChangeToName = () => {
    //snsTypeCode 요청예정
    switch (detail.snsType) {
      case -1:
        return '-1번은 뭐지?'
      default:
        return detail.snsType
    }
  }

  const joinDate = () => {
    return `${detail.created?.[0]}-${detail.created?.[1]}-${detail.created?.[2]}`
  }

  return (
    <S.UserDescriptionWrap>
      <S.UserSectionWrap className={'border'}>
        {/* <S.UserInfoTopButtonWrap>
          <S.Title>drmuzy-1</S.Title>
          <div>
            <Button style={{ marginRight: '5px' }}>비밀번호 변경</Button>
            <Button style={{ marginRight: '5px' }}>전화번호 변경</Button>
            <Button>이메일 변경</Button>
          </div>
        </S.UserInfoTopButtonWrap> */}
        <div style={{ display: 'flex' }}>
          <h2 style={{ marginRight: '10px' }}>ID : </h2>
          <h2>{detail.id}</h2>
        </div>
        <Descriptions size={'default'}>
          <Descriptions.Item label={'계정'}>{licenseTypeChangeToName()}</Descriptions.Item>
          <Descriptions.Item label={'타입'}>{relationTypeChangeToName()}</Descriptions.Item>
          <Descriptions.Item label={'가입경로'}>{snsTypeChangeToName()}</Descriptions.Item>
          <Descriptions.Item label={'이메일'}>{detail.accountName}</Descriptions.Item>
          <Descriptions.Item label={'가입일자'}>{joinDate()}</Descriptions.Item>
          <Descriptions.Item label={'전화번호'}>{detail.phoneNumber}</Descriptions.Item>
          <Descriptions.Item label={'최근 로그인 날짜'}>{detail.lastLogin}</Descriptions.Item>
          {/* <Descriptions.Item label={'마케팅 수신 동의'}>??</Descriptions.Item> */}
        </Descriptions>
      </S.UserSectionWrap>
    </S.UserDescriptionWrap>
  )
}

export default UserDescription
