import { getAPI } from '@store/api/index'

//제품관리 리스트
export const requestLineItem = (payload) => {
  const { itemTypeCode, licenseTypeCode } = payload
  let path = `api/product/line-item/list?itemTypeCode=${itemTypeCode}&licenseTypeCode=${licenseTypeCode}`
  return getAPI(path)
}
