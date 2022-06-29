import styled from "styled-components";
interface Props {
  title: string;
  icon: string;
  isFocused: boolean;
}
const Element: React.FC<Props> = ({ title, icon, isFocused }: Props) => {
  return (
    <Container isFocused={isFocused}>
      <img src={icon} width={15} height={15} alt="" />
      <Title>{title}</Title>
    </Container>
  );
};
const Container = styled.div<{ isFocused: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-top: ${(p) => (p.isFocused ? "1px solid #575757" : "1px solid #fff")};
  border-right: ${(p) => (p.isFocused ? "1px solid #fff" : "1px solid #575757")};
  border-bottom: ${(p) => (p.isFocused ? "1px solid #fff" : "1px solid #575757")};
  border-left: ${(p) => (p.isFocused ? "1px solid #575757" : "1px solid #fff")};
  box-shadow: ${(p) => (p.isFocused ? "inset 1px 1px 0 #000" : "1px 1px 0 #000")};
  padding: 0px 6px;
  background-color: ${(props) => props.theme.colors.layout.elements};
  img {
    user-select: none;
  }
  &:not(:first-child) {
    margin-left: 5px;
  }
`;
const Title = styled.span`
  font-size: ${(props) => props.theme.font.size.tiny};
  user-select: none;
  margin-left: 10px;
`;
export default Element;
