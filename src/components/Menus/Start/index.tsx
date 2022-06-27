/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAppSelector, useAppDispatch } from "../../../hooks/store";
import { toggleVisibility } from "../../../features/start_menu/startMenuSlice";
import styled from "styled-components";
import List from "./List/index";
import Element from "./List/Element";
import Separator from "./List/Separator";

const StartMenu: React.FC = () => {
  const isOpen = useAppSelector((state: any) => state.startMenuSlice.isOpen);
  const dispatch = useAppDispatch();

  return (
    <Container open={isOpen}>
      <Backdrop onClick={() => dispatch(toggleVisibility(false))} />
      <Menu>
        <Left>
          <p>
            <span>React</span>98
          </p>
        </Left>
        <Right>
          <List>
            <Element isADrawer={true} imgUrl="./computer_explorer-3.png" title="About" />
            <Separator />
            <Element imgUrl="./shut_down_normal-2.png" title="Shut down" />
          </List>
        </Right>
      </Menu>
    </Container>
  );
};

const Container = styled.div<{ open: boolean }>`
  display: ${(p) => (p.open ? "block" : "none")};
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0px;
  z-index: 99;
  user-select: none;
`;
const Backdrop = styled.div`
  width: 100%;
  height: 100%;
`;
const Menu = styled.div`
  bottom: 0;
  position: absolute;
  width: 15%;
  height: 70vh;
  background-color: ${(props) => props.theme.colors.layout.elements};
  display: flex;
  border-top: solid 1px ${(props) => props.theme.colors.border.light};
  border-right: solid 1px ${(props) => props.theme.colors.border.dark};
  border-bottom: solid 1px ${(props) => props.theme.colors.border.dark};
  border-left: solid 2px ${(props) => props.theme.colors.border.light};
`;
const Left = styled.div`
  display: flex;
  flex-direction: row-reverse;
  background: ${(props) => props.theme.colors.layout.accent};
  background: linear-gradient(
    0deg,
    ${(props) => props.theme.colors.layout.accent} 7%,
    rgba(0, 0, 0, 1) 73%
  );
  writing-mode: vertical-lr;
  text-orientation: mixed;
  color: ${(props) => props.theme.colors.text.light};
  font-size: ${(props) => props.theme.font.size.largeTitle};
  font-family: "Arial";

  p {
    transform: rotateZ(180deg);
    span {
      margin-top: 6px;
      margin-bottom: 4px;
      font-weight: ${(props) => props.theme.font.weight.bold};
    }
  }
`;
const Right = styled.div`
  flex: 1;
`;
export default StartMenu;
