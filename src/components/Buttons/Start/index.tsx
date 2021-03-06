import styled from "styled-components";
import { useAppSelector, useAppDispatch } from "../../../hooks/store";
import { toggleVisibility } from "../../../features/start_menu/startMenuSlice";
const StartButton: React.FC = () => {
  const isOpen = useAppSelector((state) => state.startMenuSlice.isOpen);
  const dispatch = useAppDispatch();

  return (
    <Container open={isOpen} onClick={() => dispatch(toggleVisibility(!isOpen))}>
      <img src="/w98_Startup_logo.png" width={21} height={21}></img>
      <p>Démarrer</p>
    </Container>
  );
};

const Container = styled.button<{ open: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: ${(p) => (p.open ? "1px solid #575757" : "1px solid #fff")};
  border-right: ${(p) => (p.open ? "1px solid #fff" : "1px solid #575757")};
  border-bottom: ${(p) => (p.open ? "1px solid #fff" : "1px solid #575757")};
  border-left: ${(p) => (p.open ? "1px solid #575757" : "1px solid #fff")};
  box-shadow: ${(p) => (p.open ? "inset 1px 1px 0 #000" : "1px 1px 0 #000")};
  padding: 0px 6px;
  background-color: ${(props) => props.theme.colors.layout.elements};
  img {
    user-select: none;
  }
  p {
    font-family: "Win98";
    margin-left: 4px;
    font-size: ${(props) => props.theme.font.size.normal};
    user-select: none;
  }
`;

export default StartButton;
