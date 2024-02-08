import React from "react";
import { SVGIconProps } from "../types";

const SvgComponent = (props: SVGIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={11}
    height={13}
    fill="none"
    viewBox="0 0 11 13"
    {...props}
  >
    <path
      fill="#333"
      d="M5.59.213c-.37 0-.622.26-.622.622v8.34l.048 1.394-1.853-2.044-1.47-1.456a.631.631 0 0 0-.444-.17.591.591 0 0 0-.602.608c0 .164.062.314.199.451l4.279 4.286c.13.137.294.212.465.212.17 0 .335-.075.465-.212l4.279-4.286a.619.619 0 0 0 .198-.451.591.591 0 0 0-.601-.609.631.631 0 0 0-.445.171L8.01 8.525l-1.846 2.037.048-1.387V.835A.6.6 0 0 0 5.59.213Z"
    />
  </svg>
);

export default SvgComponent;
