declare module "@apollo/client";
declare module "@growthbook/growthbook-react";
declare module "@justomx/avocado-ui";
declare module "analytics";
declare module "react-number-format";
declare module "react-toastify";
declare module "@sentry/browser";
declare module "@sentry/tracing";

declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare interface Window {
  OneTrust: any;
}

declare module "*.svg?svgr";

declare module "react-table";
