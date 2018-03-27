import * as constants from '../actions/constants';

const {
  SET_BALANCE,
  DEPOSIT,
  WITHDRAW,
} = constants;

const initState = {
  balance: 0,
};
export const balanceReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_BALANCE:
      return {
        ...state,
        balance: action.payload,
      };
    case DEPOSIT:
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case WITHDRAW:
      return {
        ...state,
        balance: state.balance - action.payload,
      }
    default:
      return initState;
  }
};

