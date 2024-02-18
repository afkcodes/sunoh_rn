import { NavigationContext } from 'navigation-react';
import { Fragment, useContext } from 'react';
import { ScrollView } from 'react-native';
import SectionContainer from '~containers/SectionContainer';
import { HOME_CONFIG } from '~helpers/data.config';
import useFetch from '~helpers/hooks/useFetch';
import { musicEndpoints } from '~modules/network/music';

const Home = () => {
  const { stateNavigator } = useContext(NavigationContext);

  const { data, isSuccess, isError } = useFetch({
    queryKey: ['home'],
    queryFn: async () => await musicEndpoints.home()
  });

  const onTilePress = (item: any) => {
    stateNavigator.navigate('details', { metaData: JSON.stringify(item) });
  };

  return (
    <ScrollView style={{ flex: 1, paddingTop: 56 }} showsVerticalScrollIndicator={false}>
      {isSuccess && !isError ? (
        <Fragment>
          {data?.data.map((item: any) => (
            <SectionContainer
              key={item.id}
              containerType={item.category === 'song' ? 'audio_list' : 'tile'}
              containerConfig={{
                tileContainerConfig: {
                  data: [],
                  config: HOME_CONFIG,
                  onPress: () => {},
                  tileConfig: {
                    styleConfig: {
                      orientation: 'vertical',
                      gutterLeft: '2xs',
                      gutterRight: '2xs',
                      imageStyleConfig: {
                        shape: 'rounded_square',
                        size: '3xl',
                        fit: 'cover',
                        position: 'top center'
                      },
                      labelStyeConfig: {
                        numberOfLines: 1,
                        subtitleFontSize: 'xs',
                        subTitleFontWeight: 'medium',
                        titleFontSize: 'sm',
                        titleFontWeight: 'medium'
                      }
                    },
                    onPress: onTilePress
                  }
                },
                audioListContainerConfig: {
                  data: item.items.slice(0, 5),
                  config: HOME_CONFIG,
                  audioItemConfig: {
                    styleConfig: {
                      orientation: 'horizontal',
                      imageStyleConfig: {
                        shape: 'rounded_square',
                        size: '2xs',
                        fit: 'cover',
                        position: 'top center'
                      },
                      labelStyeConfig: {
                        numberOfLines: 1,
                        subtitleFontSize: 'xs',
                        subTitleFontWeight: 'medium',
                        titleFontSize: 'sm',
                        titleFontWeight: 'medium'
                      }
                    },
                    onPress: function (item?: any): void {
                      throw new Error('Function not implemented.');
                    }
                  },
                  onPress: function (item?: any): void {
                    throw new Error('Function not implemented.');
                  }
                }
              }}
              headerProps={{
                headingConfig: {
                  text: item.title,
                  color: 'primary',
                  fontSize: 'lg',
                  fontWeight: 'semibold'
                },
                actionButtonConfig: {
                  styleConfig: {
                    radius: 'full',
                    bgColor: 'accent',
                    gutterX: '2xs',
                    gutterY: '2xs'
                  },
                  type: 'default',
                  onPress: () => {},
                  textConfig: {
                    text: 'VIEW ALL',
                    color: 'secondary',
                    fontSize: 'xs',
                    fontWeight: 'semibold'
                  }
                }
              }}
            />
          ))}
        </Fragment>
      ) : null}
    </ScrollView>
  );
};

export default Home;
