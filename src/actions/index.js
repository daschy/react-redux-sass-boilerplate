import { CLICK_START, CLICK_END } from './action.types';

/* eslint-disable import/prefer-default-export */
export const start = () => (dispatch) => {
  dispatch({ type: CLICK_START });
  setTimeout(() => {
    dispatch({ type: CLICK_END });
  }, 3000);
};
