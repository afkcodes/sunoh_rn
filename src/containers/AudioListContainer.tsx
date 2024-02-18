import { FlashList } from '@shopify/flash-list';
import AudioListItem from '~components/AudioListItem';
import { AudioListContainerProps } from '~types/component.types';

const TileContainer: React.FC<AudioListContainerProps> = ({
  data,
  audioItemConfig,
  config,
  onPress
}) => {
  return (
    <FlashList
      data={data}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item, index }) => {
        return (
          <AudioListItem
            data={item}
            config={config}
            onPress={onPress}
            imageConfig={audioItemConfig.imageConfig}
            titleSubtitleConfig={audioItemConfig.titleSubtitleConfig}
            styleConfig={{
              ...audioItemConfig.styleConfig,
              gutterLeft: index === 0 ? 'md' : 'none',
              gutterRight: index === data.length - 1 ? 'lg' : 'md'
            }}
          />
        );
      }}
      estimatedItemSize={100}
      horizontal
    />
  );
};

export default TileContainer;
