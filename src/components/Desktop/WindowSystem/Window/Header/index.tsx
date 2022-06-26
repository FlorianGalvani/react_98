import React from "react";
import styled from "styled-components";
import { useAppDispatch } from "hooks/store";
import { removeWindow } from "features/windows_service/windowsServiceSlice";

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
          <ButtonClose onClick={() => closeWindow(props.id)}>
            <img src="close-icon.png" alt="" />
          </ButtonClose>
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
  padding: 4px 5px;
`;
const WindowHeaderLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-family: "Win98";
    user-select: none;
    font-size: 16px;
  }
`;
const WindowHeaderRight = styled.div``;
const Buttons = styled.div`
  display: flex;
  height: 100%;
`;
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  font-size: 5px;
  background-color: #818181;
  border-left: 2px solid #ededed;
  border-top: 2px solid #ededed;
  border-right: 2px solid #404040;
  border-bottom: 2px solid #404040;
  cursor: pointer;
  user-select: none;
  font-family: "Win98";
`;
const ButtonClose = styled(Button)`
  margin-left: 2px;
`;
export default Header;
