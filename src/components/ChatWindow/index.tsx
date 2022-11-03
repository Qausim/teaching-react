import ChatHeader from "../../containers/ChatHeader";
import Chats from "../../containers/Chats";
import MessageInput from "../../containers/MessageInput";
import './ChatWindow.css'

const ChatWindow = () => {
  return (
    <div className="ChatWindow">
      <ChatHeader />
      <Chats />
      <MessageInput />
    </div>
  )
};

export default ChatWindow;
