import { REGISTER, DELETE } from './actionsTypes';
export const dataStore = (userData) => ({
  type: REGISTER,
  payload: userData,
});
export const dataDelete = () => ({
  type: DELETE,
});
