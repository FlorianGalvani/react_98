/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import styled from "styled-components";
import { WindowType } from "types/windows_service";
import { useAppSelector } from "hooks/store";
import Window from "./Window";
const WindowSystem: React.FC = () => {
  const windows = useAppSelector((state) => state.windowsServiceSlice.windows);

  return (
    <Container>
      {windows.map((window: WindowType, i: number) => (
        <Window title={window.title} id={window.id} key={i} />
      ))}
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  height: 96%;
  position: fixed;
  top: 0;
  z-index: 1;
  color: ${({ theme }) => theme.colors.text.light};
  user-select: none;
  pointer-events: none;
`;

export default WindowSystem;
