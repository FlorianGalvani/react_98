import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const List: React.FC<Props> = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  width: 100%;
`;

export default List;
