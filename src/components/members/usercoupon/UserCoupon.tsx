import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as S from '../userinfo/userinfo.styled'
import { Table, Descriptions, Button, Modal, Select, Input, Col, Badge } from 'antd'
import { UserCouponDto, CouponDto } from '@store/coupons/coupons.type'
import { memberDto, detailDto } from '@store/members/members.type'
import * as member from '@store/members/members.action'
import * as product from '@store/products/proudcts.action'
import { RootState } from '@store/rootReducer'
import Link from 'next/link'
import { timeToDate } from '@src/utils/common'

const { Option } = Select
const { TextArea } = Input

export interface UserCouponProps {
  coupon: any
  detail: memberDto
}

const UserCoupon: React.FC<UserCouponProps> = ({ coupon, detail }: UserCouponProps) => {
  const [modalInfo, setModalInfo] = useState({
    show: false,
    loading: false,
    text: '',
  })
  const [memo, setMemo] = useState('')
  const dispatch = useDispatch()

  const couponTh = [
    {
      title: '발급일자',
      dataIndex: 'givenDateAsTimestamp',
      render: (createdAsTimestamp) => timeToDate(createdAsTimestamp),
    },
    {
      title: '쿠폰명',
      dataIndex: 'couponPlan',
      render: (couponPlan, data) => (
        <Link href={`/coupons/detail/[id]`} as={`/coupons/detail/${data.couponPlanId}`}>
          <a>{couponPlan?.name}</a>
        </Link>
      ),
    },
    {
      title: '상태',
      dataIndex: 'status',
      render: (status, data) => {
        let date = new Date()
        if (date.getTime() < data.expirationAsTimestamp && data.usedDateAsTimestamp === 0) {
          return (
            <Badge color={'#00bcd4'} offset={[-44, 10]}>
              미사용
            </Badge>
          )
        } else if (date.getTime() > data.expirationAsTimestamp && data.usedDateAsTimestamp === 0) {
          return (
            <Badge color={'#838383'} offset={[-32, 10]}>
              만료
            </Badge>
          )
        } else if (data.usedDate !== null) {
          return (
            <Badge color={'green'} offset={[-32, 10]}>
              사용
            </Badge>
          )
        }
      },
    },
    {
      title: '적용된 상품',
      dataIndex: 'couponPlan',
      render: (couponPlan, data) => {
        return data.usedDateAsTimestamp > 0
          ? couponPlan?.products?.map((data, i) => {
              return <span key={i}>{data.name}</span>
            })
          : '-'
      },
      width: '30%',
    },
    {
      title: '메모',
      dataIndex: '',
      width: '25%',
    },
    {
      title: '발급자',
      dataIndex: '',
    },
    {
      title: '',
      dataIndex: 'couponPlanId',
      render: (couponPlanId) => (
        <Button onClick={() => handleUseCouponSubmit(couponPlanId)}>동일 쿠폰 발급</Button>
      ),
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

  //서브밋
  const handleOk = () => {
    setModalInfo({ ...modalInfo, text: 'loading', loading: true })
    setTimeout(() => {
      setModalInfo({ ...modalInfo, show: false, loading: false })
    }, 2000)
  }

  //메모내용
  const handleChange = (e) => {
    let value = e.target.value

    dispatch(member.UserCouponPopupSet({ value, memo: 'memo' }))
  }

  const couponList = () => {
    const couponsData = coupon.list.map((data, i) => {
      return data.couponPlan
    })
    return couponsData.map((cData: CouponDto, i: number) => {
      return (
        <Option value={`${coupon.couponPlanId}${coupon.licenseId}${coupon.licenseType}`} key={i}>
          {cData.name} / {cData.amount} /{' '}
          {`${cData.expiration[0]}.${cData.expiration[1]}.${cData.expiration[2]}`}
        </Option>
      )
    })
  }

  //쿠폰 선택
  const handleCouponSet = (value) => {
    //선택한 쿠폰의 밸류를 리덕스에 담는다
    dispatch(member.UserCouponPopupSet({ value, couponPlanId: 'couponPlanId' }))
  }

  const couponPlanData = () => {
    const cPlanData = coupon.list.map((data, i: number) => {
      return data.couponPlan
    })

    return cPlanData
  }

  const handleUseCouponSubmit = (couponPlanId) => {
    setModalInfo({ ...modalInfo, text: 'loading', loading: true })
    dispatch(
      member.postUserCouponPopup.request({
        couponPlanId: couponPlanId ? couponPlanId : coupon?.popupState?.couponPlanId,
        licenseId: detail.id,
        licenseTypeCode: detail.licenseTypeCode,
      })
    )
    setTimeout(() => {
      setModalInfo({ ...modalInfo, show: false, loading: false })
    }, 2000)
  }

  useEffect(() => {
    couponList()
    const datas = {
      licenseId: detail.id,
      licenseType: detail.licenseType,
    }
    dispatch(member.UserCouponPopupSet(datas))
  }, [dispatch])

  const couponPlan = couponPlanData()

  return (
    <>
      <S.UserInfoTopButtonWrap>
        <S.Title>쿠폰 정보</S.Title>
        <Button type={'primary'} onClick={showModal}>
          쿠폰 발급
        </Button>
        <Modal
          title="쿠폰 추가"
          visible={modalInfo.show}
          onCancel={hideModal}
          onOk={handleOk}
          confirmLoading={modalInfo.loading}
          centered
          footer={[
            <Button onClick={hideModal}>취소</Button>,
            <Button
              type={'primary'}
              loading={modalInfo.loading}
              onClick={() => handleUseCouponSubmit(coupon.popupState)}
            >
              발급
            </Button>,
          ]}
        >
          <Descriptions layout={'horizontal'} column={1}>
            <Descriptions.Item label={'발급자'}>{detail.nickname}</Descriptions.Item>
            <Descriptions.Item label={'쿠폰'}>
              <Select
                defaultValue={'이름 / 할인가 / 만료일자'}
                // value={`${coupon.name} / ${couponPlan?.amount} / ${couponPlan?.expiration}`}
                style={{ width: 300, marginBottom: '10px' }}
                onChange={(value) => handleCouponSet(value)}
              >
                {coupon.list.map((data, i) => {
                  return (
                    <Option value={data?.couponPlanId} key={i}>
                      {data?.couponPlan?.name} / {data?.couponPlan?.amount} /{' '}
                      {`${data?.couponPlan?.expiration?.[0]}.${data?.couponPlan?.expiration?.[1]}.${data?.couponPlan?.expiration?.[2]}`}
                    </Option>
                  )
                })}
              </Select>
            </Descriptions.Item>
            <Descriptions.Item label={'메모'}>
              <TextArea
                onChange={handleChange}
                rows={5}
                cols={55}
                placeholder="메모를 입력해주세요."
              ></TextArea>
            </Descriptions.Item>
          </Descriptions>
        </Modal>
      </S.UserInfoTopButtonWrap>
      <Table
        columns={couponTh}
        dataSource={coupon.list.length > 0 ? coupon.list : []}
        locale={{ emptyText: '쿠폰 정보가 없습니다.' }}
        size={'small'}
        pagination={false}
      />
    </>
  )
}

export default UserCoupon
