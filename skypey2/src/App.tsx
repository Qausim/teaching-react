import './App.css';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import ContactList from './containers/ContactList';


function App() {
  return (
    <div className="App">
      <Sidebar>
        <ContactList />
      </Sidebar>
      <Main />
    </div>
  );
}

export default App;
