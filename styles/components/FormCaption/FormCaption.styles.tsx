import styled, { css } from "styled-components";
import { FormCaptionProps } from "./FormCaption.d";
import { Typography } from "../Typography";

const VariantErrorFormCaption = css`
  color: red;
`;

const StyledFormCaption = styled(Typography)<FormCaptionProps>`
  display: block;
  color: ${({ theme }) => theme.grayscale.gray3};
  ${({ state }) => state === "error" && VariantErrorFormCaption}
`;

export { StyledFormCaption };
