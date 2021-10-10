import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
// import { useColorScheme } from 'react-native';
// import { Colors } from 'react-native/Libraries/NewAppScreen';
import { PersistGate } from 'redux-persist/integration/react';
import store from './src/configure-store';
import BottomTabs from './src/navigation/BottomTabs';

if (__DEV__) {
  import('./src/reactotron').then(() => console.log('Reactotron Configured'));
}

const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <PersistGate loading={null} persistor={store.persistor}>
      <NavigationContainer>
        <BottomTabs />
      </NavigationContainer>
    </PersistGate>
  );
};

{
  /* <SafeAreaView style={backgroundStyle}>
<StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
</SafeAreaView> */
}

export default App;
