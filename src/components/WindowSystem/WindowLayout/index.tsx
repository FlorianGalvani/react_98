/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Ref, useEffect } from "react";
import styled from "styled-components";
import { useDrag } from "react-use-gesture";
import Header from "./Header";
import useWindowDimensions from "hooks/useWindowDimensions";
import { getBody } from "components/Windows/index";

interface Props {
  key?: number;
  title: string;
  id: string;
  ref?: any;
  name?: string;
}

const Window: React.FC<Props> = ({ key, title, id, name }: Props) => {
  const { height, width } = useWindowDimensions();
  const [windowPos, setWindowPos] = React.useState({ x: 200, y: 100 });

  const bindWindowPos = useDrag(
    (params) => {
      if (params.offset[0] !== 0 && params.offset[1] !== 0) {
        setWindowPos({ x: params.offset[0], y: params.offset[1] });
      }
    },
    {
      bounds: { left: 0, right: width, top: 0, bottom: height - (height * 29.5) / 100 }
    }
  );

  return (
    <Container {...bindWindowPos()} {...{ style: { top: windowPos.y, left: windowPos.x } }}>
      <Header title={title} id={id} />
      {getBody(name)}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.layout.elements};
  max-width: 100vh;
  border-top: 1px solid #fff;
  border-right: 1px solid #575757;
  border-bottom: 1px solid #575757;
  border-left: 1px solid #fff;
  box-shadow: 1px 1px 0 #000;
  pointer-events: all;
  .react-resizable-handle {
    position: absolute;
    width: 20px;
    height: 20px;
    bottom: 0;
    right: 0;
    background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pg08IS0tIEdlbmVyYXRvcjogQWRvYmUgRmlyZXdvcmtzIENTNiwgRXhwb3J0IFNWRyBFeHRlbnNpb24gYnkgQWFyb24gQmVhbGwgKGh0dHA6Ly9maXJld29ya3MuYWJlYWxsLmNvbSkgLiBWZXJzaW9uOiAwLjYuMSAgLS0+DTwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DTxzdmcgaWQ9IlVudGl0bGVkLVBhZ2UlMjAxIiB2aWV3Qm94PSIwIDAgNiA2IiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmMDAiIHZlcnNpb249IjEuMSINCXhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiDQl4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjZweCIgaGVpZ2h0PSI2cHgiDT4NCTxnIG9wYWNpdHk9IjAuMzAyIj4NCQk8cGF0aCBkPSJNIDYgNiBMIDAgNiBMIDAgNC4yIEwgNCA0LjIgTCA0LjIgNC4yIEwgNC4yIDAgTCA2IDAgTCA2IDYgTCA2IDYgWiIgZmlsbD0iIzAwMDAwMCIvPg0JPC9nPg08L3N2Zz4=");
    background-position: bottom right;
    padding: 0 3px 3px 0;
    background-repeat: no-repeat;
    background-origin: content-box;
    box-sizing: border-box;
    cursor: se-resize;
  }
`;

export default Window;
