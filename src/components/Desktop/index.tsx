import StartMenu from "components/Menus/Start";
import styled from "styled-components";
import WindowSystem from "./WindowSystem";
import Shortcuts from "./Shortcuts";

const Desktop: React.FC = () => {
  return (
    <Container>
      <StartMenu />
      <Shortcuts />
      <WindowSystem />
    </Container>
  );
};
const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.layout.body};
  position: relative;
`;
export default Desktop;
