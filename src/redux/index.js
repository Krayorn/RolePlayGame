import { combineReducers, applyMiddleware } from 'redux'

//middlewares
import chaptersMiddleware from './middlewares/chapters'

//reducers
import chaptersReducer from './reducers/chapters'

const customMiddlewares = {
  ...chaptersMiddleware
}

export const reducers = combineReducers({
  chapters: chaptersReducer
})

const customMiddleWare = store => next => action => {

  next(action)

  if (customMiddlewares[action.type]) {
    customMiddlewares[action.type](action.payload = {}, next)
  }
}

export const middlewares = applyMiddleware(customMiddleWare)
