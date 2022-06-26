import styled from "styled-components";
import { useAppSelector, useAppDispatch } from "../../../hooks/store";
import { toggleVisibility } from "../../../features/start_menu/startMenuSlice";
const StartButton: React.FC = () => {
  const isOpen = useAppSelector((state) => state.startMenuSlice.isOpen);
  const dispatch = useAppDispatch();

  return (
    <Button open={isOpen} onClick={() => dispatch(toggleVisibility(!isOpen))}>
      <img src="/w98_Startup_logo.png" width={16} height={16}></img>
      <p>Démarrer</p>
    </Button>
  );
};

const Button = styled.button<{ open: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: ${(p) => (p.open ? "1px solid #575757" : "1px solid #fff")};
  border-right: ${(p) => (p.open ? "1px solid #fff" : "1px solid #575757")};
  border-bottom: ${(p) => (p.open ? "1px solid #fff" : "1px solid #575757")};
  border-left: ${(p) => (p.open ? "1px solid #575757" : "1px solid #fff")};
  box-shadow: ${(p) => (p.open ? "inset 1px 1px 0 #000" : "1px 1px 0 #000")};
  padding: 0px 4px;
  background-color: #818181;
  img {
    user-select: none;
  }
  p {
    margin-left: 4px;
    font-size: 15px;
    user-select: none;
    font-family: "Win98";
  }
`;

export default StartButton;
