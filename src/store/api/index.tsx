import axios from 'axios'
import { Alert } from 'antd'
import { getCookie } from '../data/cookie'
import { postAuthLogin } from '../auth/auth.api'
import { authTokenExpiredCheck } from '@src/utils/common'

const PUBLIC_URL = `http://crm-api.e21.co.kr/`

export const getAPI = async (url) => {
  const accessToken = localStorage.getItem('access_token')
  authTokenExpiredCheck()
  const res = await axios.get(`${PUBLIC_URL}${url}`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  })
  const result = res.data
  return result
}

export const putAPI = async (url, datas) => {
  let accessToken = localStorage.getItem('access_token')
  authTokenExpiredCheck()
  const res = await axios.put(
    `${PUBLIC_URL}${url}`,
    { ...datas },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  )
  return res
}

export const postAPI = (url, datas) => {
  let accessToken = localStorage.getItem('access_token')
  authTokenExpiredCheck()
  const res = axios.post(
    `${PUBLIC_URL}${url}`,
    { ...datas },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  )
  return res
}
