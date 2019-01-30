import { combineReducers } from 'redux';
import UserInfo from './UserInfo';
import GetStats from './GetStats';
import GetUser from './GetUser';

const Reducers = combineReducers({
    UserInfo, GetStats, GetUser
});

export default Reducers;