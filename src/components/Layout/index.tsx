import Taskbar from "../Taskbar";

import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <Container>
      {children}

      <Taskbar />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
`;

export default Layout;
