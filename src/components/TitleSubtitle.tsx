import React from 'react';
import { FlexAlignType } from 'react-native';
import TextX from '~components/TextX';
import ViewX from '~components/ViewX';
import { alignment } from '~styles/base';
import { TitleSubtitleProps } from '~types/component.types';

const TitleSubtitle: React.FC<TitleSubtitleProps> = ({
  title,
  subTitle,
  titleFontSize = 'sm',
  subtitleFontSize = 'xs',
  titleFontWeight = 'semibold',
  subTitleFontWeight = 'medium',
  numberOfLines = 1,
  align = 'left'
}) => {
  return (
    <ViewX display='flex' flexDirection='column' alignItems={alignment[align] as FlexAlignType}>
      <TextX
        fontSize={titleFontSize}
        textConfig={{ ellipsizeMode: 'tail', numberOfLines: numberOfLines }}
        fontWeight={titleFontWeight}
        color='primary'
      >
        {title}
      </TextX>
      <TextX
        fontSize={subtitleFontSize}
        textConfig={{ ellipsizeMode: 'tail', numberOfLines: numberOfLines }}
        fontWeight={subTitleFontWeight}
        color='secondary'
      >
        {subTitle}
      </TextX>
    </ViewX>
  );
};

export default TitleSubtitle;
