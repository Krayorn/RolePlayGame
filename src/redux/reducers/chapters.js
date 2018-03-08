const chapters = (state = {}, action) => {

  switch (action.type) {

    case 'GET_ALL_CHAPTERS_OK':
      return Object.assign({}, state, {
        list: action.payload.response
      })

    default:
      return state
  }
}

export default chapters
