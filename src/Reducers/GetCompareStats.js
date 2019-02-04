export const GET_STATS_IS_FETCHING1 = "GET_STATS_IS_FETCHING1";
export const GET_STATS_HAS_ERRORS1 = "GET_STATS_HAS_ERRORS1";
export const GET_STATS_IS_SUCCESSFUL1 = "GET_STATS_IS_SUCCESSFUL1";
export const GET_STATS_IS_FETCHING2 = "GET_STATS_IS_FETCHING2";
export const GET_STATS_HAS_ERRORS2 = "GET_STATS_HAS_ERRORS2";
export const GET_STATS_IS_SUCCESSFUL2 = "GET_STATS_IS_SUCCESSFUL2";

const GetStats = (state = {}, action) => {
    switch(action.type){
        case GET_STATS_IS_FETCHING1:
            return {...state, isFetching: true}
        case GET_STATS_HAS_ERRORS1:
            return {...state, isFetching: false, hasErrors: true, isSuccessful: false}
        case GET_STATS_IS_SUCCESSFUL1:
            return {...state, isFetching: false, hasErrors: false, isSuccessful: true, data: action.payload}
        case GET_STATS_IS_FETCHING2:
            return {...state, isFetching: true}
        case GET_STATS_HAS_ERRORS2:
            return {...state, isFetching: false, hasErrors: true, isSuccessful: false}
        case GET_STATS_IS_SUCCESSFUL2:
            return {...state, isFetching: false, hasErrors: false, isSuccessful: true, data: action.payload}
        default:
            return state;
    }
}

export default GetStats;