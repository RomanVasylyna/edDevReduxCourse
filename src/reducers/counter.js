
// Just a regular counter
// By deafult state is 0 and second param is action
// We have a typical switch case that is defined by action.type
const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + action.payload;
        case "DECREMENT":
            return state > 0 ? state - action.payload : state;
        default:
            return state;
    }
}

export default counterReducer;
