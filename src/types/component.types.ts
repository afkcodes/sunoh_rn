import {ImageContentFit, ImageContentPosition} from 'expo-image';
import {ImageSize, Shape} from './common.types';

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
