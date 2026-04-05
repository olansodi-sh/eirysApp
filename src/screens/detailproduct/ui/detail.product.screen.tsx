import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Image, Dimensions, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ManropeText, NotoserifText } from '../../../components';
import { GlobalColors, theme } from '../../../theme/theme';

const { width } = Dimensions.get('window');

const DetailProductScreen = ({ route, navigation }: { route: any; navigation: any }) => {
  const { product } = route.params || {
    product: {
      name: 'Nike Air Jordan 1 Premium',
      price: '199.99',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1000',
      description: 'Un zapato diseñado para la elegancia y el confort. Fabricado con los mejores materiales de la galería EIRYS.',
    },
  };

  const [selectedSize, setSelectedSize] = useState('40');
  const [isFavorite, setIsFavorite] = useState(false);
  const insets = useSafeAreaInsets();

  const sizes = ['38', '39', '40', '41', '42', '43'];

  return (
    <React.Fragment>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          {/* Imagen del Producto */}
          <View style={styles.imageContainer}>
            <Image source={{ uri: product.image }} style={styles.image} resizeMode="cover" />

            {/* Botones Flotantes Superiores - Corregidos con Insets */}
            <View style={[styles.headerButtons, { top: insets.top + 10 }]}>
              <TouchableOpacity style={styles.circleButton} onPress={() => navigation.goBack()}>
                <ManropeText size={18}>←</ManropeText>
              </TouchableOpacity>
              <TouchableOpacity style={styles.circleButton} onPress={() => setIsFavorite(!isFavorite)}>
                <ManropeText style={{ color: isFavorite ? GlobalColors.primary : GlobalColors.onSurface }} size={18}>
                  {isFavorite ? '♥' : '♡'}
                </ManropeText>
              </TouchableOpacity>
            </View>
          </View>

          {/* Información del Producto */}
          <View style={styles.infoContainer}>
            <View style={styles.titleRow}>
              <NotoserifText style={styles.name} size={28}>
                {product.name}
              </NotoserifText>
              <NotoserifText style={styles.price} size={24} weight="bold">
                ${product.price}
              </NotoserifText>
            </View>

            <ManropeText style={styles.description} size={16}>
              {product.description}
            </ManropeText>

            {/* Selector de Talla */}
            <View style={styles.sizeSection}>
              <ManropeText style={styles.sectionTitle} size={16} weight="bold">
                Selecciona tu talla
              </ManropeText>
              <View style={styles.sizeGrid}>
                {sizes.map(size => (
                  <TouchableOpacity key={size} style={[styles.sizeChip, selectedSize === size && styles.selectedSizeChip]} onPress={() => setSelectedSize(size)}>
                    <ManropeText style={[styles.sizeText, selectedSize === size && styles.selectedSizeText]} size={14}>
                      {size}
                    </ManropeText>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>
        </ScrollView>

        {/* Botón Inferior Fijo */}
        <View style={[styles.bottomBar, { paddingBottom: insets.bottom + 16 }]}>
          <TouchableOpacity
            style={[styles.addToCartButton, theme.shadows.medium]}
            onPress={() => {
              // Lógica para agregar al carrito
            }}
          >
            <ManropeText style={styles.addToCartText} size={16} weight="bold">
              AGREGAR AL CARRITO
            </ManropeText>
          </TouchableOpacity>
        </View>
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalColors.background,
  },
  scrollContent: {
    paddingBottom: 120,
  },
  imageContainer: {
    width: width,
    height: width * 1.25, // Un poco más alto para mejorar la proporción
    backgroundColor: '#F5F5F5',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  headerButtons: {
    position: 'absolute',
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  circleButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  infoContainer: {
    padding: 24,
    marginTop: -30,
    backgroundColor: GlobalColors.background,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
  titleRow: {
    marginBottom: 20,
  },
  name: {
    color: GlobalColors.onSurface,
    lineHeight: 34,
  },
  price: {
    color: GlobalColors.primary,
    marginTop: 8,
  },
  description: {
    color: GlobalColors.onSurfaceVariant,
    lineHeight: 24,
    marginBottom: 32,
    opacity: 0.8,
  },
  sizeSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    color: GlobalColors.onSurface,
    marginBottom: 16,
  },
  sizeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -4,
  },
  sizeChip: {
    width: (width - 80) / 4,
    height: 48,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4,
    backgroundColor: GlobalColors.surfaceContainerLowest,
  },
  selectedSizeChip: {
    backgroundColor: GlobalColors.primary,
    borderColor: GlobalColors.primary,
  },
  sizeText: {
    color: GlobalColors.onSurface,
  },
  selectedSizeText: {
    color: GlobalColors.onPrimary,
    fontWeight: 'bold',
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: GlobalColors.background,
    paddingHorizontal: 24,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  addToCartButton: {
    backgroundColor: GlobalColors.primary,
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addToCartText: {
    color: GlobalColors.onPrimary,
    letterSpacing: 1.5,
  },
});

export default DetailProductScreen;
