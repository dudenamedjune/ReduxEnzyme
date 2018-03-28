import { combineReducers } from 'redux';
import balanceReducer from './balance';
import bitcoinReducer from './bitcoin';

export default combineReducers({
  bitcoin: bitcoinReducer,
  balance: balanceReducer,
});
