import React from "react";

interface FormLabelProps extends React.ComponentPropsWithoutRef<"label"> {
  children?: string;
  state?: string;
  htmlFor?: string;
}

export { FormLabelProps };
