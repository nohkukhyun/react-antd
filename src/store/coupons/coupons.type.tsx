export interface CouponState {
  filter: {} | any
  list: []
  detail: {}
  makeState: CouponCommand
}

export interface CouponDto {
  amount: number
  codeExpiration: number
  couponType: number
  created: string
  description: string
  enable: boolean
  expiration: string
  id: number
  licenseType: number
  name: string
  products: CouponProductDto[]
  relationType: number
  restricted: boolean
  singleCode: boolean
  status: number
  stock: number
}

export interface CouponProductDto {
  created: string
  description: string
  id: number
  licenseType: number
  lineItems: CouponProductLineItem[]
  maxInstallment: number
  name: string
  period: number
  periodFinance: number
  productPeriodType: number
  productStatusType: number
  productType: number
  relationType: number
  status: number
  totalPrice: number
}

export interface CouponProductLineItem {
  cost: number
  created: string
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

//유저쿠폰dto
export interface UserCouponDto {
  code: string
  couponPlan: CouponDto
  couponPlanId: number
  created: string
  expiration: string
  givenDate: string
  id: number
  licenseId: number
  licenseType: number
  status: number
}

//쿠폰연결된 상품
export interface ProductDto {
  created: string
  createdAsString: string
  description: string
  id: number
  licenseType: number
  licenseTypeCode: string
  lineItems: any[]
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

export interface CouponCommand {
  amount?: number
  couponTypeCode?: string
  description?: string
  enabled?: boolean
  expiration?: string
  id?: number
  licenseTypeCode?: string
  name?: string
  relationTypeCode?: string
  restricted?: boolean
  singleCode?: boolean
  stock?: number
  productIds?: []
  codeExpiration?: number
}
