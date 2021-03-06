import { INCREMENT, DECREMENT, REMOVE } from '../constants';

export default function (state = {}, action) {
  const { type, id } = action;

  switch (type) {
    case INCREMENT:
      return { ...state, [id]: (state[id] || 0) + 1 };

    case DECREMENT:
      return { ...state, [id]: state[id] > 0 ? state[id] - 1 : 0 };

    case REMOVE:
      let newState = state;
      delete newState[id];
      return newState;

    default:
      return state;
  }
}
