import { takeEvery, put, call, all } from 'redux-saga/effects'
import * as auth from './auth.action'
import * as authApi from './auth.api'
import moment from 'moment'
import { setCookie, getCookie } from '../data/cookie'
import { Spin } from 'antd'

//oauth/token
function* postAuthLogin(action) {
  const { payload } = action
  try {
    const authTokenResponseData = yield call(authApi.postAuthLogin, payload)
    yield put(auth.postAuthLoginAsync.success(authTokenResponseData))
    const { data } = authTokenResponseData
    const ex_date = moment().toDate().getTime()
    localStorage.setItem('access_token', data.access_token)
    localStorage.setItem('refresh_token', data.refresh_token)
    localStorage.setItem('expires_in', data.expires_in)
    const new_expirse_in = ex_date + data.expires_in * 1000
    localStorage.setItem('new_expires_in', new_expirse_in.toString())
    if (authTokenResponseData.status === 200) {
      window.location.href = '/members/member'
    }
    // JSON.parse(localStorage.getItem("access_token"));
  } catch (error) {
    yield put(auth.postAuthLoginAsync.failure(error))
  }
}

//로그인 리스트
function* requestAuthList(action) {
  const { payload } = action
  try {
    const loginData = yield call(authApi.requestAuthList, payload)
    yield put(auth.requestAuthListAsync.success(loginData))
  } catch (error) {
    yield put(auth.requestAuthListAsync.failure(error))
  }
}

export function* authSaga() {
  yield all([
    takeEvery(auth.postAuthLoginAsync.request, postAuthLogin),
    takeEvery(auth.requestAuthListAsync.request, requestAuthList),
  ])
}
