import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavoritesScreen from '../screens/favorites/favorites.screen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ProfileScreen from '../screens/profile/profile.screen';
import { Text, View, StyleSheet } from 'react-native';
import HomeScreen from '../screens/home/home.screen';
import SearchProductScreen from '../screens/searchproduct/ui/search.product.screen';
import { GlobalColors } from '../theme/theme';
import React from 'react';

const Tab = createBottomTabNavigator();

const TabIcon = ({ emoji, color }: { emoji: string; color: string }) => (
  <View style={styles.iconContainer}>
    <Text style={{ color, fontSize: 22 }}>{emoji}</Text>
  </View>
);

const HomeTabNavigation = () => {
  const insets = useSafeAreaInsets();

  // Calculamos un margen inferior dinámico basado en los insets del dispositivo
  const bottomMargin = Math.max(insets.bottom, 20);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          position: 'absolute',
          bottom: bottomMargin,
          left: 20,
          right: 20,
          backgroundColor: '#FFFFFF', // Blanco puro para que resalte sobre el fondo suave
          borderRadius: 30,
          height: 70,
          borderTopWidth: 0,
          // Sombra premium
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.1,
          shadowRadius: 15,
          elevation: 8,
          paddingBottom: 15,
          paddingTop: 10,
        },
        tabBarLabelStyle: {
          fontFamily: 'Manrope-Regular',
          fontSize: 10,
          letterSpacing: 0.5,
          fontWeight: '600',
          marginBottom: 5,
        },
        tabBarActiveTintColor: GlobalColors.primary,
        tabBarInactiveTintColor: GlobalColors.outline,
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Tendencias',
          tabBarIcon: ({ color }) => <TabIcon emoji="🛍️" color={color} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchProductScreen}
        options={{
          tabBarLabel: 'BUSCAR',
          tabBarIcon: ({ color }) => <TabIcon emoji="🔍" color={color} />,
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
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
  },
});

export default HomeTabNavigation;
