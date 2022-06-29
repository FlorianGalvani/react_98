import styled from "styled-components";
import Shortcut from "./Shortcut";

const Shortcuts: React.FC = () => {
  return (
    <Container>
      <Shortcut selected={false} title="A propos" thumbnail="help_question_mark-0.png" />
      <Shortcut selected={true} title="A propos" thumbnail="directory_open_file_mydocs_2k-2.png" />
      <Shortcut selected={false} title="A propos" thumbnail="computer_explorer-3.png" />
      <Shortcut selected={false} title="A propos" thumbnail="computer_explorer-3.png" />
      <Shortcut selected={false} title="A propos" thumbnail="computer_explorer-3.png" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 20%;
  position: fixed;
  top: 0;
  z-index: 1;
  /* background-color: #7c0101; */
`;

export default Shortcuts;
