import { getAPI, putAPI, postAPI } from '@store/api/index'
import axios from 'axios'

const AUTH_INFO_URL = 'api/account/list'
const AUTH_CREATED_URL = 'api/account'

export const postAuthLogin = (payload: { password: string; username: string }) => {
  if (!payload) return
  const { password, username } = payload

  return axios.post(`/api/login`, { password, username })
}

//회원정보 가져오기
export const requestAuthList = (payload: { team?: string; username?: string }) => {
  const { team, username } = payload
  let path = AUTH_INFO_URL
  path += `?team=${team}&username=${username}`

  return getAPI(path)
}

export const authLogin = () => {}
