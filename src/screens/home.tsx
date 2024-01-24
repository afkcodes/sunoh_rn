import {NavigationContext} from 'navigation-react';
import {useContext} from 'react';
import ButtonX from '~components/ButtonX';
import Tile from '~components/Tile';
import ViewX from '~components/ViewX';

const Home = () => {
  const {stateNavigator} = useContext(NavigationContext);
  return (
    <ViewX flex={1} justifyContent="center" alignItems="center">
      <Tile
        data={{}}
        config={{}}
        styleConfig={{
          orientation: 'vertical',
          imageConfig: {
            size: '2xl',
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
      <ButtonX
        textConfig={{
          text: 'Hello Button',
          color: 'primary',
          fontSize: 'lg',
          fontWeight: 'medium',
        }}
        styleConfig={{
          bgColor: 'primary',
          gutterX: 'md',
          gutterY: 'lg',
          radius: 'sm',
        }}
        type="default"
        onPress={() => {
          stateNavigator.navigate('search');
        }}
      />
    </ViewX>
  );
};

export default Home;
