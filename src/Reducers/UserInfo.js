export const USER_INFO_UPDATE_USER_NAME = "USER_INFO_UPDATE_USER_NAME";

const UserInfo = (state={}, action) => {
    switch(action.type){
        case USER_INFO_UPDATE_USER_NAME:
            return {...state, username: action.payload }
        default:
            return state;
    }
}

export default UserInfo;