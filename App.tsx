import ImageX from '~components/ImageX/ImageX';
import TextX from '~components/Textx';
import ViewX from '~components/ViewX';

export default function App() {
  return (
    <ViewX flex={1} justifyContent="center" alignItems="center">
      <TextX>Open up App.js to start working on your app!</TextX>
      <ImageX
        size="2xl"
        src="https://picsum.photos/seed/696/3000/2000"
        fit="cover"
        alt=""
        shape="circle"
      />
    </ViewX>
  );
}
