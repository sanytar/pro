import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { rootReducer } from './reducers/root.reducer'

const initialState = {
  cats: [],
  dogs: [],
  blacklist: [],
  user: null
}

export const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)))
