import { ADD_BLACK, GET_ALL_BLACK } from '../types'


export const blacklistReducer = (state = [], action) => {
  const { type, payload } = action
  console.log(action);
  switch (type) {
    case ADD_BLACK: {
      return [...state, payload]
    }

    case GET_ALL_BLACK: {
      return [...state]
    }
    default: {
      return state
    }
  }
}
