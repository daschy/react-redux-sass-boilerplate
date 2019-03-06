import { CLICK_START, CLICK_END } from '../actions/action.types';

const defaultState = {

};

export default (state = defaultState, payload = {}) => {
  switch (payload.type) {
    case CLICK_START:
      return { ...state, isClicking: true };
    case CLICK_END:
      return { ...state, isClicking: false };
    default:
      return state;
  }
};
