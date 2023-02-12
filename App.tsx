import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';

import { theme } from './src/styles';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeContainer from './src/views/Home/HomeConatiner';
import DetailContainer from './src/views/Detail/Detail';

// NOTE: 추후 SafeArea에 대한 궁금은 https://reactnavigation.org/docs/handling-safe-area/ 참고하자

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeContainer}
            initialParams={{
              title: '홈',
              content: '하하',
            }}
          />
          <Stack.Screen
            name="Details"
            component={DetailContainer}
            options={{ title: '칼칼' }}
            initialParams={{
              content: '하하',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
