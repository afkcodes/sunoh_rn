import { borderRadius, spacing } from '~styles/base';
import { theme } from '~styles/theme';
import { ButtonXProps } from '~types/component.types';
import SVGIcon from './SVGIcon';
import TextX from './TextX';
import TouchableX from './TouchableX';

const ButtonX: React.FC<ButtonXProps> = ({
  textConfig,
  styleConfig,
  iconConfig = {
    icon: 'HEART',
    size: 24,
    fillColor: theme.dark.text.primary
  },
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
      {type === 'default' && textConfig ? (
        <TextX
          color={textConfig.color}
          fontSize={textConfig.fontSize}
          fontWeight={textConfig.fontWeight}
        >
          {textConfig.text}
        </TextX>
      ) : null}
      {type === 'icon' ? (
        <SVGIcon
          icon={iconConfig.icon}
          height={iconConfig.size}
          width={iconConfig.size}
          fill={iconConfig.fillColor}
        />
      ) : null}
    </TouchableX>
  );
};

export default ButtonX;
