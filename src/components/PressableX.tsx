import React from 'react';
import {Pressable, PressableProps, StyleSheet, ViewStyle} from 'react-native';
import {theme} from '~styles/theme';
import {ButtonColors, Theme} from '~types/common.types';

interface PressableXProps {
  children: React.ReactNode;
  bgColor: ButtonColors;
  pressableConfig: PressableProps;
}

const getStyles = (
  currentTheme: Theme = 'dark',
  backgroundColor: string,
  rest: ViewStyle,
) => {
  const styles = StyleSheet.create({
    pressableStyles: {
      backgroundColor: theme[currentTheme].button[backgroundColor],
      ...rest,
    },
  });

  return styles;
};

const PressableX: React.FC<PressableXProps & ViewStyle> = ({
  children,
  bgColor,
  pressableConfig,
  ...rest
}) => {
  const styles = getStyles('dark', bgColor, rest);
  return (
    <Pressable style={styles.pressableStyles} {...pressableConfig}>
      {children}
    </Pressable>
  );
};

export default PressableX;
