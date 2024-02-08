import styled, { css } from "styled-components";
import { FormLabelProps } from "./FormLabel.d";
import { Typography } from "../Typography";

const VariantErrorFormLabel = css`
  color: ${({ theme }) => theme.red50};
`;

const StyledFormLabel = styled(Typography)<FormLabelProps>`
  display: block;
  color: ${({ theme }) => theme.grayscale.gray3};
  ${({ state }) => state === "error" && VariantErrorFormLabel}
`;

export { StyledFormLabel };
