import styled from "styled-components";
import { useAppSelector, useAppDispatch } from "hooks/store";
import { toggleVisibility } from "features/start_menu/startMenuSlice";
import Image from "components/Image/index";

const StartButton: React.FC = () => {
  const isOpen = useAppSelector((state) => state.startMenuSlice.isOpen);
  const dispatch = useAppDispatch();

  return (
    <Container open={isOpen} onClick={() => dispatch(toggleVisibility(!isOpen))}>
      <Logo
        src="/w98_Startup_logo.png"
        alt="Windows 98 start menu button logo"
        width={16}
        height={16}
      />
      <span>Start</span>
    </Container>
  );
};

const Container = styled.button<{ open: boolean }>`
  display: flex;
  align-items: center;
  border-top: ${({ open }) => (open ? "1px solid #575757" : "1px solid #fff")};
  border-right: ${({ open }) => (open ? "1px solid #fff" : "1px solid #575757")};
  border-bottom: ${({ open }) => (open ? "1px solid #fff" : "1px solid #575757")};
  border-left: ${({ open }) => (open ? "1px solid #575757" : "1px solid #fff")};
  box-shadow: ${({ open }) => (open ? "inset 1px 1px 0 #000" : "1px 1px 0 #000")};
  padding: 0px 3px;
  background-color: ${({ theme }) => theme.colors.layout.elements};

  span {
    margin-left: 4px;
    font-size: ${({ theme }) => theme.font.size.normal};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    user-select: none;
    vertical-align: center;
  }
`;
const Logo = styled(Image)``;
export default StartButton;
