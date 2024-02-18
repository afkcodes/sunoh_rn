import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NavigationHandler } from 'navigation-react';
import { NavigationStack, Scene } from 'navigation-react-native';
import { StatusBar } from 'react-native';
import ViewX from '~components/ViewX';
import BottomTabs from '~navigation/BottomTabs';
import { tabNavigator } from '~navigation/navigators';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar translucent backgroundColor='transparent' />
      <ViewX flex={1} display='flex' flexDirection='column' backgroundColor='red'>
        <NavigationHandler stateNavigator={tabNavigator}>
          <NavigationStack>
            <Scene stateKey='tabs'>
              <BottomTabs />
            </Scene>
          </NavigationStack>
        </NavigationHandler>
      </ViewX>
    </QueryClientProvider>
  );
}
