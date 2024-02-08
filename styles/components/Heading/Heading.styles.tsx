import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { HeadingProps, HeadingType } from "./Heading.d";

const H1 = css`
  font-weight: 700;
  font-size: 48px;
`;

const H2 = css`
  font-weight: 500;
  font-size: 40px;
`;

const H3 = css`
  font-weight: 400;
  font-size: 32px;
`;

const H4 = css`
  font-weight: 700;
  font-size: 24px;
`;

const H5 = css`
  font-weight: 500;
  font-size: 20px;
`;

const H6 = css`
  font-weight: 400;
  font-size: 16px;
`;

const levels: Record<HeadingType, FlattenSimpleInterpolation> = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
};

const StyledHeading = styled.h1<HeadingProps>`
  font-family: Sailec;
  font-style: normal;
  margin: 0px;
  ${({ level }) => levels[level || "h1"]};
`;

export { StyledHeading };
