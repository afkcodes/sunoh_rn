import SectionHeader from '~components/SectionHeader';
import ViewX from '~components/ViewX';
import {
  AudioListContainerProps,
  SectionHeaderProps,
  TileContainerProps
} from '~types/component.types';
import TileContainer from './TileContainer';

interface SectionContainerProps {
  headerProps: SectionHeaderProps;
  containerType: 'tile' | 'audio_list' | 'search_history' | 'chips';
  containerConfig: {
    tileContainerConfig?: TileContainerProps;
    audioListContainerConfig?: AudioListContainerProps;
  };
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  headerProps,
  containerType,
  containerConfig
}) => {
  console.log('type', containerType);
  return (
    <ViewX display='flex' flexDirection='column' gap={16} marginVertical={16}>
      <SectionHeader
        actionButtonConfig={headerProps.actionButtonConfig}
        headingConfig={headerProps.headingConfig}
      />

      {containerType === 'tile' && containerConfig.tileContainerConfig ? (
        <TileContainer
          {...containerConfig.tileContainerConfig.tileConfig}
          data={containerConfig.tileContainerConfig.data}
          config={containerConfig.tileContainerConfig.config}
        />
      ) : null}

      {containerType === 'audio_list' && containerConfig.audioListContainerConfig ? (
        <TileContainer
          {...containerConfig.audioListContainerConfig.audioItemConfig}
          data={containerConfig.audioListContainerConfig.data}
          config={containerConfig.audioListContainerConfig.config}
        />
      ) : null}
    </ViewX>
  );
};

export default SectionContainer;
