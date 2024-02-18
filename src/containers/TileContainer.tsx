import { FlashList } from '@shopify/flash-list';
import { imageSize } from '~components/ImageX/ImageX.styles';
import Tile from '~components/Tile';
import { TileProps } from '~types/component.types';

const TileContainer: React.FC<TileProps> = ({ data, config, onPress, styleConfig }) => {
  const size = imageSize[styleConfig.imageStyleConfig.size].height;
  return (
    <FlashList
      data={data}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item, index }) => {
        return (
          <Tile
            data={item}
            config={config}
            onPress={onPress}
            styleConfig={{
              ...styleConfig,
              gutterLeft: index === 0 ? 'sm' : 'none',
              gutterRight: index === data.length - 1 ? 'sm' : 'md'
            }}
          />
        );
      }}
      estimatedItemSize={size as number}
      horizontal={styleConfig.orientation !== 'horizontal'}
    />
  );
};

export default TileContainer;
