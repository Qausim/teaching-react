import store, { useAppSelector } from "../../store";
import './ChatHeader.css';


const ChatHeader = () => {
  const { contacts, activeUserId } = useAppSelector((state) => ({
    contacts: state.contacts,
    activeUserId: state.chatState.activeUserId
  }));
  const { name, status } = contacts[activeUserId!];

  return (
    <header className="Header">
      <h1 className="Header__name">{name}</h1>
      <p className="Header__status">{status}</p>
    </header>
  );
}

export default ChatHeader;
