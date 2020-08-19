export interface EnquiryTicketDto {
  category: EnquiryCategoryDto
  categoryId: number
  channelType: string
  content: string
  created: string
  createdAsString: string
  id: number
  licenseId: number
  licenseType: string
  status: number
  statusType: string
  writer: string
}

export interface EnquiryCategoryDto {
  created: string
  createdAsString: string
  id: number
  name: string
  parentId: number
  status: number
}
