import { FETCH_BITCOIN } from '../actions/constants';

const initState = {
};

const bitcoinReducer = (state = initState, { type = '', payload = '' }) => {
  switch (type) {
    case FETCH_BITCOIN:
      return {
        ...state,
        bitcoin: payload,
      };
    default:
      return state;
  }
};

export default bitcoinReducer;
