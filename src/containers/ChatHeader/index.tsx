import store from "../../store";
import './ChatHeader.css';


const ChatHeader = () => {
  const {
    contacts,
    chatState: { activeUserId },
  } = store.getState();
  const { name, status } = contacts[activeUserId!];

  return (
    <header className="Header">
      <h1 className="Header__name">{name}</h1>
      <p className="Header__status">{status}</p>
    </header>
  );
}

export default ChatHeader;
