import { Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/home.screen';
import FavoritesScreen from '../screens/favorites/favorites.screen';
import ProfileScreen from '../screens/profile/profile.screen';
import SupportScreen from '../screens/support/support.screen';
import { theme } from '../theme/theme';

const Tab = createBottomTabNavigator();

const TabIcon = ({ emoji, color }: { emoji: string; color: string }) => (
  <Text style={{ color }}>{emoji}</Text>
);

const HomeTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.colors.background,
          borderTopWidth: 1,
          borderTopColor: '#e0e0e0',
          height: 60,
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.outline,
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={HomeScreen}
        options={{
          tabBarLabel: 'SHOP',
          tabBarIcon: ({ color }) => <TabIcon emoji="🛍️" color={color} />,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarLabel: 'FAVORITOS',
          tabBarIcon: ({ color }) => <TabIcon emoji="✨" color={color} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'PERFIL',
          tabBarIcon: ({ color }) => <TabIcon emoji="👤" color={color} />,
        }}
      />
      <Tab.Screen
        name="Support"
        component={SupportScreen}
        options={{
          tabBarLabel: 'AYUDA',
          tabBarIcon: ({ color }) => <TabIcon emoji="💬" color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigation;
