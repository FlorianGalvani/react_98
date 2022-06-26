/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../../features/start_menu/startMenuSlice";
import styled from "styled-components";

const StartMenu: React.FC = () => {
  const isOpen = useSelector((state: any) => state.startMenuSlice.isOpen);
  const dispatch = useDispatch();

  return (
    <Container>
      <Menu>
        <p>Start menu</p>
      </Menu>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  width: 20%;
  bottom: 0;
  padding-top: 120px;
  height: 70%;
`;
const Menu = styled.div`
  height: 100%;
  background-color: #818181;
`;

export default StartMenu;
