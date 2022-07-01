import styled from "styled-components";
import Shortcut from "./Shortcut";

const Shortcuts: React.FC = () => {
  return (
    <Container>
      <Shortcut
        selected={false}
        title="A propos"
        name="about"
        thumbnail="help_question_mark-0.png"
      />
      <Shortcut
        selected={true}
        title="Portfolio"
        name="portfolio"
        thumbnail="directory_open_file_mydocs_2k-2.png"
      />
      <Shortcut
        selected={false}
        title="Contact"
        name="contact"
        thumbnail="computer_explorer-3.png"
      />
      <Shortcut
        selected={false}
        title="Internet"
        name="navigator"
        thumbnail="connected_world-0.png"
      />
      <Shortcut
        selected={false}
        title="A propos"
        name="about"
        thumbnail="computer_explorer-3.png"
      />
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
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 60%;
  }
`;

export default Shortcuts;
