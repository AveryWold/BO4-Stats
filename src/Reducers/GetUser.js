export const GET_USER_IS_FETCHING = "GET_USER_IS_FETCHING";
export const GET_USER_HAS_ERRORS = "GET_USER_HAS_ERRORS";
export const GET_USER_IS_SUCCESSFUL = "GET_USER_IS_SUCCESSFUL";
export const GET_USER_IS_VALID = "GET_USER_IS_VALID";
export const GET_USER_IS_VALID1 = "GET_USER_IS_VALID1";
export const GET_USER_IS_VALID2 = "GET_USER_IS_VALID2";

const GetUser = (state = {}, action) => {
    switch(action.type){
        case GET_USER_IS_FETCHING:
            return {...state, isFetching: true, isSuccessful: false}
        case GET_USER_HAS_ERRORS:
            return {...state, isFetching: false, hasErrors: true, isSuccessful: false}
        case GET_USER_IS_SUCCESSFUL:
            return {...state, isFetching: false, hasErrors: false, isSuccessful: true, data: action.payload}
        case GET_USER_IS_VALID:
            return {...state, isFetching: false, isSuccessful:true, success: action.payload}
        case GET_USER_IS_VALID1:
            return {...state, isFetching: false, isSuccessful:true, success1: action.payload}
        case GET_USER_IS_VALID2:
            return {...state, isFetching: false, isSuccessful:true, success2: action.payload}
        default:
            return state;
    }
}

export default GetUser;