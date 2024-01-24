import React from 'react';
import {StyleSheet, Text, TextProps, TextStyle} from 'react-native';
import {fontSizeStyle} from '~styles/base';
import {fonts, theme} from '~styles/theme';
import {Color, FontFamilyWeight, FontSize, Theme} from '~types/common.types';

interface TextXProps {
  children: React.ReactNode | undefined;
  color?: Color;
  fontWeight?: FontFamilyWeight;
  textConfig?: TextProps;
  fontSize?: FontSize;
}

const getStyles = (
  currentTheme: Theme = 'dark',
  color: Color = 'primary',
  family: FontFamilyWeight = 'regular',
  fontSize: FontSize = 'base',
  rest: TextStyle,
) => {
  const styles = StyleSheet.create({
    text: {
      color: theme[currentTheme].text[color],
      fontFamily: fonts[family],
      fontSize: fontSizeStyle[fontSize],
      ...rest,
    },
  });

  return styles;
};

const TextX: React.FC<TextXProps> = props => {
  const {
    children,
    color = 'primary',
    fontWeight = 'regular',
    textConfig,
    fontSize = 'base',
    ...rest
  } = props;
  const styles = getStyles('dark', color, fontWeight, fontSize, rest);
  return <Text style={styles.text}>{children}</Text>;
};

export default TextX;
