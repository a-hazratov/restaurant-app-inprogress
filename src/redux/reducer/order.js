import { INCREMENT, DECREMENT } from '../constants';

export default function (state = {}, action) {
  const { type, id } = action;

  switch (type) {
    case INCREMENT:
      return { ...state, [id]: (state[id] || 0) + 1 };

    case DECREMENT:
      return { ...state, [id]: state[id] > 0 ? state[id] - 1 : 0 };

    default:
      return state;
  }
}
