import { dataExtractor } from '~helpers/common';
import { spacing } from '~styles/base';
import { TileProps } from '~types/component.types';
import ImageX from './ImageX/ImageX';
import { imageSize } from './ImageX/ImageX.styles';
import PressableX from './PressableX';
import TitleSubtitle from './TitleSubtitle';
import ViewX from './ViewX';

const Tile: React.FC<TileProps> = ({ data, onPress, config, styleConfig }) => {
  const {
    orientation,
    imageStyleConfig,
    labelStyeConfig,
    gutterLeft = '2xs',
    gutterRight = '2xs'
  } = styleConfig;
  const isHorizontal = orientation === 'horizontal';
  // const id = dataExtractor(data, config.id);
  const src = dataExtractor(data, config.image);
  const title = dataExtractor(data, config.title);
  const subTitle = dataExtractor(data, config.subtitle);
  const dominantColor = dataExtractor(data, config.dominantColor);

  const { width } = imageSize[imageStyleConfig.size];

  const onTilePress = () => {
    onPress(data);
  };

  return (
    <PressableX
      display='flex'
      gap={isHorizontal ? 10 : 6}
      flexDirection={isHorizontal ? 'row' : 'column'}
      justifyContent={isHorizontal ? 'flex-start' : 'center'}
      alignItems={isHorizontal ? 'center' : 'flex-start'}
      pressableConfig={{
        onPress: onTilePress
      }}
      bgColor='unstyled'
      marginRight={spacing[gutterRight]}
      marginLeft={spacing[gutterLeft]}
      width={isHorizontal ? '100%' : width}
    >
      <ImageX src={src} alt={title} {...imageStyleConfig} />
      <ViewX width={isHorizontal ? '75%' : width}>
        <TitleSubtitle title={title} subTitle={subTitle} {...labelStyeConfig} />
      </ViewX>
    </PressableX>
  );
};

export default Tile;
