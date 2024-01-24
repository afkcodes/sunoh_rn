import { FontSize, Radius, Spacing } from '~types/common.types';

const fontSizeStyle: { [key in FontSize]: number } = {
  '3xs': 6,
  '2xs': 8,
  xs: 12,
  sm: 14,
  base: 16,
  md: 18,
  lg: 20,
  xl: 22,
  '2xl': 24,
  '3xl': 28,
  '4xl': 32
};

const spacing: { [key in Spacing]: number } = {
  none: 0,
  '2xs': 2,
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  '2xl': 24,
  '3xl': 28,
  '4xl': 32,
  scroll: 100,
  '3xs': 1
};

export const borderRadius: { [key in Radius]: number } = {
  none: 0,
  xs: 2,
  sm: 4,
  md: 6,
  lg: 8,
  xl: 10,
  '2xl': 12,
  '3xl': 14,
  '4xl': 16,
  '5xl': 18,
  '6xl': 24,
  full: 100
};

export { fontSizeStyle, spacing };
