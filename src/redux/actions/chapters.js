export function getAll() {
  return {
    type: 'MDW_GET_ALL_CHAPTERS'
  }
}

export function getOne(number) {
  return {
    type: 'MDW_GET_ONE_CHAPTER',
    payload: {
      number
    }
  }
}
