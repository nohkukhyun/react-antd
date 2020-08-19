import { CouponDto } from '../coupons/coupons.type'
import { EnquiryTicketDto } from '@store/enquiry/enquiry.type'

export interface Filter {
  licenseTypeCode: number | string
  relationTypeCode: string | number
  searchType: string | number
  searchKeyword: string
  pageSize: number
  currentPage: number
}

export interface EnquiryPopup {
  categoryId: number | string
  channelTypeCode: string | number
  content: string
  id: number
  licenseId: number | string
  licenseType: number | string
  licenseTypeCode: string
  statusTypeCode: string
}

export interface FilterState {
  filter: Filter
  list: any[]
  detail: memberDto | any
  profile: {
    list: ProfileListDto[]
    popupState: childrenUserProfileDto | null
  }
  payment: {
    list: PaymentDto[]
  }
  enquiry: {
    list: EnquiryTicketDto[]
    popupState: EnquiryPopup
    category: EnquiryCategoryListDto[]
  }
  coupon: {
    list: CouponDto[] | any
    popupState: {} | any
  }
}

export interface detailDto {
  created: string
  gender: number
  id: number
  licenseId: number
  licenseType: number
  serviceProvider: number
  status: number
}

export interface LicenseDto {
  accountName: string
  agreements: {}
  created: string
  createdAsTimestamp: number
  detail: detailDto
  devices: deviceDto
  flags: FlagsDto
  id: number
  lastLogin: number
  licenseType: number
  licenseTypeCode: string
  linkedLicenses: LinkedLicensesDto
  loginToken: LoginTokenDto
  nickname: string
  phoneNumber: string
  profiles: []
  relationType: number
  relationTypeCode: string
  snsType: number
  status: number
}

export interface deviceDto {
  appVersion: string
  created: string
  deviceType: number
  id: number
  licenseId: number
  licenseType: number
  macAddress: string
  modelName: string
  name: string
  osVersion: string
  status: number
  udid: string
}

export interface FlagsDto {
  created: string
  id: number
  status: number
}

export interface LinkedLicensesDto {
  created: string
  id: number
  status: number
}

export interface LoginTokenDto {
  created: string
  id: number
  licenseId: number
  licenseType: number
  status: number
  token: string
}

export interface ProfileDto {
  birthday: string
  created: string
  id: number
  licenseId: number
  licenseType: number
  profileName: string
  profileType: number
  status: number
}

export interface memberDto {
  accountName: string
  agreements: {}
  created: string
  detail: detailDto
  devices: deviceDto
  flags: FlagsDto
  id: number
  licenseType: number
  linkedLicenses: LinkedLicensesDto
  loginToken: LoginTokenDto
  nickname: string
  phoneNumber: string
  profiles: ProfileDto[]
  relationType: number
  snsType: number
  status: number
  lastLogin?: string
  licenseTypeCode: string
}

export interface childrenUserProfileDto {
  firstName: string
  id: number
  lastName: string
  licenseId: number
  licenseTypeCode: number | string
  profileTypeCode: number | string
  yearOfBirth: string
  birthday?: string
}

export interface ProfileListDto {
  birthday: string
  created: string
  createdAsTimestamp: number
  firstName: string
  id: number
  lastName: string
  licenseId: number
  licenseType: number
  licenseTypeCode: string
  profileName: string
  profileType: number
  profileTypeCode: string
  status: number
}

export interface EnquiryTicketPostDto {
  categoryId: number
  channelType: string
  content: string
  id: number
  licenseId: number
  licenseType: string
  statusType: string
}

export interface EnquiryCategoryListDto {
  childCategory: []
  created: string
  createdAsTimestamp: number
  id: number
  name: string
  parentId: number
  root: boolean
  status: number
}

export interface PaymentDto {
  created: string
  createdAsTimestamp: number
  id: number
  installment: number
  licenseId: number
  licenseType: number
  paymentMethodType: number
  paymentMethodTypeCode: string
  paymentStatusType: number
  paymentStatusTypeCode: string
  refundStatusType: number
  refundStatusTypeCode: string
  shippings: ShippingDto[]
  status: number
  totalDiscountAmount: number
  totalPaidAmount: number
  totalPaidPointAmount: number
  totalPrice: number
  totalTaxFreeAmount: number
  totalUsedQpoint: number
  transactionProducts: []
}

export interface ShippingDto {
  created: string
  createdAsTimestamp: number
  id: number
  lineItems: ShippingLineItemDto[]
  shippingAddressId: number
  shippingCompanyId: number
  shippingStatusType: number
  shippingStatusTypeCode: string
  status: number
  trackingNumber: string
  transactionId: number
}

export interface ShippingLineItemDto {
  created: string
  createdAsTimestamp: number
  id: number
  note: string
  productId: number
  productLineItemId: number
  shippingId: number
  status: number
}
