import React from "react";

import { HeaderProps } from "./header.types";
import * as Styled from "./header.styles";

function Header({ onBack, show }: HeaderProps) {
  return (
    <Styled.Container show={show}>
      <Styled.ArrowContainer></Styled.ArrowContainer>
      {/* <Styled.Title level="h1">hola</Styled.Title> */}
    </Styled.Container>
  );
}

export { Header };
