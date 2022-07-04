import { ChangeEvent, FormEvent } from "react";
import store from "../../store";
import { setTypingValue } from "../../store/actions/chat-state.actions";
import { sendMessage } from '../../store/actions/messages.actions';
import './MessageInput.css';
import shortid from 'shortid';


const MessageInput = () => {
  const {
    chatState: { typing, activeUserId }
  } = store.getState();

  const handleChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    store.dispatch(setTypingValue(value));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    store.dispatch(sendMessage(
      activeUserId!,
      {
        is_user_msg: true,
        text: typing,
        message_id: shortid.generate(),
      }
    ));
  };

  return (
    <form className="Message" onSubmit={handleSubmit}>
      <input
        className="Message__input"
        onChange={handleChange}
        value={typing}
        placeholder="write a message"
      />
    </form>
  );
};

export default MessageInput;
