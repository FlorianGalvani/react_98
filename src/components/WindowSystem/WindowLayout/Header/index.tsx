import React from "react";
import styled from "styled-components";
import { useAppDispatch } from "hooks/store";
import { removeWindow } from "features/windows_service/windowsServiceSlice";
import IconButton from "components/Buttons/Icon/index";

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
      <ButtonContainer>
        <ReduceButton src="reduce.png" alt="Reduce button" width={8} height={2} />
        <IconButton src="size.png" alt="Size button" width={12} height={12} />
        <ButtonClose
          src="close.png"
          alt="Close button"
          width={10}
          height={10}
          onClick={() => closeWindow(props.id)}
        />
      </ButtonContainer>
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

const ButtonContainer = styled.div`
  display: flex;
  height: 100%;
`;
const ReduceButton = styled(IconButton)`
  background-color: red;
`;
const ButtonClose = styled(IconButton)`
  margin-left: 4px;
`;

export default Header;
