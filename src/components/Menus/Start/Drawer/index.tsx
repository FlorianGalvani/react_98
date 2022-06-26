import styled from "styled-components";
import List from "./List";
const Drawer: React.FC = () => {
  return (
    <Container>
      <List></List>
    </Container>
  );
};
const Container = styled.div`
  position: absolute;
  right: -100%;
  top: -1px;
  width: 100%;
  background-color: #818181;
  border-top: solid 1px #fff;
  border-right: solid 1px #000;
  border-bottom: solid 1px #000;
  /* border-left: solid 2px #fff; */
`;
export default Drawer;
