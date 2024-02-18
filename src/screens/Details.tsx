import { NavigationContext } from 'navigation-react';
import { useContext } from 'react';
import { ScrollView } from 'react-native';
import HeroContainer from '~containers/HeroContainer';
import { HOME_CONFIG } from '~helpers/data.config';

const Details = () => {
  const { data } = useContext(NavigationContext);
  const { metaData } = data;

  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      <HeroContainer data={metaData} config={HOME_CONFIG} />
    </ScrollView>
  );
};

export default Details;
