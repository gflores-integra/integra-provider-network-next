import React from "react";

import * as Styled from "./button-continue.styles";

interface ButtonContinueProps {
  disabled: boolean;
  onClick: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function ButtonContinue({ disabled, onClick }: ButtonContinueProps) {
  return (
    <Styled.ButtonContainer>
      <Styled.Button
        type="button"
        variant="secondary"
        onClick={onClick}
        disabled={disabled}
      >
        Siguiente
      </Styled.Button>
    </Styled.ButtonContainer>
  );
}

export { ButtonContinue };
