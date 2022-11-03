import { ReactNode } from "react";
import styles from './styles.module.css';

const PaddedContainer = ({ children }: { children: ReactNode; }) => {
  return (
    <div className={styles.padded_container}>
      {children}
    </div>
  )
};

export default PaddedContainer;
