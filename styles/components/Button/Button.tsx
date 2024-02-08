import { ButtonProps } from "./Button.d";
import { StyledButton, StyledSpinner } from "./Button.styles";

function Button({
  outline,
  disabled,
  full,
  children,
  loading,
  ...props
}: ButtonProps): React.ReactElement {
  const isDisabled = disabled || loading;

  return (
    <StyledButton outline={outline} disabled={isDisabled} {...props} role="button" full={full}>
      {!loading && children}
      {loading && <StyledSpinner />}
    </StyledButton>
  );
}

export { Button };
