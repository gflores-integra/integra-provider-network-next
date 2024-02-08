import { FormCaptionProps } from "./FormCaption.d";
import { StyledFormCaption } from "./FormCaption.styles";

function FormCaption({ children, ...props }: FormCaptionProps): React.ReactElement {
  return (
    <StyledFormCaption role="FormCaption" variant="caption" {...props}>
      {children}
    </StyledFormCaption>
  );
}

export { FormCaption };
