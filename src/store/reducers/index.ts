import { chatStateReducer } from './chat-state.reducer';
import { contactsReducer } from './contacts.reducer';
import { messagesReducer } from './messages.reducer';
import { postsReducer } from './posts.reducer';
import { userReducer } from './user.reducer';


const rootReducer = {
  user: userReducer,
  contacts: contactsReducer,
  messages: messagesReducer,
  chatState: chatStateReducer,
  posts: postsReducer,
};

export default rootReducer;
