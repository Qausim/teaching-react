// @ts-ignore
import styles from './styles.module.css';
import { MouseEventHandler, FC, ReactNode } from 'react';
import React from 'react';


export type BaseButtonProps = {
  className: string;
  children: ReactNode | ReactNode[];
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const BaseButton: FC<BaseButtonProps> = ({ className, onClick, children }) => (
  <button
    onClick={onClick}
    className={`${className || ''} ${styles.button}`.trim()}
  >
    {children}
  </button>
);
