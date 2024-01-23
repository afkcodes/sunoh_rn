import {colors} from './colors';

const theme: any = {
  dark: {
    bg: {
      primary: colors.black[900],
      secondary: colors.black[700],
      tertiary: colors.material[800],
      accent: colors.blue[500],
      card: colors.black[500],
    },
    text: {
      primary: colors.white[500],
      secondary: colors.white[800],
      accent: colors.blue[500],
    },
    button: {
      primary: colors.blue[500],
      secondary: colors.teal[500],
      warning: colors.yellow[500],
      danger: colors.red[500],
      outline: 'transparent',
    },
    error: colors.red[600],
    warning: colors.yellow[500],
  },
  navigation: {
    background: colors.black[700],
    icon: colors.blue[500],
  },
};

const fonts = {
  regular: 'Axiforma-Regular',
  medium: 'Axiforma-Medium',
  semibold: 'Axiforma-Semibold',
  bold: 'Axiforma-Bold',
};

export {fonts, theme};
