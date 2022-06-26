import Taskbar from "../Taskbar";

import "./style.css";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <div className="layout">
      {children}

      <Taskbar />
    </div>
  );
};

export default Layout;
