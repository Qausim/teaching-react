import { MessageType } from "../../data/static-data";
import store from "../../store";
import { deleteMessage } from "../../store/actions/messages.actions";

type ChatProps = {
  message: MessageType;
};

const Chat = ({ message }: ChatProps) => {
  const { text, is_user_msg } = message;

  const handleDelete = () => {
    store.dispatch(deleteMessage(
      message.message_id, store.getState().chatState.activeUserId!
    ));
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
