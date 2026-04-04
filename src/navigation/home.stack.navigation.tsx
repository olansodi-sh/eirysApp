import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeTabNavigation from './home.tab.navigation';
import CheckoutScreen from '../screens/checkout/checkout.screen';

export type HomeStackParamList = {
  HomeTab: undefined;
  Checkout: undefined;
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeTab" component={HomeTabNavigation} />
      <Stack.Screen 
        name="Checkout" 
        component={CheckoutScreen} 
        options={{
            presentation: 'modal', // Giving it a layer physics feel
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigation;
