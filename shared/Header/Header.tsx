import React from "react";
import { NavigationComponent } from "./components/Navigation";
import * as Styled from "./Header.styles";

const Header: React.FC = () => {
  const logoSrc =
    "https://www.integra-salud.mx/Plantilla/wp-content/uploads/2021/01/color_horiz.png";

  return (
    <Styled.HeaderContainer>
      <Styled.HeaderSection>
        <Styled.LogoLink href="/">
          <Styled.Logo src={logoSrc} alt="Logo" />
        </Styled.LogoLink>
        <NavigationComponent />
      </Styled.HeaderSection>
    </Styled.HeaderContainer>
  );
};

export { Header };
