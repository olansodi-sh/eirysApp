import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStackNavigation from './src/navigation/root.stack.navigation';

const App = () => {
  return (
    <React.Fragment>
      <NavigationContainer>
        <RootStackNavigation />
      </NavigationContainer>
    </React.Fragment>
  );
};

export default App;
