import { FormLabelProps } from "./FormLabel.d";
import { StyledFormLabel } from "./FormLabel.styles";

function FormLabel({ children, ...props }: FormLabelProps): React.ReactElement {
  return (
    <StyledFormLabel role="FormLabel" variant="label" {...props}>
      {children}
    </StyledFormLabel>
  );
}

export { FormLabel };
