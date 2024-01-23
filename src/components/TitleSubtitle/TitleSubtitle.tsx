import React from 'react';
import TextX from '~components/Textx';
import {FontFamilyWeight, FontSize, LineCount} from '~types/common.types';

interface TitleSubtitleType {
  title: string;
  subTitle: string;
  titleFontSize?: FontSize;
  subtitleFontSize?: FontSize;
  titleFontWeight?: FontFamilyWeight;
  subTitleFontWeight?: FontFamilyWeight;
  numberOfLines: LineCount;
}

const TitleSubtitle: React.FC<TitleSubtitleType> = ({
  title,
  subTitle,
  titleFontSize = 'sm',
  subtitleFontSize = 'xs',
  titleFontWeight = 'semibold',
  subTitleFontWeight = 'medium',
  numberOfLines = 1,
}) => {
  return (
    <>
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
    </>
  );
};

export default TitleSubtitle;
