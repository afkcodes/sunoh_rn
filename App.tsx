import ImageX from '~components/ImageX/ImageX';
import TextX from '~components/Textx';
import TitleSubtitle from '~components/TitleSubtitle/TitleSubtitle';
import ViewX from '~components/ViewX';

export default function App() {
  return (
    <ViewX flex={1} justifyContent="center" alignItems="center">
      <TextX fontSize="base">
        Open up App.js to start working on your app!
      </TextX>
      <ImageX
        size="3xl"
        src="https://picsum.photos/seed/696/3000/2000"
        fit="cover"
        alt=""
        shape="circle"
      />
      <TitleSubtitle
        title="Hello there"
        subTitle="Ashish"
        numberOfLines={1}
        titleFontSize="base"
        subtitleFontSize="xs"
      />
    </ViewX>
  );
}
