import React from "react";
import { TypographyProps, TypographyVariants } from "./Typography.d";
import { StyledTypography } from "./Typography.styles";

const variantMapping: {
  [key in TypographyVariants]: React.ElementType;
} = {
  body1: "p",
  body2: "p",
  caption: "span",
  label: "label",
};

function Typography({ variant = "body1", ...props }: TypographyProps): React.ReactElement {
  const asTag = variantMapping[variant as TypographyVariants];
  return <StyledTypography as={asTag} variant={variant} {...props} />;
}

Typography.defaultProps = {
  children: "Title",
};

export { Typography };
