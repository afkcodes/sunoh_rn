import { ImageBackground } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import ImageX from '~components/ImageX/ImageX';
import TitleSubtitle from '~components/TitleSubtitle';
import ViewX from '~components/ViewX';
import { dataExtractor } from '~helpers/common';
import { theme } from '~styles/theme';

interface HeroContainerProps {
  data: any;
  config: any;
}

const HeroContainer: React.FC<HeroContainerProps> = ({ data, config }) => {
  const parsedData = JSON.parse(data);
  const src = dataExtractor(parsedData, config.image);
  const title = dataExtractor(parsedData, config.title);
  const subTitle = dataExtractor(parsedData, config.subtitle);

  return (
    <ViewX height={500} width='100%' display='flex' justifyContent='center' alignItems='center'>
      <ImageBackground
        contentFit='fill'
        source={src}
        blurRadius={10}
        style={{
          height: '100%',
          width: '100%',
          position: 'absolute',
          opacity: 0.8
        }}
      />
      <LinearGradient
        colors={['transparent', theme.dark.bg.primary]}
        style={{ height: '100%', width: '100%', position: 'absolute' }}
      />
      <ViewX
        display='flex'
        flexDirection='column'
        gap={20}
        justifyContent='center'
        alignItems='center'
        zIndex={1}
        alignSelf='center'
        width={300}
      >
        <ImageX
          src={src}
          shape='rounded_square'
          size='6xl'
          fit='cover'
          position='center'
          alt='Animal Poster'
        />
        <TitleSubtitle
          title={title}
          subTitle={subTitle}
          titleFontSize='xl'
          subtitleFontSize='base'
          numberOfLines={1}
          subTitleFontWeight='medium'
          titleFontWeight='bold'
          align='center'
        />
      </ViewX>
    </ViewX>
  );
};

export default HeroContainer;
