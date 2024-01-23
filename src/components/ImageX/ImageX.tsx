import {Image} from 'expo-image';
import React from 'react';
import {ImageProps} from '~types/component.types';
import {imageShape, imageSize} from './ImageX.styles';

const ImageX: React.FC<ImageProps> = ({
  size,
  src,
  alt,
  fit,
  onError,
  onLoad,
  position,
  shape,
}) => {
  const {height, width} = imageSize[size];
  const borderRadius = imageShape[shape];
  return (
    <Image
      style={{height: height, width: width, borderRadius: borderRadius}}
      source={src}
      contentFit={fit}
      transition={300}
      contentPosition={position}
      onLoad={onLoad}
      onError={onError}
      alt={alt}
    />
  );
};

export default ImageX;
