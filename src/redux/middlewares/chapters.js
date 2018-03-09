import { restGet } from '~/services/api.js'

const chaptersMiddleware = {
  MDW_GET_ALL_CHAPTERS: (payload, dispatch) => {

    restGet('/chapters')
      .then(
        data => dispatch({type: 'GET_ALL_CHAPTERS_OK', payload: {response: data, ...payload}}),
        err => dispatch({ type: 'GET_ALL_CHAPTERS_ERROR', payload: {err} })
      )
  },

  MDW_GET_ONE_CHAPTER: (payload, dispatch) => {

    restGet('/chapters/'+ payload.number)
      .then(
        data => dispatch({type: 'GET_ONE_CHAPTER_OK', payload: {response: data, ...payload}}),
        err => dispatch({ type: 'GET_ONE_CHAPTER_ERROR', payload: {err} })
      )
  }
}

export default chaptersMiddleware
