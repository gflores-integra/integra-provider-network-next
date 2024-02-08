import React from "react";
import dynamic from "next/dynamic";

import { IconOptions } from "./icon.constants";
import type { IconProps } from "./icon.types";

const Icons = {
  [IconOptions.arrow]: dynamic(() => import(`../../shared/arrow`)),
  [IconOptions.apple]: dynamic(() => import(`../../shared/apple`)),
  [IconOptions.dashboard]: dynamic(() => import(`../../shared/dashboard`)),
  [IconOptions.view_cac]: dynamic(() => import(`../../shared/view-cac`)),
  [IconOptions.view_finance]: dynamic(
    () => import(`../../shared/view-finance`)
  ),
  [IconOptions.view_app]: dynamic(() => import(`../../shared/view-app`)),
  [IconOptions.add]: dynamic(() => import(`../../shared/add`)),
  [IconOptions.add_group]: dynamic(() => import(`../../shared/add-group`)),
  [IconOptions.info_icon]: dynamic(() => import(`../../shared/info-icon`)),
  [IconOptions.trash_icon]: dynamic(() => import(`../../shared/trash-icon`)),
};

function Icon({ name, ...otherProps }: IconProps) {
  const IconComponent = Icons[name as IconOptions] || Icons[IconOptions.arrow];

  if (!IconComponent) return <></>;

  return <IconComponent {...otherProps} />;
}

export { Icon };
