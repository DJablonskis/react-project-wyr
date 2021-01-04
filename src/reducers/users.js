import { RECEIVE_USERS, UPDATE_USER, ADD_QUESTION_TO_USER } from '../actions/users'

export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case UPDATE_USER:
            const { qid, answer, authedUser } = action.answer
            return {
                ...state,
                [authedUser]: {
                    ...state[authedUser],
                    answers: {
                        ...state[authedUser].answers,
                        [qid]: answer
                    }
                }
            }
        case ADD_QUESTION_TO_USER:
            const { author, question } = action.ids
            return {
                ...state,
                [author]: {
                    ...state[author],
                    questions: state[author].questions.concat([question])
                }
            }
        default:
            return state
    }
}
