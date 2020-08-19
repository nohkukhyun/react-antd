export interface ProductState {
  list?: ProductDto[] | any
  error: string
  selectedProduct?: any[]
}

export interface ProductListDto {
  created: string
  createdAsString: string
  description: string
  id: number
  licenseType: number
  lineItems: LineItemsDto[]
  maxInstallment: number
  name: string
  period: number
  periodFinance: number
  productPeriodType: number
  productStatusType: number
  productType: number
  relationType: number
  status: number
  taxFreeAmount: number
  totalPrice: number
}

export interface LineItemsDto {
  cost: number
  created: string
  createdAsString: string
  description: string
  id: number
  itemType: number
  licenseType: number
  name: string
  quantity: number
  quantitySold: number
  shippingCompanyId: number
  status: number
}

export interface ProductDto {
  created: string
  createdAsTimestamp: number
  description: string
  id: number
  licenseType: number
  licenseTypeCode: string
  lineItems: ProductLineItemDto[]
  maxInstallment: number
  name: string
  period: number
  periodFinance: number
  productPeriodType: number
  productPeriodTypeCode: string
  productStatusType: number
  productStatusTypeCode: string
  productType: number
  productTypeCode: string
  relationType: number
  relationTypeCode: string
  status: number
  taxFreeAmount: number
  totalPrice: number
}

export interface ProductLineItemDto {
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
