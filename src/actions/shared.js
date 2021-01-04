import { _getUsers, _getQuestions, _saveQuestionAnswer, _saveQuestion } from '../_DATA'
import { receivePolls, answerPoll, addPoll } from './polls'
import { receiveUsers, updateUserAnswers, addPollToAuthor } from './users'
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
        return _saveQuestionAnswer(answer)
            .then(dispatch(answerPoll(answer)))
            .then(dispatch(updateUserAnswers(answer)))
            .then(dispatch(hideLoading()))
    }
}

export function handleAddPoll(poll) {

    return (dispatch) => {
        dispatch(showLoading())
        return _saveQuestion(poll).then(res => {
            dispatch(addPollToAuthor({ author: poll.author, question: res.id }))
            dispatch(addPoll(res))
            dispatch(hideLoading())
        })
    }
}


