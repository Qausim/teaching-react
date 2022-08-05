import { ChangeEvent, FormEvent } from "react";
import store, { useAppDispatch, useAppSelector } from "../../store";
// import { setTypingValue } from "../../store/actions/chat-state.actions";
// import { sendMessage } from '../../store/actions/messages.actions';
import './MessageInput.css';
import shortid from 'shortid';
import { setTypingValue } from "../../store/reducers/chat-state.reducer";
import { sendMessage } from "../../store/reducers/messages.reducer";


const MessageInput = () => {
  const { typing, activeUserId } = useAppSelector((state) => state.chatState);
  const dispatch = useAppDispatch();

  const handleChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    dispatch(setTypingValue(value));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("WE FIRST GOT HERE");
    dispatch(sendMessage({
      userId: activeUserId,
      message: {
        is_user_msg: true,
        text: typing,
        message_id: shortid.generate(),
      },
    }));
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
