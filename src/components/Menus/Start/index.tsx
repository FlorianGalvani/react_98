/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../../features/start_menu/startMenuSlice";
import styled from "styled-components";
import List from "./List/index";
import Element from "./List/Element";
import Separator from "./List/Separator";

const StartMenu: React.FC = () => {
  const isOpen = useSelector((state: any) => state.startMenuSlice.isOpen);
  const dispatch = useDispatch();

  return (
    <Container open={isOpen}>
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
  width: 15%;
  bottom: 0px;
  z-index: 99;
  user-select: none;
`;
const Menu = styled.div`
  height: 70vh;
  background-color: #818181;
  display: flex;
  border-top: solid 1px #fff;
  border-right: solid 1px #000;
  border-bottom: solid 1px #000;
  border-left: solid 2px #fff;
`;
const Left = styled.div`
  display: flex;
  flex-direction: row-reverse;
  background: rgb(16, 7, 135);
  background: linear-gradient(0deg, rgba(16, 7, 135, 1) 7%, rgba(0, 0, 0, 1) 73%);
  writing-mode: vertical-lr;
  text-orientation: mixed;
  color: #fff;
  font-size: 32px;
  span {
    margin-top: 6px;
    margin-bottom: 2px;
    font-weight: 700;
  }
  p {
    transform: rotateZ(180deg);
  }
`;
const Right = styled.div`
  flex: 1;
  padding: 0 4px;
`;
export default StartMenu;
