import { TextProps } from 'react-native';
import { borderRadius, spacing } from '~styles/base';
import {
  ButtonColors,
  Color,
  FontFamilyWeight,
  FontSize,
  Radius,
  Spacing
} from '~types/common.types';
import TextX from './TextX';
import TouchableX from './TouchableX';

interface ButtonXProps {
  type: 'icon' | 'default';
  onPress: () => void;
  styleConfig: {
    gutterX: Spacing;
    gutterY: Spacing;
    radius: Radius;
    bgColor: ButtonColors;
  };
  iconConfig?: {
    icon: React.ReactNode;
    size: number;
    color: string;
  };
  textConfig: {
    text: string;
    color?: Color;
    fontWeight?: FontFamilyWeight;
    textConfig?: TextProps;
    fontSize?: FontSize;
  };
}

const ButtonX: React.FC<ButtonXProps> = ({
  textConfig,
  styleConfig,
  iconConfig,
  type = 'default',
  onPress = () => {
    console.log('pressed button');
  }
}) => {
  const paddingHorizontal = spacing[styleConfig.gutterX];
  const paddingVertical = spacing[styleConfig.gutterY];
  const radius = borderRadius[styleConfig.radius];
  return (
    <TouchableX
      onPress={onPress}
      backgroundColor={styleConfig.bgColor}
      activeOpacity={0.9}
      style={{ paddingHorizontal, paddingVertical, borderRadius: radius }}
    >
      {type === 'default' ? (
        <TextX
          color={textConfig.color}
          fontSize={textConfig.fontSize}
          fontWeight={textConfig.fontWeight}
        >
          {textConfig.text}
        </TextX>
      ) : null}
      {type === 'icon' ? <TextX>icon</TextX> : null}
    </TouchableX>
  );
};

export default ButtonX;
