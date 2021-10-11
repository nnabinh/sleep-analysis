import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import store from './src/configure-store';
import BottomTabs from './src/navigation/BottomTabs';

if (__DEV__) {
  import('./src/reactotron').then(() => console.log('Reactotron Configured'));
}

const App = () => {
  return (
    <PersistGate loading={null} persistor={store.persistor}>
      <NavigationContainer>
        <BottomTabs />
      </NavigationContainer>
    </PersistGate>
  );
};

export default App;
