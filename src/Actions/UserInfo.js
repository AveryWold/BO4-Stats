import {
    USER_INFO_UPDATE_USER_NAME
} from '../Reducers/UserInfo';

export const updateUserName = (username) => {
    return {
        type: USER_INFO_UPDATE_USER_NAME,
        payload: username
    };
}