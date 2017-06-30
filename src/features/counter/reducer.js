import { INCREMENT, DECREMENT } from './types';

const initialState = {
  count: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1000,
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 100,
      };

    default:
      return state;
  }
}
