import { INCREMENT, DECREMENT, REMOVE } from './constants';

export const increment = (id) => ({ type: INCREMENT, id: id });
export const decrement = (id) => ({ type: DECREMENT, id: id });
export const remove = (id) => ({ type: REMOVE, id: id });
