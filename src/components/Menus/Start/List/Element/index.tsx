import React from "react";
import styled from "styled-components";
import { AiFillCaretRight } from "react-icons/ai";
import Drawer from "components/Menus/Start/Drawer";

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
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <Container onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <img width={36} height={36} src={props.imgUrl} alt="" />
      <p className="title">{props.title}</p>
      {props.isADrawer ? (
        <>
          {isOpen ? <Drawer /> : ""}
          <DrawerArrow>
            {" "}
            <AiFillCaretRight color="" />
          </DrawerArrow>
        </>
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
    background-color: ${({ theme }) => theme.colors.layout.accent};
    .title,
    svg {
      color: ${({ theme }) => theme.colors.text.light};
    }
  }
  img {
    margin-right: 10px;
  }
  p {
    color: ${({ theme }) => theme.colors.text.dark};
  }
`;

const DrawerArrow = styled.div`
  position: absolute;
  right: 10px;
`;

Element.defaultProps = defaultProps;

export default Element;
