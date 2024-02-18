import { theme } from '~styles/theme';
import { TileProps } from '~types/component.types';
import ButtonX from './ButtonX';
import PressableX from './PressableX';
import Tile from './Tile';

const AudioListItem: React.FC<TileProps> = ({
  imageConfig,
  styleConfig,
  titleSubtitleConfig,
  onPress,
  config,
  data
}) => {
  return (
    <PressableX
      width='100%'
      padding={3}
      display='flex'
      flexDirection='row'
      justifyContent='space-between'
      alignItems='center'
      pressableConfig={{ onPress }}
      bgColor='unstyled'
    >
      <Tile
        data={data}
        config={config}
        imageConfig={imageConfig}
        titleSubtitleConfig={titleSubtitleConfig}
        styleConfig={styleConfig}
        onPress={onPress}
      />
      <ButtonX
        type='icon'
        styleConfig={{ gutterX: 'sm', gutterY: 'sm', bgColor: 'outline', radius: '2xl' }}
        iconConfig={{ fillColor: theme.dark.text.primary, icon: 'MORE', size: 24 }}
        onPress={() => {
          console.log('more');
        }}
      />
    </PressableX>
  );
};

export default AudioListItem;
