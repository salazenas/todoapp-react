import { combineReducers } from 'redux'
import todoReducer from '../todo/todoReducer'

const root = combineReducers({
    todo: todoReducer
})

export default root