import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NavigationHandler } from 'navigation-react';
import { NavigationStack, Scene } from 'navigation-react-native';
import ViewX from '~components/ViewX';
import BottomTabs from '~navigation/BottomTabs';
import { tabNavigator } from '~navigation/navigators';
import { theme } from '~styles/theme';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ViewX flex={1} display='flex' flexDirection='column' backgroundColor={theme.dark.bg.primary}>
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
