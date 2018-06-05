
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import TestReducer from './reducer';
import loginReducer from './Login/reducer';
export default combineReducers({
    routing: routerReducer,
    test: TestReducer,
    login :loginReducer
})