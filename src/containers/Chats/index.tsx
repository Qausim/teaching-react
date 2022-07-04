import { useEffect, useRef } from "react";
import Chat from "../../components/Chat";
import store from "../../store";
import './Chats.css';


const Chats = () => {
  const { chatState: { activeUserId }, messages } = store.getState();
  const chatMessages = Array.from(messages[activeUserId!].values());
  const chatsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // (chatsRef.current?.lastChild as HTMLSpanElement)?.scrollIntoView();
    chatsRef.current!.scrollTop = chatsRef.current!.scrollHeight;
  }, [chatMessages.length]);

  return (
    <div className="Chats" ref={chatsRef}>
      {
        chatMessages.map((message) => (
          <Chat
            message={message}
            key={message.message_id}
          />
        ))
      }
    </div>
  );
};

export default Chats;
