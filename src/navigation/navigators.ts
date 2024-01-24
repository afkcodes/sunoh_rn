import {StateNavigator} from 'navigation';
import Home from '~screens/home';
import Search from '~screens/search';
import Settings from '~screens/settings';
import {fonts} from '~styles/theme';

const homeNavigator = new StateNavigator([
  {key: 'home'},
  {key: 'viewAll', trackCrumbTrail: true},
  {key: 'search', trackCrumbTrail: true},
]);

const tabNavigator = new StateNavigator([
  {key: 'tabs'},
  {key: 'player', trackCrumbTrail: true},
]);

const searchNavigator = new StateNavigator([
  {key: 'search', trackCrumbTrail: true},
]);

const settingsNavigator = new StateNavigator([
  {key: 'settings', trackCrumbTrail: true},
]);

const tabs = [
  {
    id: 'home',
    title: 'Home',
    icon: require('../assets/images/nav-icons/home_inactive.png'),
    fontSize: 10,
    family: fonts.medium,
    navigatorState: homeNavigator,
    scenes: [
      {key: 'home', component: Home},
      {key: 'search', component: Search},
    ],
  },
  {
    id: 'search',
    title: 'Search',
    icon: require('../assets/images/nav-icons/search_inactive.png'),
    fontSize: 10,
    family: fonts.medium,
    navigatorState: searchNavigator,
    scenes: [
      {key: 'search', component: Search},
      {key: 'home', component: Home},
    ],
  },
  {
    id: 'settings',
    title: 'Settings',
    icon: require('../assets/images/nav-icons/settings_inactive.png'),
    fontSize: 10,
    family: fonts.medium,
    navigatorState: settingsNavigator,
    scenes: [
      {key: 'settings', component: Settings},
      {key: 'search', component: Search},
    ],
  },
];

export {homeNavigator, searchNavigator, tabNavigator, tabs};
