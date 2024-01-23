import Tile from '~components/Tile';
import ViewX from '~components/ViewX';

export default function App() {
  return (
    <ViewX flex={1} justifyContent="center" alignItems="center">
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
            shape: 'default',
          },
          titleSubtitleConfig: {
            title: 'Papa Meri Jaan',
            subTitle: 'Animal',
            numberOfLines: 1,
            titleFontSize: 'sm',
            titleFontWeight: 'medium',
            subtitleFontSize: 'xs',
          },
        }}
      />
    </ViewX>
  );
}
