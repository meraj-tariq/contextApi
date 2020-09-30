const counterReducer = (state, {action, payload}) => {
    switch (action) {
        case 'INCREMENT':
            return state.count + 1
        case 'DECREMENT':
            return state.count - 1
        case 'RESET':
            return 0
        case 'REMOVE_ITEM':
            return console.log(payload, state)
        default:
    }
}
export default counterReducer;



