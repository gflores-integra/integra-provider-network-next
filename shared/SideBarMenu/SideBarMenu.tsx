import React from "react";
import * as Styled from "./SideBarMenu.styles";
import { Menu } from "./components/Menu";

const SidebarMenu: React.FC = () => {
  const logoSrc =
    "https://www.integra-salud.mx/Plantilla/wp-content/uploads/2021/01/color_horiz.png";

  return (
    <Styled.HeaderContainer>
      <Styled.HeaderSection>
        <Styled.Container>
          <Styled.Navigation>
            <Menu />
          </Styled.Navigation>
        </Styled.Container>{" "}
      </Styled.HeaderSection>
    </Styled.HeaderContainer>
  );
};

export { SidebarMenu };
