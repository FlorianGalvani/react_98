import styled from "styled-components";
interface Props {
  iconUrl: string;
  title: string;
}
const defaultProps: Props = {
  iconUrl: "",
  title: ""
};
const Element: React.FC<Props> = (props: Props) => {
  return (
    <Container>
      <img src={props.iconUrl} width={24} height={24} alt="" />
      <p className="titlee">{props.title}</p>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  color: ${(props) => props.theme.colors.text.dark};
  &:hover {
    background-color: ${(props) => props.theme.colors.layout.accent};
    .titlee {
      color: ${(props) => props.theme.colors.text.light};
    }
  }
`;

Element.defaultProps = defaultProps;

export default Element;
