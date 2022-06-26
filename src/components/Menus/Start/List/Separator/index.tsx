import styled from "styled-components";

const Separator: React.FC = () => {
  return <Container></Container>;
};

const Container = styled.div`
  height: 1px;
  background-color: #2a2a2a;
  border-bottom: 1px solid #fff;
  margin: 2px 8px 4px 8px;
`;

export default Separator;
