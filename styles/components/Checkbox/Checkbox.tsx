import { StyledLabel, StyledInput, StyledSpan } from "./Checkbox.styles";
import { CheckboxProps } from "./Checkbox.d";
import React from "react";

function Checkbox({
  disabled,
  checked,
  label,
  name,
  id,
  onChange,
  ...props
}: CheckboxProps): React.ReactElement {
  return (
    <StyledLabel disabled={disabled} htmlFor={id} role="checkbox" {...props}>
      <StyledInput
        type="checkbox"
        name={name}
        id={id}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
      />
      <StyledSpan />
      {label}
    </StyledLabel>
  );
}

export { Checkbox };
