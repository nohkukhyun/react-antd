import { createStore, applyMiddleware, Store, compose } from 'redux'
import { MakeStore, createWrapper, Context } from 'next-redux-wrapper'
import createSagaMiddleware, { Task } from 'redux-saga'
import rootReducer, { RootState } from './rootReducer'
import rootSaga from './rootSaga'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: typeof compose
  }
}

export interface SagaStore extends Store {
  sagaTask?: Task
}

export const makeStore: MakeStore<RootState> = (context: Context) => {
  // 1: Create the middleware
  const sagaMiddleware = createSagaMiddleware()

  const middlewares = [sagaMiddleware]

  const dev = process.env.NODE_ENV === 'development'

  const enhancer: any = dev
    ? compose(
        applyMiddleware(...middlewares),
        process.browser && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
          ? window.__REDUX_DEVTOOLS_EXTENSION__()
          : (f: any) => f
      )
    : compose(applyMiddleware(...middlewares))

  // 2: Add an extra parameter for applying middleware:
  const store = createStore(rootReducer, enhancer) as SagaStore

  // 3: Run your sagas on server
  store.sagaTask = sagaMiddleware.run(rootSaga)

  // 4: now return the store:
  return store
}

export const wrapper = createWrapper<RootState>(makeStore, { debug: false })
