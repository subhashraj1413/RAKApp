/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {useColorScheme} from 'react-native';
import {DefaultTheme, Provider as ThemeProvider} from 'react-native-paper';
import AppContainer from './src/AppContainer';
import {Provider as StoreProvider} from 'react-redux';
import configureStore from './src/core/store/configureStore';
import { SafeAreaProvider } from 'react-native-safe-area-context';
const store = configureStore();

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    accent: '#DA374A',
    primary: '#3A383B',
    secondary: '#DA374A',
    background: '#F6F2EE',
  },

};

const App = () => {
  return (
    
    <ThemeProvider theme={theme}>
      <StoreProvider store={store}>
        <AppContainer />
      </StoreProvider>
    </ThemeProvider>
  );
};

export default App;
