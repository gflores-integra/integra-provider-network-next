import React, { FC } from "react";

import * as Styled from "./Board.styles";

const Board: FC = () => {
  return (
    <Styled.Container>
      <Styled.NavLink href="/board/create-network">
        Crear nueva red
      </Styled.NavLink>
    </Styled.Container>
  );
};

export { Board };
