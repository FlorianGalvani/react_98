import styled from "styled-components";
import Image from "components/Image";
const About: React.FC = () => {
  return (
    <Container>
      <Me width={200} height={200} alt={"me"} src={"https://robohash.org/uyfkkfyukfuytdtyj.png"} />
      <p>Florian Galvani</p>
      <p>Developpeur Web</p>
      <p>React,PHP,Angular...</p>
    </Container>
  );
};
const Container = styled.div``;
const Me = styled(Image)`
  background-color: red;
`;
export default About;
