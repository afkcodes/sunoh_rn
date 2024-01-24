import {StateNavigator} from 'navigation';
import {NavigationHandler} from 'navigation-react';
import {NavigationStack, Scene} from 'navigation-react-native';
import {Platform} from 'react-native';
import Home from '~screens/home';
import Search from '~screens/search';
import {theme} from '~styles/theme';

const stateNavigator = new StateNavigator([
  {key: 'home'},
  {key: 'search', trackCrumbTrail: true},
]);

export default function App() {
  return (
    <NavigationHandler stateNavigator={stateNavigator}>
      <NavigationStack
        backgroundColor={() =>
          Platform.OS === 'android' ? theme.dark.bg.primary : 'transparent'
        }>
        <Scene stateKey="home">
          <Home />
        </Scene>
        <Scene stateKey="search">
          <Search />
        </Scene>
      </NavigationStack>
    </NavigationHandler>
  );
}
