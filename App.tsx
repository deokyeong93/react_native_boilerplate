import * as React from 'react';
import {
  Button,
  Provider as PaperProvider,
  TextInput,
} from 'react-native-paper';

import { Text, View } from 'react-native';
import { theme } from './src/styles';

function App(): JSX.Element {
  return (
    <PaperProvider theme={theme}>
      <View>
        <Text>MAIN</Text>
        <TextInput
          label="Password"
          secureTextEntry
          right={<TextInput.Icon icon="eye" />}
        />
        <Button icon="account-circle">Press me</Button>
      </View>
    </PaperProvider>
  );
}

export default App;
