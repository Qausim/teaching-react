import Main from "../../components/Main";
import Sidebar from "../../components/Sidebar";
import ContactList from "../../containers/ContactList";


const ChatPage = () => {
  return (
    <>
      <Sidebar>
        <ContactList />
      </Sidebar>
      <Main />
    </>
  );
}

export default ChatPage
