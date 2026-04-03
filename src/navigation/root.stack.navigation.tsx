import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import SplashScreen from '../screens/splash/splash.screen';
import LoginScreen from '../screens/login/login.screen';
import HomeStackNavigation from './home.stack.navigation';

const Stack = createNativeStackNavigator();

const RootStackNavigation = () => {
  const isLoading = false;
  const isAuthenticated = true;

  return (
    <React.Fragment>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLoading ? (
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
        ) : !isAuthenticated ? (
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
        ) : (
          <Stack.Screen
            name="HomeStackNavigation"
            component={HomeStackNavigation}
          />
        )}
      </Stack.Navigator>
    </React.Fragment>
  );
};

export default RootStackNavigation;
