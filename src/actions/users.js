export const RECEIVE_USERS = 'RECEIVE_USERS'
export const LOG_IN_USER = "LOG_IN_USER"
export const LOG_OUT_USER = 'LOG_OUT_USER'

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users,
    }
}

export function logIn(user) {
    return {
        type: LOG_IN_USER,
        user,
    }
}

export function logOut(user) {
    return {
        type: LOG_OUT_USER,
        user,
    }
}