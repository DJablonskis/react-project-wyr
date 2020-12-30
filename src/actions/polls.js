import { _saveQuestion } from '../_DATA'
import { showLoading, hideLoading } from 'react-redux-loading'
export const RECEIVE_POLLS = 'RECEIVE_POLLS'
export const ANSWER_POLL = 'ANSWER_POLL'
export const ADD_POLL = 'ADD_POLL'


export function receivePolls(polls) {
    return {
        type: RECEIVE_POLLS,
        polls
    }
}

export function answerPoll(answer) {
    return {
        type: ANSWER_POLL,
        answer
    }
}

export function addPoll(poll) {
    return (dispatch) => {

        return {
            type: ADD_POLL,
            poll
        }
    }

}

export function handleAddPoll(poll) {
    return (dispatch) => {
        dispatch(showLoading())
        return _saveQuestion(poll)
            .then(dispatch(addPoll(poll)))
            .then(dispatch(hideLoading()))
    }
}


