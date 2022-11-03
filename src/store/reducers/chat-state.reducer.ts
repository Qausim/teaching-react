import { state } from '../../data/static-data';
import { SetActiveUserIdAction, SetTypingValueAction } from '../actions/chat-state.actions';
import { DeleteContactAction } from '../actions/contact.actions';
import { SendMessageAction } from '../actions/messages.actions';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { deleteContact } from './contacts.reducer';
import { sendMessage } from './messages.reducer';


export type ChatState = {
  typing: string;
  activeUserId: string;
}

const initialState = {
  typing: state.typing,
  activeUserId: state.activeUserId || '',
};


export type ChatStateActions = SetActiveUserIdAction | DeleteContactAction | SetTypingValueAction | SendMessageAction;

const chatStateSlice = createSlice({
  name: 'chatState',
  initialState,
  reducers: {
    setActiveUserId(state, action: PayloadAction<string>) {
      state.typing = '';
      state.activeUserId = action.payload;
    },
    setTypingValue(state, action: PayloadAction<string>) {
      state.typing = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(deleteContact, (state, { payload }) => {
        if (state.activeUserId === payload) {
          state.typing = '';
          state.activeUserId = '';
        }
      })
      .addCase(sendMessage, (state, _payload) => {
        state.typing = '';
      });
  },
});

export const { setActiveUserId, setTypingValue } = chatStateSlice.actions;
export const chatStateReducer = chatStateSlice.reducer;

// export const chatStateReducer: Reducer<ChatState, ChatStateActions> = (state = initialState, action) => {
//   switch (action.type) {
//     case SET_ACTIVE_USER_ID:
//       return {
//         ...state,
//         typing: '',
//         activeUserId: action.payload,
//       };
//     case DELETE_CONTACT:
//       if (state.activeUserId === action.payload) return {...state, typing: '', activeUserId: null};
//       else return state;
//     case SEND_MESSAGE:
//       return {
//         ...state,
//         typing: '',
//       }
//     case SET_TYPING_VALUE:
//       return {
//         ...state,
//         typing: action.payload,
//       };
//     default:
//       return state;
//   }
// };
