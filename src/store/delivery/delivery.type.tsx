export interface deliveryState {
  filter: filterDto
  list: LineItemDto[] | any
  detail: {}
}

export interface filterDto {
  licenseTypeCode: string
  itemTypeCode: string
  pageSize: number
  currentPage: number
}

export interface LineItemDto {
  cost: number
  created: string
  createdAsTimestamp: number
  description: string
  id: number
  itemType: number
  itemTypeCode: string
  licenseType: number
  licenseTypeCode: string
  name: string
  quantity: number
  quantitySold: number
  shippingCompanyId: number
  status: number
}
