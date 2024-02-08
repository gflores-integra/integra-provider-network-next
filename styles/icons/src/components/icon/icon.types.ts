import { SVGAttributes } from "react";

type SVGIconProps = SVGAttributes<SVGSVGElement>;

interface IconProps extends SVGIconProps {
  name: string;
}

export type { IconProps };
