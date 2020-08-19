import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import * as S from './paymentdetail.styled'
import PaymentDetailInfo from '../paymentdetailinfo'
import PageNavigation from '@src/components/common/pagenavigation'
import { requestPaymentDetailAsync } from '@src/store/payment/payment.action'
import { RootState } from '@src/store/rootReducer'

const PaymentDetail: React.FC = () => {
  const dispatch = useDispatch()
  const { detail } = useSelector((state: RootState) => state.paymentPage)
  const router = useRouter()
  const { query } = router

  useEffect(() => {
    const { id, licenseId, licenseTypeCode } = query
    dispatch(
      //결제내역 상세조회
      requestPaymentDetailAsync.request({
        id: id,
        licenseId: licenseId,
        licenseTypecode: licenseTypeCode,
      })
    )
  }, [query])

  return (
    <S.PaymentDetailWrap>
      <PageNavigation />
      <PaymentDetailInfo detail={detail} />
    </S.PaymentDetailWrap>
  )
}

export default PaymentDetail
