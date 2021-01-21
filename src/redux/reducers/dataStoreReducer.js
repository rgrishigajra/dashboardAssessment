import { REGISTER, DELETE } from '../actionsTypes';
const initialState = {
  id: '',
  isOpen: false,
};
const loggedReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REGISTER:
      return { ...state, ...payload, isOpen: true };
    case DELETE:
      return { ...initialState };
    default:
      return { ...state };
  }
};
export default loggedReducer;
