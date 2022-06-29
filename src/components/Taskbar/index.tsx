import StartButton from "components/Buttons/Start";
import styled from "styled-components";
import List from "./List";
import Separator from "./Separator";
import Widget from "./Widget";
const Taskbar: React.FC = () => {
  return (
    <Container>
      <StartButton />
      <Separator />
      <List />
      <Separator />
      <Widget />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  background-color: ${({ theme }) => theme.colors.layout.elements};
  padding: 3px 2px;
  border-top: 1px solid #fff;
`;
export default Taskbar;
