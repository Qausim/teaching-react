import { MessageType } from "../../data/static-data";
import { useAppDispatch, useAppSelector } from "../../store";
import { deleteMessage } from "../../store/reducers/messages.reducer";
// import { deleteMessage } from "../../store/actions/messages.actions";

type ChatProps = {
  message: MessageType;
};

const Chat = ({ message }: ChatProps) => {
  const { text, is_user_msg } = message;
  const dispatch = useAppDispatch();
  const activeUserId = useAppSelector((state) => state.chatState.activeUserId);

  const handleDelete = () => {
    dispatch(deleteMessage({ id: message.message_id, userId: activeUserId!}));
  }

  return (
    <div
      className={`Chat ${is_user_msg ? "is-user-msg" : ""}`}
    >
      {is_user_msg && <button onClick={handleDelete} className="del-btn">&times;</button>}
      {text}
    </div>
  );
}

export default Chat;
