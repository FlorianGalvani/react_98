import styled from "styled-components";
const Separator: React.FC = () => {
  return <Container></Container>;
};
const Container = styled.div`
  width: 1px;
  background-color: ${(props) => props.theme.colors.layout.separator};
  border-right: 1px solid ${(props) => props.theme.colors.border.light};
  margin: 2px 4px 4px 4px;
`;
export default Separator;
