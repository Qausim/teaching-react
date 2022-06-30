import { Reducer } from 'redux';
import { state } from '../../data/static-data';
import { SEND_MESSAGE, SET_ACTIVE_USER_ID, SET_TYPING_VALUE } from '../constants';
import { SetActiveUserIdAction, SetTypingValueAction } from '../actions/chat-state.actions';
import { DeleteContactAction } from '../actions/contact.actions';
import { DELETE_CONTACT } from '../constants';
import { SendMessageAction } from '../actions/messages.actions';


type ChatState = {
  typing: string;
  activeUserId: string | null;
}

const initialState = {
  typing: state.typing,
  activeUserId: state.activeUserId,
};


type ChatStateActions = SetActiveUserIdAction | DeleteContactAction | SetTypingValueAction | SendMessageAction;

export const chatStateReducer: Reducer<ChatState, ChatStateActions> = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_USER_ID:
      return {
        ...state,
        typing: '',
        activeUserId: action.payload,
      };
    case DELETE_CONTACT:
      if (state.activeUserId === action.payload) return {...state, typing: '', activeUserId: null};
      else return state;
    case SEND_MESSAGE:
      return {
        ...state,
        typing: '',
      }
    case SET_TYPING_VALUE:
      return {
        ...state,
        typing: action.payload,
      };
    default:
      return state;
  }
};
