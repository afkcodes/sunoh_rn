import { NavigationContext } from 'navigation-react';
import { useContext } from 'react';
import { ScrollView } from 'react-native';
import AudioListItem from '~components/AudioListItem';
import ButtonX from '~components/ButtonX';
import SectionHeader from '~components/SectionHeader';
import Tile from '~components/Tile';

const Home = () => {
  const { stateNavigator } = useContext(NavigationContext);
  return (
    <ScrollView style={{ flex: 1, paddingHorizontal: 8 }}>
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
            shape: 'default'
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
        textConfig={{
          text: 'Hello Button',
          color: 'primary',
          fontSize: 'lg',
          fontWeight: 'medium'
        }}
        styleConfig={{
          bgColor: 'primary',
          gutterX: 'md',
          gutterY: 'lg',
          radius: 'sm'
        }}
        type='default'
        onPress={() => {
          stateNavigator.navigate('search');
        }}
      />
      <SectionHeader
        headingConfig={{
          text: 'Trending Now',
          color: 'accent',
          fontSize: 'md',
          fontWeight: 'semibold'
        }}
        actionButtonConfig={{
          onPress: () => {},
          textConfig: {
            text: 'VIEW ALL',
            fontSize: 'xs',
            fontWeight: 'semibold',
            color: 'secondary'
          },
          styleConfig: { bgColor: 'outline', gutterX: 'sm', gutterY: 'sm', radius: 'none' },
          type: 'default'
        }}
      />
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
        <AudioListItem key={item} />
      ))}
    </ScrollView>
  );
};

export default Home;
