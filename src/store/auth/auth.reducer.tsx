import { postAuthLoginAsync, requestAuthListAsync } from './auth.action'
import { getType, ActionType, Action } from 'typesafe-actions'
import { authPageDto } from './auth.type'

const initialState: authPageDto = {
  list: [],
  info: {},
}

export type LoginAction =
  | ActionType<typeof postAuthLoginAsync>
  | ActionType<typeof requestAuthListAsync>

const auth = (state: authPageDto = initialState, action: LoginAction): authPageDto => {
  switch (action.type) {
    case getType(postAuthLoginAsync.request):
      return {
        ...state,
        info: {
          ...state.info,
          ...action.payload,
        },
      }

    case getType(postAuthLoginAsync.success):
      const { payload } = action
      const { status, config }: any = payload
      const { data } = config

    case getType(postAuthLoginAsync.failure):
      return {
        ...state,
        info: {
          ...action.payload,
        },
      }

    case getType(requestAuthListAsync.success):
      return {
        ...state,
        list: {
          ...state.list,
          ...action.payload,
        },
      }

    default:
      return state
  }
}

export default auth
