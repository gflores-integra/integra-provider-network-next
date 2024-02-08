import * as React from "react";
import * as Styled from "./Navigation.styles";
import { DesktopMenu } from "./components/DesktopMenu";
import { MobileMenu } from "./components/MobileMenu";

function NavigationComponent() {
  return (
    <Styled.Container>
      <Styled.MobileNavigation>
        <MobileMenu />
      </Styled.MobileNavigation>
      <Styled.Navigation>
        <DesktopMenu />
      </Styled.Navigation>
    </Styled.Container>
  );
}

export { NavigationComponent };
