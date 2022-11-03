import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import { state as staticData } from '../data/static-data';
import { ChatState } from './reducers/chat-state.reducer';
import { PostsState } from './reducers/posts.reducer';


export type State = {
  user: typeof staticData.user,
  contacts: typeof staticData.contacts,
  messages: typeof staticData.messages,
  chatState: ChatState,
  posts: PostsState;
};

const store = configureStore<State>({
  reducer: rootReducer
});

export const useAppDispatch = () => store.dispatch;
export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
export default store;
