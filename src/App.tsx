import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {StatusBar} from 'react-native';
import Navigation from './navigation';

import {RecoilRoot} from 'recoil';

const App = () => {
  return (
    <RecoilRoot>
      <NativeBaseProvider>
        <StatusBar backgroundColor="#5A2D82" barStyle="light-content" />
        <Navigation />
      </NativeBaseProvider>
    </RecoilRoot>
  );
};

export default App;
