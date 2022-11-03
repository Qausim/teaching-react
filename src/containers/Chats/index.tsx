import { useEffect, useRef } from "react";
import Chat from "../../components/Chat";
import { useAppSelector } from "../../store";
import './Chats.css';


const Chats = () => {
  const { activeUserId, messages } = useAppSelector((state) => ({
    messages: state.messages,
    activeUserId: state.chatState.activeUserId,
  }));
  const chatMessages = messages[activeUserId].order.map((id) => messages[activeUserId].messages[id]);
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
