const chapters = (state = {}, action) => {

  switch (action.type) {

    case 'GET_ALL_CHAPTERS_OK':
      return {...state, list: action.response}

    default:
      return state
  }
}

export default chapters