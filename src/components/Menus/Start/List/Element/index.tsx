import styled from "styled-components";
import { AiFillCaretRight } from "react-icons/ai";
interface Props {
  imgUrl: string;
  title: string;
  isADrawer?: boolean;
}

const defaultProps: Props = {
  imgUrl: "",
  title: "",
  isADrawer: false
};

const Element: React.FC<Props> = (props: Props) => {
  return (
    <Container>
      <img width={36} height={36} src={props.imgUrl} alt="" />
      <p>{props.title}</p>
      {props.isADrawer ? (
        <DrawerArrow>
          {" "}
          <AiFillCaretRight color="" />{" "}
        </DrawerArrow>
      ) : (
        ""
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 4px 5px;
  user-select: none;
  &:hover {
    background-color: rgba(16, 7, 135, 1);
    p,
    svg {
      color: #fff;
    }
  }
  img {
    margin-right: 10px;
  }
  p {
    font-family: "Win98";
    color: #000;
  }
`;
const DrawerArrow = styled.div`
  position: absolute;
  right: 10px;
`;
Element.defaultProps = defaultProps;

export default Element;
