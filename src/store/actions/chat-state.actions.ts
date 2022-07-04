import { SET_ACTIVE_USER_ID, SET_TYPING_VALUE } from "../constants";


export type SetActiveUserIdAction = {
  type: typeof SET_ACTIVE_USER_ID;
  payload: string;
}

export const setActiveUserId = (userId: string): SetActiveUserIdAction => ({
  payload: userId,
  type: SET_ACTIVE_USER_ID,
});

export type SetTypingValueAction = {
  type: typeof SET_TYPING_VALUE;
  payload: string;
};

export const setTypingValue = (value: string): SetTypingValueAction => ({
  type: SET_TYPING_VALUE,
  payload: value,
});
