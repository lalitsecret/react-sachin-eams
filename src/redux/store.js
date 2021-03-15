import reducer	from './reducer'
import {createStore,applyMiddleware} from 'react-redux'
import thunk from 'redux-thunk'
const store=createStore(reducer,applyMiddleware(thunk))
export default store