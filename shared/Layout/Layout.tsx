import React from "react";
import { GlobalStyles, ThemeProvider, THEMES } from "../../styles";
import { LayoutProps } from "./Layout.types";
import * as Styled from "./Layout.styles";
import { SidebarMenu } from "../SideBarMenu";

const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider theme={THEMES.colors}>
      <GlobalStyles theme={THEMES.colors} />
      <Styled.Root>
        <Styled.Container>
          <SidebarMenu />
          <Styled.MainContent>{children}</Styled.MainContent>
        </Styled.Container>
      </Styled.Root>
    </ThemeProvider>
  );
};

export { Layout };
