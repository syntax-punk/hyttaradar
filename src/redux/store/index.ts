import { createStore } from 'redux'
import hyttaReducer from '../reducers/hyttaReducer';

const store = createStore(hyttaReducer);

export default store;