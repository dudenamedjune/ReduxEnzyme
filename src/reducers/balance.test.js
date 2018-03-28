import balanceReducer from './balance';
import * as constants from '../actions/constants';

const {
  SET_BALANCE,
  DEPOSIT,
  WITHDRAW,
} = constants;

let initState = {
  balance: 5,
};

describe('balanceReducer', () => {
  describe('when initializing', () => {
    const balance = 10;

    it('sets a balance', () => {
      expect(balanceReducer(undefined, { type: SET_BALANCE, payload: balance }))
        .toEqual({ balance });
    });
    describe('re-init', () => {
      it('reads the balance from cookies', () => {
        expect(balanceReducer(
          undefined,
          { type: SET_BALANCE, payload: balance },
        )).toEqual({ balance });
      });
    });
  });


  it('deposits into the balance', () => {
    const amountDeposited = 10;
    expect(balanceReducer(
      initState,
      { type: DEPOSIT, payload: amountDeposited },
    )).toEqual({ balance: initState.balance + amountDeposited });
  });

  it('withdraws from the balance', () => {
    const amountToWithDraw = 10;
    initState = { ...initState, balance: 20 };
    const action = { type: WITHDRAW, payload: amountToWithDraw };

    expect(balanceReducer(initState, action))
      .toEqual({ balance: initState.balance - amountToWithDraw });
  });
});
