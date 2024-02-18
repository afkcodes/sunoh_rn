import { SectionHeaderProps } from '~types/component.types';
import ButtonX from './ButtonX';
import TextX from './TextX';
import ViewX from './ViewX';

const SectionHeader: React.FC<SectionHeaderProps> = ({ headingConfig, actionButtonConfig }) => {
  return (
    <ViewX
      display='flex'
      flexDirection='row'
      justifyContent='space-between'
      alignItems='center'
      paddingHorizontal={8}
    >
      {headingConfig ? (
        <TextX fontSize={headingConfig.fontSize} fontWeight={headingConfig.fontWeight}>
          {headingConfig.text}
        </TextX>
      ) : null}
      {actionButtonConfig ? (
        <ButtonX
          type={actionButtonConfig.type}
          textConfig={actionButtonConfig.textConfig}
          styleConfig={actionButtonConfig.styleConfig}
          onPress={actionButtonConfig.onPress}
        />
      ) : null}
    </ViewX>
  );
};

export default SectionHeader;
