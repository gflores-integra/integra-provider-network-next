import React from "react";
import { SVGIconProps } from "../types";

const SvgComponent = (props: SVGIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    {...props}
  >
    <g clip-path="url(#clip0_2515_16749)">
      <path
        d="M7.33398 7.33398V3.33398H8.66732V7.33398H12.6673V8.66732H8.66732V12.6673H7.33398V8.66732H3.33398V7.33398H7.33398Z"
        fill="#2D2D2D"
      />
    </g>
    <defs>
      <clipPath id="clip0_2515_16749">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgComponent;
