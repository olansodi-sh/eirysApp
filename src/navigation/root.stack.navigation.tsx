import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import SplashScreen from '../screens/splash/splash.screen';
import LoginScreen from '../screens/login/login.screen';
import RegisterScreen from '../screens/register/register.screen';
import HomeStackNavigation from './home.stack.navigation';

const Stack = createNativeStackNavigator();

const RootStackNavigation = () => {
  const isLoading = false;
  const isAuthenticated = true; // Temporary for testing

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isLoading ? (
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
      ) : !isAuthenticated ? (
        <>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        </>
      ) : (
        <Stack.Screen name="HomeStackNavigation" component={HomeStackNavigation} />
      )}
    </Stack.Navigator>
  );
};

export default RootStackNavigation;
