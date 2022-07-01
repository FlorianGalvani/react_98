import styled from "styled-components";
const Navigator: React.FC = () => {
  return (
    <Container>
      <iframe src="http://localhost:3000/" />
    </Container>
  );
};
const Container = styled.div`
  iframe {
    width: 100%;
    height: 600px;
  }
`;
export default Navigator;
