import React from "react";
import styled from "styled-components";
const Widget: React.FC = () => {
  const [time, setTime] = React.useState<string>(
    new Date().toLocaleString("fr-FR", { timeZone: "UTC" })
  );

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <Container>
      <Text>{time}</Text>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 6px;
  border-top: 1px solid #575757;
  border-right: 1px solid #fff;
  border-bottom: 1px solid #fff;
  border-left: 1px solid #575757;
`;
const Text = styled.span`
  font-size: ${(props) => props.theme.font.size.normal};
`;
export default Widget;
