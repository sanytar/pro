import { GET_ALL_DOGS, ADD_DOG } from '../types'


export const dogsReducer = (state = [], action) => {
  const { type, payload } = action

  switch (type) {
    case ADD_DOG: {
      return [...state, payload]
    }
    case GET_ALL_DOGS: {
      return [...state, ...payload]
    }
    default: {
      return state
    }
  }
}
