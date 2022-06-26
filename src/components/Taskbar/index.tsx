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
  background-color: #818181;
  padding: 3px 2px;
  border-top: 1px solid #fff;
`;
export default Taskbar;
