import axios from 'axios';
import { GET_USER_IS_FETCHING,
         GET_USER_HAS_ERRORS,
         GET_USER_IS_SUCCESSFUL,
         GET_USER_IS_VALID,
         GET_USER_IS_VALID1,
         GET_USER_IS_VALID2
        } from "../Reducers/GetUser";
import { getStats } from './GetStats';
import {getCompareStats1, getCompareStats2} from './GetCompareStats'
import { updateIsLoading } from './UserInfo';
import {updateIsLoading1, updateIsLoading2} from './CompareInfo';

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

const userIsValid1 = (success1) => {
    return{
        type: GET_USER_IS_VALID1,
        payload: success1
    }
}

const userIsValid2 = (success2) => {
    return{
        type: GET_USER_IS_VALID2,
        payload: success2
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

const compareFetchData1 = (url, username1) => {
    return (dispatch) => {
        dispatch(userIsFetching());
        axios.get(url)
        .then(json => (
        {
            success1: json.data.success,
        }))
        .then((newData) => {
            dispatch(userIsValid1(newData.success1));
            dispatch(userIsSuccessful(newData))
            if(newData.success1 || newData.success1 !== undefined){
                dispatch(getCompareStats1(username1));
            }
            if(newData.success1 === undefined) {
                console.log("Username 1 is not valid");
                dispatch(updateIsLoading1(false));
            }
        })
        .catch(() => {
            dispatch(userHasErrors());
            dispatch(updateIsLoading1(false));
        })
    };
}

const compareFetchData2 = (url, username2) => {
    return (dispatch) => {
        dispatch(userIsFetching());
        axios.get(url)
        .then(json => (
        {
            success2: json.data.success,
        }))
        .then((newData) => {
            dispatch(userIsValid2(newData.success2));
            dispatch(userIsSuccessful(newData))
            if(newData.success2 || newData.success2 !== undefined){
                dispatch(getCompareStats2(username2));
            }
            if(newData.success2 === undefined) {
                console.log("Username 2 is not valid");
                dispatch(updateIsLoading2(false));
            }
        })
        .catch(() => {
            dispatch(userHasErrors());
            dispatch(updateIsLoading2(false));
        })
    };
}

export const getCompare1 = (username1) => {
    const url = 'https://cod-api.theapinetwork.com/api/validate/bo4/' + username1 + '/psn';
    return compareFetchData1(url, username1);
}

export const getCompare2 = (username2) => {
    const url = 'https://cod-api.theapinetwork.com/api/validate/bo4/' + username2 + '/psn';
    return compareFetchData2(url, username2);
}