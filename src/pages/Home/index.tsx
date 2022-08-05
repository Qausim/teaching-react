import { Link } from "react-router-dom";
import PaddedContainer from "../../components/PaddedContainer";
import styles from './styles.module.css';

const HomePage = () => {
  return (
    <PaddedContainer>
      <h1>Welcome</h1>
      <header className={styles.header}>
        <Link to='/chat'>Chat</Link>
        <Link to='/posts'>Posts</Link>
      </header>
    </PaddedContainer>
  )
}

export default HomePage
