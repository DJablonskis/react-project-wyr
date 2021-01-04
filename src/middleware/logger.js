const logger = (store) => (next) => (action) => {
    console.log("action: ", action.type)
    const returnVal = next(action);
    return returnVal
}
export default logger