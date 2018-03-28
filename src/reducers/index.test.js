import rootReducer from './index';

describe('rootReducer', () => {
  it('inits default state', () => {
    expect(rootReducer({}, {})).toEqual({ balance: 0 || {}, bitcoin: {} });
  });
});
