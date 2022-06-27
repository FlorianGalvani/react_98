/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import styled from "styled-components";
import { WindowType } from "../../../types/windows_service";
import { useAppSelector } from "../../../hooks/store";
import Window from "./Window";
const WindowSystem: React.FC = () => {
  const windows = useAppSelector((state) => state.windowsServiceSlice.windows);

  return (
    <Container>
      {windows.map((window: WindowType, i: number) => (
        <Window title={window.name} id={window.id} key={i} />
      ))}
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  height: 95%;
  position: fixed;
  color: ${(props) => props.theme.colors.text.light};
`;

export default WindowSystem;
