import styled from "styled-components";
import Element from "./Element";
import { useAppSelector } from "hooks/store";

const WindowsList: React.FC = () => {
  const windows = useAppSelector((state) => state.windowsServiceSlice.windows);
  return (
    <Container>
      {windows.map((window, i: number) => (
        <Element
          key={i}
          isFocused={window.isFocused}
          title={window.title}
          icon={"./computer_explorer-3.png"}
        />
      ))}
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex: 1;
`;
export default WindowsList;
