import { createSlice } from '@reduxjs/toolkit';
import { state } from "../../data/static-data";

const initialState = state.user;


export type UserActions = {
  type: null;
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

  }
});

export const userReducer = userSlice.reducer;

// export const userReducer: Reducer<UserType, UserActions> = (state = initialState, action) => {
//   console.log('USER REDUCER', {action});
//   return state;
// };
