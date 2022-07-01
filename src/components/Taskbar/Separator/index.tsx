import styled from "styled-components";
const Separator: React.FC = () => {
  return <Container></Container>;
};
const Container = styled.div`
  width: 1px;
  background-color: ${({ theme }) => theme.colors.layout.separator};
  border-right: 1px solid ${({ theme }) => theme.colors.border.light};
  margin: 1px 4px 1px 4px;
`;
export default Separator;
