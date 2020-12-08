import { combineReducers } from 'redux'
import users from './users'
import polls from './polls'

export default combineReducers({ users, polls })