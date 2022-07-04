import { ReactNode } from 'react';
import './Sidebar.css';


type SidebarProps = {
  children: ReactNode | ReactNode[];
};

const Sidebar = ({ children }: SidebarProps) => {
  return (
    <aside className="Sidebar">
      {children}
    </aside>
  );
};

export default Sidebar;
