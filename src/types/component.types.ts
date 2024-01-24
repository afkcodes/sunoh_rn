import {ImageContentFit, ImageContentPosition} from 'expo-image';
import {PressableProps, TextProps} from 'react-native';
import {
  Color,
  FontFamilyWeight,
  FontSize,
  ImageSize,
  LineCount,
  Shape,
} from './common.types';

export interface ImageProps {
  src: string;
  alt: string;
  size: ImageSize;
  onLoad?: () => void;
  onError?: () => void;
  fit?: ImageContentFit;
  position?: ImageContentPosition;
  shape: Shape;
}

export interface TitleSubtitleProps {
  title: string;
  subTitle: string;
  titleFontSize?: FontSize;
  subtitleFontSize?: FontSize;
  titleFontWeight?: FontFamilyWeight;
  subTitleFontWeight?: FontFamilyWeight;
  numberOfLines: LineCount;
}

export interface TextXProps {
  children: React.ReactNode | undefined;
  color?: Color;
  fontWeight?: FontFamilyWeight;
  textConfig?: TextProps;
  fontSize?: FontSize;
}

export interface PressableXProps {
  children: React.ReactNode;
  bgColor: Color;
  pressableConfig: PressableProps;
}
