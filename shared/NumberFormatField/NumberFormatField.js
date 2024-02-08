import React from "react";
import NumberFormat from "react-number-format";
import { StyledInputText } from "./NumberFormatField.styles";

function NumberFormatField(props) {
  return <NumberFormat customInput={StyledInputText} {...props} />;
}

export { NumberFormatField };
