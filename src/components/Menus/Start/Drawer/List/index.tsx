import styled from "styled-components";
import Element from "./Element";
const List: React.FC = () => {
  return (
    <Container>
      <Element iconUrl="./computer_explorer-3.png" title="Lorem Ipsum"></Element>
      <Element iconUrl="./computer_explorer-3.png" title="Lorem Ipsum"></Element>
      <Element iconUrl="./computer_explorer-3.png" title="Lorem Ipsum"></Element>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export default List;
