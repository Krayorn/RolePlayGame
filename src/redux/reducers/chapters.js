const chapters = (state = {}, action) => {

  switch (action.type) {

    case 'GET_ALL_CHAPTERS_OK':
      return Object.assign({}, state, {
        list: action.payload.response
      })

    case 'GET_ONE_CHAPTER_OK':
      return Object.assign({}, state, {
        single: action.payload.response
      })

    case 'GET_ALL_CHAPTERS_ERROR':
    case 'GET_ONE_CHAPTER_ERROR':
      return Object.assign({}, state, {
        error: action.payload.error
      })

    default:
      return state
  }
}

export default chapters
