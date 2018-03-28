import * as constants from './constants';

const {
  SET_BALANCE,
  DEPOSIT,
  WITHDRAW,
} = constants;

export const setBalance = balance => ({
  type: SET_BALANCE,
  payload: balance,
});

export const deposit = amountDeposited => ({
  type: DEPOSIT,
  payload: amountDeposited,
});

export const withdraw = amountToWithdraw => ({
  type: WITHDRAW,
  payload: amountToWithdraw,
});
