import { createAction, createAsyncAction } from 'typesafe-actions'
import { AxiosError } from 'axios'
import { authListDto } from './auth.type'

//토큰 로그인
export const postAuthLoginAsync = createAsyncAction(
  '@login/POST_AUTH_LOGIN',
  '@login/POST_AUTH_LOGIN_SUCCESS',
  '@login/POST_AUTH_LOGIN_FAILURE'
)<any, any, AxiosError>()

//리스트
export const requestAuthListAsync = createAsyncAction(
  '@login/REQUEST_AUTH_LIST',
  '@login/REQUEST_AUTH_LIST_SUCCESS',
  '@login/REQUEST_AUTH_LIST_FAILURE'
)<any, authListDto, AxiosError>()

export const authCheck = createAction('@login/AUTH_CHECK')<any>()
