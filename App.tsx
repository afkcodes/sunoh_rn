import {NavigationHandler} from 'navigation-react';
import {NavigationStack, Scene} from 'navigation-react-native';
import {Platform} from 'react-native';
import BottomTabs from '~navigation/BottomTabs';
import {tabNavigator} from '~navigation/navigators';
import {theme} from '~styles/theme';

export default function App() {
  return (
    <NavigationHandler stateNavigator={tabNavigator}>
      <NavigationStack
        backgroundColor={() =>
          Platform.OS === 'android' ? theme.dark.bg.primary : 'transparent'
        }>
        <Scene stateKey="tabs">
          <BottomTabs />
        </Scene>
      </NavigationStack>
    </NavigationHandler>
  );
}
