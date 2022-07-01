import styled from "styled-components";
import Image from "components/Image";

interface Props {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  onClick?: () => void;
}

const IconButton: React.FC<Props> = ({ src, alt, width, height, onClick }: Props) => {
  return (
    <Container onClick={onClick}>
      <Image src={src} alt={alt} width={width} height={height} />
    </Container>
  );
};

const Container = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  font-size: ${({ theme }) => theme.font.size.buttonIcon};
  background-color: ${({ theme }) => theme.colors.layout.elements};
  border-left: 2px solid ${({ theme }) => theme.colors.layout.elements};
  border-top: 2px solid #ededed;
  border-right: 2px solid #404040;
  border-bottom: 2px solid #404040;
  user-select: all;
  &:last-child {
    margin-left: 4px;
  }
`;

export default IconButton;
