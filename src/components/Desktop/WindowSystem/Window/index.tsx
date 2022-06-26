import React from "react";
import styled from "styled-components";
import { useDrag } from "react-use-gesture";
import Header from "./Header";
interface Props {
  key?: number;
  title: string;
  id: string;
}
const defaultProps: Props = {
  title: "",
  id: ""
};
const Window: React.FC<Props> = (props: Props) => {
  const [windowPos, setWindowPos] = React.useState({ x: 100, y: 20 });
  const bindWindowPos = useDrag((params) => {
    setWindowPos({ x: params.offset[0], y: params.offset[1] });
  });
  return (
    <Container {...bindWindowPos()} style={{ top: windowPos.y, left: windowPos.x }}>
      <Header title={props.title} id={props.id} />
    </Container>
  );
};
const Container = styled.div`
  position: absolute;
  top: 0;
  background-color: #818181;
  width: 40%;
  border-top: solid 1px #fff;
  border-right: solid 1px #000;
  border-bottom: solid 1px #000;
  border-left: solid 2px #fff;
`;

Window.defaultProps = defaultProps;
export default Window;
