import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { Theme } from "../themes.d";

interface ThemeProviderProps {
  children: JSX.Element | JSX.Element[];
  theme: Theme;
}

function ThemeProvider({
  children,
  theme,
}: ThemeProviderProps): React.ReactElement {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
}

export { ThemeProvider };
