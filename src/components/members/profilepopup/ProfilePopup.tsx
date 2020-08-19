import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Table, Modal, Button, Descriptions, Input, Select } from 'antd'
import { userProfileTh } from '@store/data/userinfo.data'
import { memberDto, childrenUserProfileDto } from '@store/members/members.type'
import { TopButtonWrap } from 'styles/common/style'
import * as member from '@store/members/members.action'
import { RootState } from '@src/store/rootReducer'

const { Option } = Select

interface ProfilePopupProps {
  detail: memberDto
}

const ProfilePopup: React.FC<ProfilePopupProps> = ({ detail }: ProfilePopupProps) => {
  const { profile } = useSelector((state: RootState) => state.membersPage)
  const { profiles } = detail
  const [modalInfo, setModalInfo] = useState({
    show: false,
    loading: false,
    text: '',
  })
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const dispatch = useDispatch()

  //모달 오픈
  const showModal = () => {
    setModalInfo({ ...modalInfo, show: true })
  }

  //모달 숨기기
  const hideModal = () => {
    setModalInfo({ ...modalInfo, show: false })
  }

  //자녀 프로필 생성 서브밋
  const handleChildrenAddSubmit = () => {
    setModalInfo({ ...modalInfo, text: 'loading', loading: true })

    dispatch(
      member.postUserChildrenPopup.request({
        firstName: profile.popupState.firstName,
        id: 0,
        lastName: profile.popupState.lastName,
        licenseId: detail.id,
        licenseTypeCode: detail.licenseTypeCode,
        profileTypeCode: profile.popupState.profileTypeCode,
        yearOfBirth: profile.popupState.yearOfBirth,
      })
    )
    setTimeout(() => {
      setModalInfo({ ...modalInfo, show: false, loading: false })
    }, 2000)
  }

  //자녀 프로필 출생년도
  const handleBirthDay = (value) => {
    dispatch(member.UserChildrenSet({ yearOfBirth: value }))
  }

  //자녀 프로필 이름
  const handleName = (e) => {
    let value = e.target.value
    let name = e.target.name
    setFirstName(name === 'firstName' ? value : firstName)
    setLastName(name === 'lastName' ? value : lastName)
    // dispatch(
    //   member.UserChildrenSet({
    //     firstName: name === 'firstName' ? value : frameElement,
    //     lastName: name === 'lastName' ? value : lastName,
    //   })
    // )
    if (name === 'firstName') {
      dispatch(
        member.UserChildrenSet({
          firstName: name === 'firstName' ? value : '',
        })
      )
    } else {
      dispatch(
        member.UserChildrenSet({
          lastName: name === 'lastName' ? value : '',
        })
      )
    }
  }

  const yearOfBirthOption = () => {
    let birthArray = []
    for (let i = 2000; i <= 2020; i++) {
      birthArray.push(i)
    }
    const rs = birthArray.map((data, i) => {
      return (
        <Option value={data} key={i}>
          {data}
        </Option>
      )
    })
    return rs
  }

  return (
    <>
      <Modal
        title="프로필 생성"
        visible={modalInfo.show}
        onCancel={hideModal}
        onOk={handleChildrenAddSubmit}
        confirmLoading={modalInfo.loading}
        centered
        footer={[
          <Button onClick={hideModal}>취소</Button>,
          <Button
            type={'primary'}
            loading={modalInfo.loading}
            onClick={() => handleChildrenAddSubmit()}
          >
            추가
          </Button>,
        ]}
      >
        <Descriptions layout={'horizontal'} column={1}>
          <Descriptions.Item label={'이름'}>
            <Input
              value={lastName}
              name="lastName"
              onChange={(e) => handleName(e)}
              placeholder="성"
              style={{ marginRight: '5px' }}
            />
            <Input
              value={firstName}
              name="firstName"
              placeholder="이름"
              onChange={(e) => handleName(e)}
            />
          </Descriptions.Item>
          <Descriptions.Item label={'출생년도'}>
            <Select
              defaultValue={'출생년도'}
              style={{ width: 100 }}
              value={profile.popupState.yearOfBirth}
              onChange={(value) => handleBirthDay(value)}
            >
              {yearOfBirthOption()}
            </Select>
          </Descriptions.Item>
        </Descriptions>
      </Modal>
    </>
  )
}

export default ProfilePopup
