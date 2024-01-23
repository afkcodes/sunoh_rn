import { AnimatableNumericValue, DimensionValue } from "react-native";
import { ImageSize, Shape } from "~types/common.types";

const imageSize: {
  [key in ImageSize]: { height: DimensionValue; width: DimensionValue };
} = {
  "3xs": {
    height: 32,
    width: 32,
  },
  "2.5xs": {
    height: 40,
    width: 40,
  },
  "2xs": {
    height: 48,
    width: 48,
  },
  xs: {
    height: 64,
    width: 64,
  },
  sm: {
    height: 80,
    width: 80,
  },
  md: {
    height: 96,
    width: 96,
  },
  lg: {
    height: 112,
    width: 112,
  },
  xl: {
    height: 128,
    width: 128,
  },
  "2xl": {
    height: 144,
    width: 144,
  },
  "3xl": {
    height: 160,
    width: 160,
  },
  "4xl": {
    height: 176,
    width: 176,
  },
  "5xl": {
    height: 256,
    width: 256,
  },
  "6xl": {
    height: 288,
    width: 28,
  },
  free: {
    height: "100%",
    width: "100%",
  },
};

const imageShape: {
  [key in Shape]: AnimatableNumericValue;
} = {
  default: 0,
  rounded_square: 4,
  circle: 100,
};

export { imageShape, imageSize };
