export interface authPageDto {
  list: authListDto[]
  info: {}
}

export interface authListDto {
  created: string
  createdAsTimestamp: number
  id: number
  status: number
  team: string
  username: string
}
