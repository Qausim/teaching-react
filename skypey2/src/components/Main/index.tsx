import ChatWindow from "../ChatWindow";
import Empty from "../../containers/Empty";
import store from "../../store";
import './Main.css';


const Main = () => {
  const { chatState: { activeUserId } } = store.getState();
  return (
    <main className="Main">
      {
        activeUserId ? <ChatWindow /> : <Empty />
      }
    </main>
  );
};

export default Main;
