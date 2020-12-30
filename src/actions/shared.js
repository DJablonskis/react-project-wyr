import { _getUsers, _getQuestions, _saveQuestionAnswer } from '../_DATA'
import { receivePolls, answerPoll } from './polls'
import { receiveUsers, updateUserAnswers } from './users'
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

export function handleAnswerPoll(answer) {
    return (dispatch) => {
        dispatch(showLoading())
        return _saveQuestionAnswer(answer).then(res => {
            dispatch(answerPoll(answer))
            dispatch(updateUserAnswers(answer))
            dispatch(hideLoading())
        })
    }
}

