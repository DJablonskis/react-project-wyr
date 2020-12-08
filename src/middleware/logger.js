const logger = (store) => (next) => (action) => {
    console.log("action: ", action.type)
    const returnVal = next(action);
    console.log("new state: ", store.getState())
    return returnVal
}

export default logger