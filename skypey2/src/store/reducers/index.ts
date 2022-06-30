import { combineReducers } from 'redux';
import { chatStateReducer } from './chat-state.reducer';
import { contactsReducer } from './contacts.reducer';
import { messagesReducer } from './messages.reducer';
import { userReducer } from './user.reducer';


const rootReducer = combineReducers({
  user: userReducer,
  contacts: contactsReducer,
  messages: messagesReducer,
  chatState: chatStateReducer,
});

export default rootReducer;
