import { GET_ALL_CATS, ADD_CAT } from '../types'

export const catsReducer = (state = [], action) => {
  const { type, payload } = action
  switch (type) {
    case ADD_CAT: {
      return [...state, payload]
    }
    case GET_ALL_CATS: {
      return [...state, ...payload]
    }
    default: {
      return state
    }
  }
}
