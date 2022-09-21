import {NativeBaseProvider} from 'native-base';
import {StatusBar} from 'react-native';
import Navigation from './navigation';

const App = () => {
  return (
    <NativeBaseProvider>
      <StatusBar backgroundColor="#5A2D82" barStyle="light-content" />
      <Navigation />
    </NativeBaseProvider>
  );
};

export default App;
