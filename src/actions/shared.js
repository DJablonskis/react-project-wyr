import { _getUsers, _getQuestions } from '../_DATA'
import { receivePolls } from './polls'
import { receiveUsers } from './users'

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