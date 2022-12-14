import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {StatusBar} from 'react-native';
import Navigation from './navigation';
import {SWRConfig} from 'swr';

const App = () => {
  return (
    <SWRConfig
      value={{
        provider: () => new Map(),
      }}>
      <NativeBaseProvider>
        <StatusBar backgroundColor="#5A2D82" barStyle="light-content" />
        <Navigation />
      </NativeBaseProvider>
    </SWRConfig>
  );
};

export default App;
