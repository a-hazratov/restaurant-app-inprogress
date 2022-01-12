import { INCREMENT, DECREMENT } from './constants';

export const increment = (id) => ({ type: INCREMENT, id: id });
export const decrement = (id) => ({ type: DECREMENT, id: id });
