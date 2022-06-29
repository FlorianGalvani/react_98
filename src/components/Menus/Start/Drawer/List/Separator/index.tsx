import styled from "styled-components";

const Separator: React.FC = () => {
  return <Container></Container>;
};

const Container = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.layout.separator};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.light};
  margin: 2px 4px 4px 4px;
`;

export default Separator;
