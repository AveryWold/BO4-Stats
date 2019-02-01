import { combineReducers } from 'redux';
import UserInfo from './UserInfo';
import GetStats from './GetStats';
import GetUser from './GetUser';
import CompareInfo from './CompareInfo';

const Reducers = combineReducers({
    UserInfo, GetStats, GetUser, CompareInfo
});

export default Reducers;