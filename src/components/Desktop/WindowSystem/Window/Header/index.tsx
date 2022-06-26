import React from "react";
import styled from "styled-components";
import { useAppDispatch } from "../../../../../hooks/store";
import { removeWindow } from "../../../../../features/windows_service/windowsServiceSlice";

interface Props {
  title: string;
  id: string;
}
const defaultProps: Props = {
  title: "",
  id: ""
};
const Header: React.FC<Props> = (props: Props) => {
  const dispatch = useAppDispatch();
  const closeWindow = (id: string) => {
    dispatch(removeWindow(id));
  };
  return (
    <Container>
      <WindowHeaderLeft>
        <p>{props.title}</p>
      </WindowHeaderLeft>
      <WindowHeaderRight>
        <Buttons>
          <Button>_</Button>
          <Button>-</Button>
          <Button onClick={() => closeWindow(props.id)}>x</Button>
        </Buttons>
      </WindowHeaderRight>
    </Container>
  );
};
Header.defaultProps = defaultProps;

const Container = styled.div`
  background-color: #100787;
  display: flex;
  justify-content: space-between;
`;
const WindowHeaderLeft = styled.div``;
const WindowHeaderRight = styled.div``;
const Buttons = styled.div``;
const Button = styled.button``;
export default Header;
