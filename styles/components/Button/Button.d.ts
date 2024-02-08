import React from "react";

export interface ButtonProps {
  outline?: boolean;
  disabled?: boolean;
  loading?: boolean;
  variant?: string;
  full?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
}
