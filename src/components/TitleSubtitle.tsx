import React from 'react';
import TextX from '~components/TextX';
import ViewX from '~components/ViewX';
import {TitleSubtitleProps} from '~types/component.types';

const TitleSubtitle: React.FC<TitleSubtitleProps> = ({
  title,
  subTitle,
  titleFontSize = 'sm',
  subtitleFontSize = 'xs',
  titleFontWeight = 'semibold',
  subTitleFontWeight = 'medium',
  numberOfLines = 1,
}) => {
  return (
    <ViewX>
      <TextX
        fontSize={titleFontSize}
        textConfig={{ellipsizeMode: 'tail', numberOfLines: numberOfLines}}
        fontWeight={titleFontWeight}
        color="primary">
        {title}
      </TextX>
      <TextX
        fontSize={subtitleFontSize}
        textConfig={{ellipsizeMode: 'tail', numberOfLines: numberOfLines}}
        fontWeight={subTitleFontWeight}>
        {subTitle}
      </TextX>
    </ViewX>
  );
};

export default TitleSubtitle;
