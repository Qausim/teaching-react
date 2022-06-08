// @ts-ignore
import styles from './styles.module.css';
import { BaseButton, BaseButtonProps } from "../BaseButton";
import React from 'react';


export const RedButton = ({ children, className, ...rest }: BaseButtonProps) => (
  <BaseButton
    {...rest}
    className={`${className || ''} ${styles.red}`.trim()}
  >
    {children}
  </BaseButton>
);
