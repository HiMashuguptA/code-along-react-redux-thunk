import { applyMiddleware, legacy_createStore as createStore} from 'redux'
import { reducer } from './reducer'
import {thunk} from 'redux-thunk'
export const fetchStore = createStore(reducer,applyMiddleware(thunk))