import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { state, MessageType } from "../../data/static-data";
import { DeleteContactAction } from '../actions/contact.actions';
import { DeleteMessageAction, SendMessageAction } from '../actions/messages.actions';
import { deleteContact } from './contacts.reducer';


const messages = state.messages;

export type MessagesActions = DeleteContactAction | SendMessageAction | DeleteMessageAction;

const messagesSlice = createSlice({
  name: 'messages',
  initialState: messages,
  reducers: {
    sendMessage(state, { payload: { userId, message } }: PayloadAction<{ userId: string; message: MessageType; }>) {
      state[userId].messages[message.message_id] = message;
      state[userId].order.push(message.message_id);
    },
    deleteMessage(state, { payload: { id, userId } }: PayloadAction<{ id: string; userId: string }>) {
      delete state[userId].messages[id];
      state[userId].order.splice(state[userId].order.indexOf(id), 1);
    }
  },
  extraReducers(builder) {
    builder
      .addCase(deleteContact, (state, { payload: contactId }) => {
        delete state[contactId];
      });
  }
});

export const { sendMessage, deleteMessage } = messagesSlice.actions;
export const messagesReducer = messagesSlice.reducer;

// export const messagesReducer: Reducer<MessagesState, MessagesActions> = (state = messages, action) => {
//   const stateCopy = {...state};

//   switch (action.type) {
//     case DELETE_CONTACT:
//       delete stateCopy[(action as DeleteContactAction).payload];
//       return stateCopy;
//     case SEND_MESSAGE:
//       const sendMessageAction = action as SendMessageAction;
//       return {
//         ...state,
//         [sendMessageAction.payload.userId]: new Map([
//           // @ts-ignore
//           ...state[sendMessageAction.payload.userId],
//           [sendMessageAction.payload.message.message_id, sendMessageAction.payload.message]
//         ]),
//       };
//     case DELETE_MESSAGE:
//       const deleteMessageAction = action as DeleteMessageAction;
//       const toDeleteFromMap = new Map(state[deleteMessageAction.payload.userId]);
//       toDeleteFromMap.delete(deleteMessageAction.payload.id);
//       return {
//         ...state,
//         [deleteMessageAction.payload.userId]: toDeleteFromMap,
//       };
//     default:
//       return state;
//   }
// };
