import { colors } from './colors';

const theme: any = {
  dark: {
    bg: {
      primary: colors.black[900],
      secondary: colors.black[700],
      tertiary: colors.material[800],
      accent: colors.red[600],
      card: colors.black[500],
      transparent: 'transparent'
    },
    text: {
      primary: colors.white[500],
      secondary: colors.white[800],
      accent: colors.red[600]
    },
    button: {
      primary: colors.red[600],
      secondary: colors.teal[500],
      warning: colors.yellow[500],
      danger: colors.red[800],
      outline: 'transparent',
      unstyled: 'transparent'
    },
    error: colors.red[600],
    warning: colors.yellow[500],
    navigation: {
      background: colors.black[700],
      icon: colors.blue[500]
    }
  }
};

const fonts = {
  regular: 'Axiforma-Regular',
  medium: 'Axiforma-Medium',
  semibold: 'Axiforma-SemiBold',
  bold: 'Axiforma-Bold'
};

export { fonts, theme };
