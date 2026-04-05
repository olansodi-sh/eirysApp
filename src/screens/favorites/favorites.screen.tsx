import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, FlatList, Image, TouchableOpacity, SafeAreaView, Animated, StatusBar } from 'react-native';
import { ManropeText, NotoserifText } from '../../components';
import { GlobalColors, theme } from '../../theme/theme';

const favoritesData = [
  { id: '1', name: 'Petal Slip-ons', price: '$240', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=400' },
  { id: '2', name: 'Silk Glow Heals', price: '$380', image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80&w=400' },
  { id: '3', name: 'Breeze Sandal', price: '$190', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=400' },
  { id: '4', name: 'Aura Sneaker', price: '$310', image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=400' },
];

const FavoritesScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const renderItem = ({ item }: { item: any }) => (
    <Animated.View style={[styles.card, theme.shadows.soft, { opacity: fadeAnim }]}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.cardInfo}>
        <ManropeText style={styles.itemName} size={14}>
          {item.name}
        </ManropeText>
        <ManropeText style={styles.itemPrice} size={14}>
          {item.price}
        </ManropeText>
      </View>
      <TouchableOpacity style={styles.removeBtn}>
        <ManropeText style={styles.removeIcon} size={12}>
          ✕
        </ManropeText>
      </TouchableOpacity>
    </Animated.View>
  );

  return (
    <React.Fragment>
      <StatusBar barStyle="dark-content" backgroundColor={GlobalColors.background} />
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <NotoserifText style={styles.title} size={32}>
            Favoritos
          </NotoserifText>
          <ManropeText style={styles.subtitle} size={14}>
            Tu colección personal de luz
          </ManropeText>
        </View>

        <FlatList data={favoritesData} renderItem={renderItem} keyExtractor={item => item.id} numColumns={2} contentContainerStyle={styles.listContent} columnWrapperStyle={styles.columnWrapper} />
      </SafeAreaView>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalColors.background,
  },
  header: {
    padding: 24, // spacing.lg
    paddingTop: 32, // spacing.xl
  },
  title: {
    color: GlobalColors.onSurface,
  },
  subtitle: {
    color: GlobalColors.onSurfaceVariant,
    marginTop: 4, // spacing.xs
  },
  listContent: {
    padding: 8, // spacing.sm
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: GlobalColors.surfaceContainerLowest,
    width: '48%',
    borderRadius: 4, // roundness
    marginBottom: 16, // spacing.md
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 180,
  },
  cardInfo: {
    padding: 8, // spacing.sm
  },
  itemName: {
    color: GlobalColors.onSurface,
  },
  itemPrice: {
    color: GlobalColors.onSurfaceVariant,
    marginTop: 4,
  },
  removeBtn: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeIcon: {
    color: GlobalColors.error,
  },
});

export default FavoritesScreen;
