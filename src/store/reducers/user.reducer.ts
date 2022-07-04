import { Reducer } from 'redux';
import { state, UserType } from "../../data/static-data";

const initialState = state.user;


type UserActions = {
  type: null;
};

export const userReducer: Reducer<UserType, UserActions> = (state = initialState, action) => {
  console.log('USER REDUCER', {action});
  return state;
};
