interface GrayScale {
  black: string;
  gray1: string;
  gray2: string;
  gray3: string;
  gray4: string;
  gray5: string;
  gray6: string;
  gray7: string;
  white: string;
}

interface GreenScale {
  green10: string;
  green20: string;
  green30: string;
  green40: string;
  green50: string;
  green60: string;
  green70: string;
  green80: string;
  green90: string;
}

interface BlueScale {
  blue10: string;
  blue20: string;
  blue30: string;
  blue40: string;
  blue50: string;
  blue60: string;
  blue70: string;
  blue80: string;
  blue90: string;
}

interface Theme
  extends YellowScale,
    RedScale,
    BlueScale,
    GreenScale,
    CreamScale {
  grayscale: GrayScale;
}

interface Color {
  theme: Theme;
  name?: string;
}

export { Theme, Color };
