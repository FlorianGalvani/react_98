import Image from "components/Image";
import styled from "styled-components";
interface Props {
  title: string;
  icon: string;
  isFocused: boolean;
}
const Element: React.FC<Props> = ({ title, icon, isFocused }: Props) => {
  return (
    <Container isFocused={isFocused}>
      <Image src={icon} width={15} height={15} alt="" />
      <Title>{title}</Title>
    </Container>
  );
};
const Container = styled.div<{ isFocused: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-top: ${({ isFocused }) => (isFocused ? "1px solid #575757" : "1px solid #fff")};
  border-right: ${({ isFocused }) => (isFocused ? "1px solid #fff" : "1px solid #575757")};
  border-bottom: ${({ isFocused }) => (isFocused ? "1px solid #fff" : "1px solid #575757")};
  border-left: ${({ isFocused }) => (isFocused ? "1px solid #575757" : "1px solid #fff")};
  box-shadow: ${({ isFocused }) => (isFocused ? "inset 1px 1px 0 #000" : "1px 1px 0 #000")};
  padding: 0px 6px;
  background-color: ${({ theme }) => theme.colors.layout.elements};
  &:not(:first-child) {
    margin-left: 5px;
  }
`;
const Title = styled.span`
  font-size: ${({ theme }) => theme.font.size.tiny};
  user-select: none;
  margin-left: 10px;
`;
export default Element;
