import {combineReducers} from 'redux'
import ModaleReducer from './reducers/modals'

const AppRedux = combineReducers({
  modaleReducer: ModaleReducer
})

export default AppRedux