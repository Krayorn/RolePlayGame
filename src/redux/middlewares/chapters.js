
const chaptersMiddleware = {
  MDW_GET_ALL_CHAPTERS: (action) => {
    return {
      ...action,
      type: 'GET_ALL_CHAPTERS_OK',
      response: ['TEST1', 'TEST2']
    }
  }
}

export default chaptersMiddleware
