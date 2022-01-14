import { combineReducers } from 'redux'
import { catsReducer } from '../reducers/cats.reducer'
import { dogsReducer } from '../reducers/dogs.reducer'
import { blacklistReducer } from './blacklist.reducer'
import { userReducer } from './user.reducer'

export const rootReducer = combineReducers({
  cats: catsReducer,
  dogs: dogsReducer,
  blacklist: blacklistReducer,
  user: userReducer
})
