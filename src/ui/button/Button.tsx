import { FC, PropsWithChildren } from 'react';
import './Button.scss';

export type ButtonProps = PropsWithChildren & {
  color?: 'primary' | 'danger';
};

export const Button: FC<ButtonProps> = ({ color = 'primary', children }) => {
  return <button className={`button button-${color}`}>{children}</button>;
};
