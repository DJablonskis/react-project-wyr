import { RECEIVE_POLLS, ANSWER_POLL, ADD_POLL } from "../actions/polls"

export default function polls(state = {}, action) {

    switch (action.type) {
        case RECEIVE_POLLS:
            return {
                ...state,
                ...action.polls
            }
        case ANSWER_POLL:
            const { qid, authedUser, answer } = action.answer
            return {
                ...state,
                [qid]: {
                    ...state[qid],
                    [answer]: {
                        ...state[qid][answer],
                        votes: state[qid][answer].votes.concat([authedUser])
                    }

                }

            }
        case ADD_POLL:
            console.log("adding: ", action.poll)
            const pollsState = {
                ...state,
                [action.poll.id]: action.poll
            }

            console.log("updated polls list: ", pollsState)
            return pollsState
        default:
            return state
    }
}

