import {Orientation} from '~types/common.types';
import {ImageProps, TitleSubtitleProps} from '~types/component.types';
import ImageX from './ImageX/ImageX';
import TitleSubtitle from './TitleSubtitle/TitleSubtitle';
import ViewX from './ViewX';

interface TileProps {
  data: any;
  config: any;
  styleConfig: {
    imageConfig: ImageProps;
    titleSubtitleConfig: TitleSubtitleProps;
    orientation: Orientation;
  };
}

const Tile: React.FC<TileProps> = ({styleConfig}) => {
  const {imageConfig, titleSubtitleConfig, orientation} = styleConfig;
  const isHorizontal = orientation === 'horizontal';
  return (
    <ViewX
      display="flex"
      gap={isHorizontal ? 8 : 6}
      flexDirection={isHorizontal ? 'row' : 'column'}
      justifyContent={isHorizontal ? 'flex-start' : 'center'}
      alignItems={isHorizontal ? 'center' : 'center'}>
      <ImageX {...imageConfig} />
      <TitleSubtitle {...titleSubtitleConfig} />
    </ViewX>
  );
};

export default Tile;
