import styled, { css } from "styled-components";
import { TypographyProps } from "./Typography.d";

const cssCommon = css`
  font-family: Sailec;
  font-style: normal;
  font-weight: normal;
`;

const body1 = css`
  font-size: 16px;
  line-height: 20px;
`;

const body2 = css`
  font-size: 14px;
  line-height: 17px;
`;

const caption = css`
  font-size: 12px;
  line-height: 15px;
`;

const label = css`
  font-size: 12px;
  line-height: 20px;
`;

const StyledTypography = styled.div<TypographyProps>`
  ${cssCommon}
  ${({ variant }) => variant === "body1" && body1};
  ${({ variant }) => variant === "body2" && body2};
  ${({ variant }) => variant === "caption" && caption};
  ${({ variant }) => variant === "label" && label};
`;

export { StyledTypography };
