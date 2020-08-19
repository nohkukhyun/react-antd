import { getAPI } from '@store/api/index'

//상품 리스트
export const requestProductList = (payload) => {
  if (!payload) return
  const { licenseTypeCode, productStatusTypeCode, productTypeCode } = payload
  let path = `api/product/list?licenseTypeCode=${licenseTypeCode}&productStatusTypeCode=${productStatusTypeCode}&productTypeCode=${productTypeCode}`
  return getAPI(path)
}
