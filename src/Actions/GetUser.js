import axios from 'axios';
import { GET_USER_IS_FETCHING,
         GET_USER_HAS_ERRORS,
         GET_USER_IS_SUCCESSFUL,
         GET_USER_IS_VALID
        } from "../Reducers/GetUser";
import { getStats } from './GetStats';
import { updateIsLoading } from './UserInfo';

const userIsFetching = () => {
    return {
        type: GET_USER_IS_FETCHING,
    }
}
        
const userHasErrors = () => {
    return {
        type: GET_USER_HAS_ERRORS
    }
}
        
const userIsSuccessful = (data) => {
    return {
        type: GET_USER_IS_SUCCESSFUL,
        payload: data
    }
}

const userIsValid = (success) => {
    return{
        type: GET_USER_IS_VALID,
        payload: success
    }
}

const userFetchData = (url, username) => {
    return (dispatch) => {
        dispatch(userIsFetching());
        axios.get(url)
        .then(json => (
        {
            success: json.data.success,
        }))
        .then((newData) => {
            dispatch(userIsValid(newData.success));
            dispatch(userIsSuccessful(newData))
            if(newData.success || newData.success !== undefined){
                dispatch(getStats(username));
            }
            if(newData.success === undefined) {
                console.log("Username is not valid");
                dispatch(updateIsLoading(false));
            }
        })
        .catch(() => {
            dispatch(userHasErrors());
            dispatch(updateIsLoading(false));
        })
    };
}

export const getUser = (username) => {
    const url = 'https://cod-api.theapinetwork.com/api/validate/bo4/' + username + '/psn';
    return userFetchData(url, username);
}