import * as constants from './constants';
import * as actions from './balance';

const {
  SET_BALANCE,
  DEPOSIT,
  WITHDRAW,
} = constants;

const {
  setBalance,
  deposit,
  withdraw,
} = actions;

it('creates an action to set the balance', () => {
  const balance = 10;
  const expectedAction = { type: SET_BALANCE, payload: balance };

  expect(setBalance(balance)).toEqual(expectedAction);
});

it('creates an action to deposit into the balance', () => {
  const amountDeposited = 10;
  const expectedAction = { type: DEPOSIT, payload: amountDeposited };

  expect(deposit(amountDeposited)).toEqual(expectedAction);
});

it('creates an action to withdraw from the balance', () =>{
  const amountToWithDraw = 10;
  const expectedAction = { type: WITHDRAW, payload: amountToWithDraw };

  expect(withdraw(amountToWithDraw)).toEqual(expectedAction);
});
