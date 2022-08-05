import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';


type ButtonProps = {
  onClick?: () => void;
  className: string;
  children: ReactNode;
};


const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

type PrimaryButtonProps = Omit<ButtonProps, 'className'>;

const PrimaryButton = ({ children, ...rest }: PrimaryButtonProps) => {
  return (
    <Button className={styles.primary} {...rest}>
      {children}
    </Button>
  );
}

type LinkButtonProps = Omit<ButtonProps, 'className'> & {
  href: string;
}

const LinkButton = ({ children, href }: LinkButtonProps) => {
  return (
    <Link to={href} className={styles.primary}>
      {children}
    </Link>
  );
}

Button.Primary = PrimaryButton;
Button.Link = LinkButton;

export default Button;
