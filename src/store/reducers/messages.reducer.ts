import { Reducer } from 'redux';
import { state } from "../../data/static-data";
import { DeleteContactAction } from '../actions/contact.actions';
import { DeleteMessageAction, SendMessageAction } from '../actions/messages.actions';
import { DELETE_CONTACT, DELETE_MESSAGE, SEND_MESSAGE } from '../constants';


const messages = state.messages;

type MessagesState = typeof messages;

type MessagesActions = DeleteContactAction | SendMessageAction | DeleteMessageAction;


export const messagesReducer: Reducer<MessagesState, MessagesActions> = (state = messages, action) => {
  const stateCopy = {...state};

  switch (action.type) {
    case DELETE_CONTACT:
      delete stateCopy[(action as DeleteContactAction).payload];
      return stateCopy;
    case SEND_MESSAGE:
      const sendMessageAction = action as SendMessageAction;
      return {
        ...state,
        [sendMessageAction.payload.userId]: new Map([
          // @ts-ignore
          ...state[sendMessageAction.payload.userId],
          [sendMessageAction.payload.message.message_id, sendMessageAction.payload.message]
        ]),
      };
    case DELETE_MESSAGE:
      const deleteMessageAction = action as DeleteMessageAction;
      const toDeleteFromMap = new Map(state[deleteMessageAction.payload.userId]);
      toDeleteFromMap.delete(deleteMessageAction.payload.id);
      return {
        ...state,
        [deleteMessageAction.payload.userId]: toDeleteFromMap,
      };
    default:
      return state;
  }
};
