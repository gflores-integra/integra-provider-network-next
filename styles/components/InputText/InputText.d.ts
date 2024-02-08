import React from "react";

interface InputTextProps extends React.ComponentPropsWithoutRef<"input"> {
  id?: string;
  value?: string;
  placeholder?: string;
  state?: string;
  disabled?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  outerIconRight?: React.ReactNode;
  label?: string;
  name?: string;
  helpText?: string;
  type?: string;
  borderColor?: string;
  onChange?: () => void;
}

export { InputTextProps };
