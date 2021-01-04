export const RECEIVE_USERS = 'RECEIVE_USERS'
export const UPDATE_USER = 'UPDATE_USER'
export const ADD_QUESTION_TO_USER = 'add_question'

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users,
    }
}

export function updateUserAnswers(answer) {
    return {
        type: UPDATE_USER,
        answer
    }
}

export function addPollToAuthor(ids) {
    return {
        type: ADD_QUESTION_TO_USER,
        ids
    }
}