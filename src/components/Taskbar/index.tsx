import StartButton from "components/Buttons/Start";
import styled from "styled-components";
const Taskbar: React.FC = () => {
  return (
    <Container>
      <StartButton />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  background-color: ${(props) => props.theme.colors.layout.elements};
  padding: 3px 2px;
  border-top: 1px solid #fff;
`;
export default Taskbar;
