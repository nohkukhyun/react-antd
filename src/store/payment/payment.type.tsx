import { ShippingDto } from '../members/members.type'
import { AxiosError } from 'axios'

export interface PaymentState {
  filter: {}
  list: TransactionDto[]
  detail?: TransactionDto | undefined
  error: AxiosError
}

export interface TransactionDto {
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
