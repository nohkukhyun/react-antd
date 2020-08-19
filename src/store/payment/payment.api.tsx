import { getAPI, postAPI } from '@store/api/index'

//결제내역리스트
export const requestPaymentList = (payload: { licenseId: number; licenseTypeCode: string }) => {
  const { licenseId, licenseTypeCode } = payload
  let path = `api/payment/transaction/list?licenseId=${licenseId}&licenseTypeCode=${licenseTypeCode}`
  return getAPI(path)
}

//결제 내역 상세
export const requestPaymentDetail = (payload) => {
  const { id, licenseId, licenseTypecode } = payload
  let path = `api/payment/transaction?id=${id}&licenseId=${licenseId}&licenseTypeCode=${licenseTypecode}`
  return getAPI(path)
}
