
// Checking if the user is logged in or not
// by default state is equal to false (meaning user is not logged in)
// second param is an action (as usual)
// Then we have the regular switch case. 

const loggedReducer = (state = false, action) => {
    switch (action.type) {
        case "SIGN_IN":
            return !state;
        default:
            return state;
    }
}

export default loggedReducer;
