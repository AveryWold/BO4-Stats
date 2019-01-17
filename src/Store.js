import { createStore } from 'redux';
import Reducers from './Reducers';
import InitialState from './InitialState';

const Store = createStore(Reducers, InitialState);

export default Store;