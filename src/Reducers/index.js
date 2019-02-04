import { combineReducers } from 'redux';
import UserInfo from './UserInfo';
import GetStats from './GetStats';
import GetUser from './GetUser';
import CompareInfo from './CompareInfo';
import GetCompareStats from './GetCompareStats';

const Reducers = combineReducers({
    UserInfo, GetStats, GetUser, CompareInfo, GetCompareStats
});

export default Reducers;