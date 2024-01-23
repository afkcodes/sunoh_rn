import React from "react";
import { StyleSheet, View, ViewProps, ViewStyle } from "react-native";
import { theme } from "~styles/theme";
import { Theme } from "~types/common.types";

interface ViewXProps {
  children: React.ReactNode;
  viewConfig?: ViewProps;
}

const getStyles = (currentTheme: Theme, rest: ViewStyle) => {
  const styles = StyleSheet.create({
    view: {
      backgroundColor: theme[currentTheme].bg.primary,
      ...rest,
    },
  });
  return styles;
};

const ViewX: React.FC<ViewXProps & ViewStyle> = (props) => {
  const { children, viewConfig, ...rest } = props;
  const styles = getStyles("dark", rest);
  return (
    <View style={styles.view} {...viewConfig}>
      {children}
    </View>
  );
};

export default ViewX;
