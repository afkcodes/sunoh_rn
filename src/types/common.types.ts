type ExtraSmallSize = '3xs' | '2xs';
type BaseSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type ExtraLargeSize = '2xl' | '3xl' | '4xl';
type ImageXtraLarge = '5xl' | '6xl';

export type Spacing = ExtraSmallSize | BaseSize | ExtraLargeSize | 'scroll' | 'none';
export type Radius = BaseSize | ExtraLargeSize | ImageXtraLarge | 'full' | 'none';
export type FontSize = ExtraSmallSize | BaseSize | ExtraLargeSize | 'base';
export type FontWeight = 'normal' | 'medium' | 'semibold' | 'bold';
export type Position = 'left' | 'right' | 'top' | 'bottom';

export type TrackType = 'hls' | 'default';

export interface Response {
  message: string;
  data: any;
  code: number;
  error: string;
}

export type TileSize =
  | ExtraSmallSize
  | BaseSize
  | ExtraLargeSize
  | 'free'
  | '2.5xs'
  | ImageXtraLarge;
export type ImageSize =
  | ExtraSmallSize
  | BaseSize
  | ExtraLargeSize
  | 'free'
  | '2.5xs'
  | ImageXtraLarge;
export type Shape = 'default' | 'rounded_square' | 'circle';
export type FitStrategy = 'default' | 'fill' | 'contain' | 'cover' | 'scale_down';

export type ArrangeMode = 'single' | 'multi';
export type LineCount = 1 | 2 | 3 | 4;
export type Theme = 'dark' | 'light';
export type Color = 'primary' | 'secondary' | 'accent';
export type FontFamilyWeight = 'regular' | 'medium' | 'semibold' | 'bold';
export type Orientation = 'vertical' | 'horizontal';

export type ButtonColors = Color | 'primary' | 'secondary' | 'outline' | 'warning' | 'danger';

export interface Response {
  message: string;
  data: any;
  code: number;
  error: string;
}
