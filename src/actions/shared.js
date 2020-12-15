import { _getUsers, _getQuestions } from '../_DATA'
import { receivePolls } from './polls'
import { receiveUsers } from './users'
import { showLoading, hideLoading } from 'react-redux-loading'

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return _getUsers().then((users) => {
            _getQuestions().then((polls) => {
                dispatch(receiveUsers(users));
                dispatch(receivePolls(polls));
                dispatch(hideLoading())

            })
        })
    }
}