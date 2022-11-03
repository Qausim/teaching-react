import ChatWindow from "../ChatWindow";
import Empty from "../../containers/Empty";
import store, { useAppSelector } from "../../store";
import './Main.css';


const Main = () => {
  const activeUserId = useAppSelector((state) => state.chatState.activeUserId);
  return (
    <main className="Main">
      {
        activeUserId ? <ChatWindow /> : <Empty />
      }
    </main>
  );
};

export default Main;
