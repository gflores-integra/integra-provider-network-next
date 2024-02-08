import React from "react";
import { HeadingProps } from "./Heading.d";
import { StyledHeading } from "./Heading.styles";

function Heading({ level, children, ...props }: HeadingProps): React.ReactElement {
  return (
    <StyledHeading
      as={level}
      level={level}
      role="heading"
      aria-level={level ? parseInt(level.slice(1)) : 1}
      {...props}
    >
      {children}
    </StyledHeading>
  );
}

export { Heading };
