import styled from "styled-components";
import { useAppDispatch } from "hooks/store/index";
import { addWindow } from "features/windows_service/windowsServiceSlice";
import { WindowType } from "types/windows_service/index";
interface Props {
  title: string;
  thumbnail: string;
  selected: boolean;
}
const defaultProps: Props = {
  title: "Lorem Ipsum",
  thumbnail: "help_question_mark-0.png",
  selected: false
};
function makeid(length: number) {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
const Shortcut: React.FC<Props> = (props: Props) => {
  const dispatch = useAppDispatch();
  const openWindow = () => {
    const windowData: WindowType = {
      id: makeid(7),
      title: props.title,
      isFocused: true
    };
    dispatch(addWindow(windowData));
  };
  return (
    <Container onClick={() => openWindow()}>
      <Image width={32} height={32} src={"./" + props.thumbnail} alt="" />
      <Title>{props.title}</Title>
    </Container>
  );
};

const Container = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  cursor: pointer;
`;
const Image = styled.img``;
const Title = styled.p`
  margin-top: 8px;
  color: ${(props) => props.theme.colors.text.light};
  font-size: ${(props) => props.theme.font.size.normal};
`;
Shortcut.defaultProps = defaultProps;

export default Shortcut;
