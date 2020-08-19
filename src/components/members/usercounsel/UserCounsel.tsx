import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as counsel from '@store/members/members.action'
import * as S from '../userinfo/userinfo.styled'
import { Table, Descriptions, Button, Modal, Select, Input, Cascader } from 'antd'
import { couselTh } from '@store/data/userinfo.data'
import { RootState } from '@src/store/rootReducer'
import { getCookie } from '@src/store/data/cookie'

const { Option } = Select
const { TextArea } = Input

interface UserCounselProps {
  enquiry: any
}

const UserCounsel: React.FC<UserCounselProps> = ({ enquiry }) => {
  const dispatch = useDispatch()
  const [modalInfo, setModalInfo] = useState({
    show: false,
    loading: false,
    text: '',
  })

  //페이지
  const [page, setPage] = useState({
    current: 1,
    pageSize: 5,
  })

  const { detail } = useSelector((state: RootState) => state.membersPage)

  // const enquiryCategoeyOptions = [
  //   enquiryCategory.map((ecData) => {
  //     return {
  //       value: ecData.name,
  //       label: ecData.name,
  //       children: ecData.childCategory.map((cData) => {
  //         return {
  //           value: cData.name,
  //           label: cData.name,
  //           children: cData.childCategory.map((data) => {
  //             return {
  //               value: data.name,
  //               label: data.name,
  //             }
  //           }),
  //         }
  //       }),
  //     }
  //   }),
  // ]

  const enquiryCategoeyOptions = [
    {
      value: enquiry?.category[0]?.id,
      label: enquiry?.category[0]?.name,
      children: [
        {
          value: enquiry?.category[0]?.childCategory[0].id,
          label: enquiry?.category[0]?.childCategory[0].name,
          children: [
            {
              value: enquiry?.category[0]?.childCategory[0]?.childCategory[0]?.id,
              label: enquiry?.category[0]?.childCategory[0]?.childCategory[0]?.name,
            },
          ],
        },
      ],
    },
  ]

  //모달 오픈
  const showModal = () => {
    setModalInfo({ ...modalInfo, show: true })
  }

  //모달 숨기기
  const hideModal = () => {
    setModalInfo({ ...modalInfo, show: false })
  }

  //상담추가
  const handleEnquiryTicketSubmit = () => {
    setModalInfo({ ...modalInfo, text: 'loading', loading: true })
    dispatch(
      counsel.postEnquiryTicketAsync.request({
        categoryId: enquiry?.popupState.categoryId,
        channelTypeCode: enquiry?.popupState.channelTypeCode,
        content: enquiry?.popupState.content,
        licenseId: detail.id,
        licenseTypeCode: detail.licenseTypeCode,
        statusTypeCode: enquiry?.popupState.statusTypeCode,
      })
    )
    setTimeout(() => {
      setModalInfo({ ...modalInfo, show: false, loading: false })
    }, 2000)
    dispatch(counsel.requestEnquiryCategoryListAsync.request({}))
  }

  //셀렉트 선택
  const handleSelected = (value) => {
    dispatch(counsel.enquirySet({ channelTypeCode: value }))
  }

  //메모내용
  const handleChange = (e) => {
    const value = e.target.value
    dispatch(counsel.enquirySet({ content: value }))
  }

  //상담 문의 유형
  const handleCategory = (value) => {
    let val = value[value.length - 1]
    dispatch(counsel.enquirySet({ categoryId: val }))
  }

  //상담 상태
  const handleEnquiryStatus = (value) => {
    dispatch(counsel.enquirySet({ statusTypeCode: value }))
  }

  //페이지
  const handlePage = (value) => {
    setPage({
      ...value,
    })
  }

  return (
    <>
      <S.UserInfoTopButtonWrap>
        <S.Title>상담 정보</S.Title>
        <Button type={'primary'} onClick={showModal}>
          상담 추가
        </Button>
        <Modal
          title="상담 추가"
          visible={modalInfo.show}
          onCancel={hideModal}
          onOk={handleEnquiryTicketSubmit}
          confirmLoading={modalInfo.loading}
          centered
          footer={[
            <Button onClick={hideModal}>취소</Button>,
            <Button
              type={'primary'}
              loading={modalInfo.loading}
              onClick={handleEnquiryTicketSubmit}
            >
              저장
            </Button>,
          ]}
        >
          <Descriptions layout={'horizontal'} column={1}>
            <Descriptions.Item label={'작성자'}>
              <Input value={'test'} disabled />
            </Descriptions.Item>
            <Descriptions.Item label={'인입채널'}>
              <Select
                defaultValue={'전화'}
                style={{ marginBottom: '10px' }}
                onChange={(value) => handleSelected(value)}
              >
                <Option value={'PHONE'}>전화</Option>
                <Option value={'CHANNEL_TALK'}>채널톡</Option>
                <Option value={'ETC'}>기타</Option>
              </Select>
            </Descriptions.Item>
            <Descriptions.Item label="문의유형">
              <Cascader
                defaultValue={['일반', '회원문의', '개인정보도용']}
                options={enquiryCategoeyOptions}
                onChange={(value) => handleCategory(value)}
                style={{ width: 250 }}
              />
            </Descriptions.Item>
            <Descriptions.Item label={'메모'}>
              <TextArea onChange={(e) => handleChange(e)} rows={5} cols={55}></TextArea>
            </Descriptions.Item>
            <Descriptions.Item label={'상담 상태'}>
              <Select
                defaultValue={'상담상태'}
                style={{ marginBottom: '10px' }}
                onChange={(value) => handleEnquiryStatus(value)}
              >
                <Option value={'PENDING'}>대기</Option>
                <Option value={'PROGRESS'}>진행중</Option>
                <Option value={'COMPLETE'}>완료</Option>
              </Select>
            </Descriptions.Item>
          </Descriptions>
        </Modal>
      </S.UserInfoTopButtonWrap>
      <Table
        columns={couselTh}
        dataSource={enquiry?.list ? enquiry?.list : []}
        locale={{ emptyText: '상담 정보가 없습니다.' }}
        size={'small'}
        pagination={page}
        onChange={handlePage}
      />
    </>
  )
}

export default UserCounsel
