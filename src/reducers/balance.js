import { read_cookie as readCookie, bake_cookie as bakeCookie } from 'sfcookies';
import * as constants from '../actions/constants';

const BALANCE_COOKIE = 'BALANCE_COOKIE';

const {
  SET_BALANCE,
  DEPOSIT,
  WITHDRAW,
} = constants;

const initState = {
  balance: 0,
};
const balanceReducer = (state = initState, action) => {
  let object = { };
  switch (action.type) {
    case SET_BALANCE:
      object = {
        ...state,
        balance: action.payload,
      };
      break;
    case DEPOSIT:
      object = {
        ...state,
        balance: state.balance + action.payload,
      };
      break;
    case WITHDRAW:
      object = {
        ...state,
        balance: state.balance - action.payload,
      };
      break;
    default:
      return { ...readCookie(BALANCE_COOKIE) } || state;
  }
  bakeCookie(BALANCE_COOKIE, object);
  return object;
};

export default balanceReducer;
