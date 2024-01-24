import {NavigationHandler} from 'navigation-react';
import {
  NavigationStack,
  Scene,
  TabBar,
  TabBarItem,
} from 'navigation-react-native';
import {Fragment} from 'react';
import {Platform} from 'react-native';
import {theme} from '~styles/theme';
import {tabs} from './navigators';

const BottomTabs = () => {
  return (
    <Fragment>
      <TabBar
        primary={true}
        bottomTabs={true}
        unselectedTintColor={theme.dark.text.secondary}
        selectedTintColor={theme.dark.button.primary}
        barTintColor={theme.dark.navigation.background}
        labelVisibilityMode="unlabeled">
        {tabs.map(tab => (
          <TabBarItem
            key={tab.id}
            image={tab.icon}
            fontFamily={tab.family}
            fontSize={tab.fontSize}>
            <NavigationHandler stateNavigator={tab.navigatorState}>
              <NavigationStack
                backgroundColor={() =>
                  Platform.OS === 'android'
                    ? theme.dark.bg.primary
                    : 'transparent'
                }>
                {tab.scenes?.map(scene => (
                  <Scene key={scene.key} stateKey={scene.key}>
                    <scene.component />
                  </Scene>
                ))}
              </NavigationStack>
            </NavigationHandler>
          </TabBarItem>
        ))}
      </TabBar>
    </Fragment>
  );
};

export default BottomTabs;
