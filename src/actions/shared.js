import { _getUsers, _getQuestions } from '../_DATA'
import { RECEIVE_POLLS, receivePolls } from './polls'
import { RECEIVE_USERS, receiveUsers } from './users'

export function handleInitialData() {
    return (dispatch) => {
        const users = _getUsers()
        return _getUsers().then((users) => {
            _getQuestions().then((polls) => {
                dispatch(receiveUsers(users));
                dispatch(receivePolls(polls));
            })
        })
    }
}