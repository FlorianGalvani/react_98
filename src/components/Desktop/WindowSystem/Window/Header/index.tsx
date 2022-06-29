import React from "react";
import styled from "styled-components";
import { useAppDispatch } from "hooks/store";
import { removeWindow } from "features/windows_service/windowsServiceSlice";
import Image from "components/Image";

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
        <WindowTitle>{props.title}</WindowTitle>
      </WindowHeaderLeft>
      <WindowHeaderRight>
        <Buttons>
          <Button>_</Button>
          <Button>-</Button>
          <ButtonClose onClick={() => closeWindow(props.id)}>
            <Image width={10} height={10} src="close-icon.png" alt="" />
          </ButtonClose>
        </Buttons>
      </WindowHeaderRight>
    </Container>
  );
};
Header.defaultProps = defaultProps;

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.layout.accent};
  display: flex;
  justify-content: space-between;
  padding: 4px 5px;
`;
const WindowHeaderLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const WindowTitle = styled.div`
  user-select: none;
  font-size: ${({ theme }) => theme.font.size.normal};
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
  font-size: ${({ theme }) => theme.font.size.buttonIcon};
  background-color: ${({ theme }) => theme.colors.layout.elements};
  border-left: 2px solid #ededed;
  border-top: 2px solid #ededed;
  border-right: 2px solid #404040;
  border-bottom: 2px solid #404040;
  cursor: pointer;
  user-select: none;
`;
const ButtonClose = styled(Button)`
  margin-left: 2px;
`;
export default Header;
