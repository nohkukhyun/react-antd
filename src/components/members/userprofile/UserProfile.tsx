import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as S from './userprofile.styled'
import { Table, Modal, Button, Descriptions, Input, Select } from 'antd'
import { memberDto, childrenUserProfileDto } from '@store/members/members.type'
import { TopButtonWrap } from 'styles/common/style'
import * as member from '@store/members/members.action'
import { RootState } from '@src/store/rootReducer'

const { Option } = Select

interface UserProfileProps {
  detail: memberDto
}

const UserProfile: React.FC<UserProfileProps> = ({ detail }: UserProfileProps) => {
  const dispatch = useDispatch()
  const { profile } = useSelector((state: RootState) => state.membersPage)

  const [modalInfo, setModalInfo] = useState({
    show: false,
    loading: false,
    text: '',
  })
  const [profileInfo, setProfileInfo] = useState({
    lastName: '',
    firstName: '',
    yearOfBirth: '',
  })

  const userProfileTh = [
    {
      title: '프로필',
      dataIndex: 'profileTypeCode',
    },
    {
      title: '이름',
      dataIndex: 'firstName',
      render: (firstName, data) => (data.lastName ? `${data.lastName} ${data.firstName}` : ''),
    },
    {
      title: '출생년도',
      dataIndex: 'birthday',
      key: 'birthday',
      render: (birthday) => (birthday ? birthday : '-'),
    },
    {
      title: '레벨 테스트 내역',
      dataIndex: '',
      render: () => '추후예정',
    },
    {
      title: '학습내역',
      dataIndex: '',
      render: () => '추후예정',
    },
    {
      title: '프로필 수정',
      render: (id) => (
        <Button size={'small'} onClick={() => showModal(id)}>
          프로필 수정
        </Button>
      ),
    },
  ]

  //모달 오픈
  const showModal = (data = '') => {
    if (data !== 'add') {
      dispatch(member.UserChildrenSet(data))
    } else {
      dispatch(member.UserChildrenReset())
    }
    setModalInfo({ ...modalInfo, show: true })
  }

  //모달 숨기기
  const hideModal = () => {
    setModalInfo({ ...modalInfo, show: false })
  }

  //자녀 프로필 생성
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

  //자녀 프로필 수정
  const handleChildrenEditSubmit = () => {
    setModalInfo({ ...modalInfo, text: 'loading', loading: true })
    dispatch(
      member.editUserChildrenPopup.request({
        firstName: profile.popupState.firstName,
        id: profile.popupState.id,
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
    setProfileInfo({
      ...profileInfo,
      firstName: name === 'firstName' ? value : profileInfo.firstName,
      lastName: name === 'lastName' ? value : profileInfo.lastName,
    })
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

  useEffect(() => {
    dispatch(
      member.requestProfileListAsync.request({
        licenseId: detail.id,
        licenseTypeCode: detail.licenseTypeCode,
      })
    )
  }, [detail])

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
      <TopButtonWrap>
        <S.Title>프로필 정보</S.Title>
        {/* <Button size="small" onClick={() => showModal('add')} type={'primary'}>
          프로필 생성
        </Button> */}
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
              onClick={() =>
                profile.popupState.id ? handleChildrenEditSubmit() : handleChildrenAddSubmit()
              }
            >
              {profile.popupState.id ? '수정' : '추가'}
            </Button>,
          ]}
        >
          <Descriptions layout={'horizontal'} column={1}>
            <Descriptions.Item label={'이름'}>
              <Input
                value={profile.popupState.lastName}
                name="lastName"
                onChange={(e) => handleName(e)}
                placeholder="성"
                style={{ marginRight: '5px' }}
              />
              <Input
                value={profile.popupState.firstName}
                name="firstName"
                placeholder="이름"
                onChange={(e) => handleName(e)}
              />
            </Descriptions.Item>
            <Descriptions.Item label={'출생년도'}>
              <Select
                value={profile.popupState.yearOfBirth ? profile.popupState.yearOfBirth : '출생년도'}
                style={{ width: 100 }}
                onChange={(value) => handleBirthDay(value)}
              >
                {yearOfBirthOption()}
              </Select>
            </Descriptions.Item>
          </Descriptions>
        </Modal>
      </TopButtonWrap>
      <Table
        columns={userProfileTh}
        dataSource={profile?.list?.length > 0 ? profile.list : []}
        locale={{ emptyText: '자녀 정보가 없습니다.' }}
        size={'small'}
        pagination={false}
      />
    </>
  )
}

export default UserProfile
