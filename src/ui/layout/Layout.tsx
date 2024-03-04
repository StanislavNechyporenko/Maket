import { FC, PropsWithChildren } from 'react';
import logo from '../../assets/icons/logo.png';
import './Layout.scss';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="layout" style={{ backgroundImage: `url(${logo})` }}>
      {children}
    </div>
  );
};