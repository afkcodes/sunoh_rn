import React from "react";
import { StyleSheet, Text, TextProps, TextStyle } from "react-native";
import { fonts, theme } from "~styles/theme";
import { FontFamilyWeight, TextColor, Theme } from "~types/common.types";

interface TextXProps {
  children: React.ReactNode | undefined;
  color?: TextColor;
  fontWeight?: FontFamilyWeight;
  textConfig?: TextProps;
}

const getStyles = (
  currentTheme: Theme = "dark",
  color: TextColor = "primary",
  family: FontFamilyWeight = "regular",
  rest: TextStyle
) => {
  const styles = StyleSheet.create({
    text: {
      color: theme[currentTheme].text[color],
      fontFamily: fonts[family],
      ...rest,
    },
  });

  return styles;
};

const TextX: React.FC<TextXProps> = (props) => {
  const {
    children,
    color = "primary",
    fontWeight = "regular",
    textConfig,
    ...rest
  } = props;
  const styles = getStyles("dark", color, fontWeight, rest);
  return <Text style={styles.text}>{children}</Text>;
};

export default TextX;
