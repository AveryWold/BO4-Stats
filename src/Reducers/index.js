import { combineReducers } from 'redux';
import UserInfo from './UserInfo';
import GetStats from './GetStats';

const Reducers = combineReducers({
    UserInfo, GetStats
});

export default Reducers;