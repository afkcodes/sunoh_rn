import React, { ReactNode } from 'react';
import { StyleSheet, TouchableOpacity, TouchableOpacityProps, ViewStyle } from 'react-native';
import { theme } from '~styles/theme';
import { Theme } from '~types/common.types';

interface CustomTouchableOpacityProps extends TouchableOpacityProps {
  display?: string;
  flex?: number;
  backgroundColor?: string;
  style: ViewStyle;
  children?: ReactNode;
}

const getStyles = (currentTheme: Theme = 'dark', backgroundColor: string, rest: ViewStyle) => {
  return StyleSheet.create({
    pressableStyles: {
      backgroundColor: theme[currentTheme].button[backgroundColor],
      ...rest
    }
  });
};

const CustomTouchableOpacity: React.FC<CustomTouchableOpacityProps> = ({
  onPress,
  display,
  flex,
  backgroundColor = 'default',
  children,
  style,
  ...restProps
}) => {
  const styles = getStyles('dark', backgroundColor, style);

  return (
    <TouchableOpacity onPress={onPress} style={styles.pressableStyles} {...restProps}>
      {children}
    </TouchableOpacity>
  );
};

export default CustomTouchableOpacity;
