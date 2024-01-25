import { theme } from '~styles/theme';
import ButtonX from './ButtonX';
import Tile from './Tile';
import ViewX from './ViewX';

const AudioListItem = () => {
  return (
    <ViewX
      width='100%'
      padding={3}
      display='flex'
      flexDirection='row'
      justifyContent='space-between'
      alignItems='center'
    >
      <Tile
        data={{}}
        config={{}}
        styleConfig={{
          orientation: 'horizontal',
          imageConfig: {
            size: '2xs',
            src: 'https://m.media-amazon.com/images/M/MV5BNGViM2M4NmUtMmNkNy00MTQ5LTk5MDYtNmNhODAzODkwOTJlXkEyXkFqcGdeQXVyMTY1NDY4NTIw._V1_.jpg',
            fit: 'cover',
            position: 'top',
            alt: '',
            shape: 'rounded_square'
          },
          titleSubtitleConfig: {
            title: 'Papa Meri Jaan',
            subTitle: 'Animal',
            numberOfLines: 1,
            titleFontSize: 'sm',
            titleFontWeight: 'medium',
            subtitleFontSize: 'xs'
          }
        }}
      />
      <ButtonX
        type='icon'
        styleConfig={{ gutterX: 'sm', gutterY: 'sm', bgColor: 'outline', radius: '2xl' }}
        iconConfig={{ fillColor: theme.dark.text.primary, icon: 'MORE', size: 24 }}
        onPress={() => {
          console.log('more');
        }}
      />
    </ViewX>
  );
};

export default AudioListItem;
