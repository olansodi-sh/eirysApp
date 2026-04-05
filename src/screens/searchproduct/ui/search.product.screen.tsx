import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, FlatList, Image, Dimensions, StatusBar, Modal, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ManropeText, NotoserifText } from '../../../components';
import { GlobalColors } from '../../../theme/theme';

const { width } = Dimensions.get('window');
const COLUMN_WIDTH = (width - 48) / 2;

// Datos dummy de productos
const DUMMY_PRODUCTS = Array.from({ length: 40 }).map((_, index) => ({
  id: index.toString(),
  name: index % 2 === 0 ? 'Nike Air Jordan 1 Premium' : 'Zapa de Lujo "Iris Series"',
  price: (Math.random() * 200 + 100).toFixed(2),
  category: 'Calzado / Boutique',
  image: `https://images.unsplash.com/photo-${1542291026 + index}-3c14194b9f20?auto=format&fit=crop&q=80&w=400`,
  isFreeShipping: index % 3 === 0,
  description: 'Un zapato diseñado para la elegancia y el confort. Fabricado con los mejores materiales de la galería EIRYS.',
}));

const SearchProductScreen = ({ navigation }: { navigation: any }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterModalVisible, setFilterModalVisible] = useState(false);
  const insets = useSafeAreaInsets();

  const filteredProducts = DUMMY_PRODUCTS.filter(product => product.name.toLowerCase().includes(searchQuery.toLowerCase()));

  const renderProductItem = ({ item }: { item: (typeof DUMMY_PRODUCTS)[0] }) => (
    <TouchableOpacity style={styles.card} activeOpacity={0.9} onPress={() => navigation.navigate('DetailScreen', { product: item })}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.image }} style={styles.image} resizeMode="cover" />
        <TouchableOpacity style={styles.favoriteButton}>
          <ManropeText style={styles.favoriteIcon} size={18}>
            ♡
          </ManropeText>
        </TouchableOpacity>
      </View>
      <View style={styles.cardContent}>
        <ManropeText style={styles.priceText} size={16} weight="bold">
          ${item.price}
        </ManropeText>
        <ManropeText style={styles.nameText} size={14} numberOfLines={2}>
          {item.name}
        </ManropeText>
        <ManropeText style={styles.categoryText} size={12}>
          {item.category}
        </ManropeText>
        {item.isFreeShipping && (
          <ManropeText style={styles.shippingText} size={10}>
            ENVÍO GRATIS
          </ManropeText>
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <React.Fragment>
      <StatusBar barStyle="dark-content" backgroundColor={GlobalColors.background} />
      <SafeAreaView style={styles.container}>
        {/* Header con barra de búsqueda */}
        <View style={styles.header}>
          <View style={styles.searchContainer}>
            <ManropeText style={styles.searchIcon} size={18}>
              🔍
            </ManropeText>
            <TextInput style={styles.searchInput} placeholder="Buscar zapatos..." placeholderTextColor={GlobalColors.outline} value={searchQuery} onChangeText={setSearchQuery} />
            {searchQuery.length > 0 && (
              <TouchableOpacity onPress={() => setSearchQuery('')}>
                <ManropeText style={styles.clearIcon} size={18}>
                  ✕
                </ManropeText>
              </TouchableOpacity>
            )}
          </View>
          <TouchableOpacity style={styles.filterButton} onPress={() => setFilterModalVisible(true)}>
            <ManropeText size={18}>⚙️</ManropeText>
          </TouchableOpacity>
        </View>

        {/* Listado de Productos */}
        {filteredProducts.length > 0 ? (
          <FlatList data={filteredProducts} renderItem={renderProductItem} keyExtractor={item => item.id} numColumns={2} contentContainerStyle={styles.listContent} showsVerticalScrollIndicator={false} />
        ) : (
          <View style={styles.emptyContainer}>
            <ManropeText style={styles.emptyIcon} size={60}>
              👟
            </ManropeText>
            <NotoserifText style={styles.emptyText} size={22}>
              No encontramos productos
            </NotoserifText>
            <ManropeText style={styles.emptySubtext} size={14}>
              Prueba con otros términos de búsqueda
            </ManropeText>
          </View>
        )}

        {/* Modal de Filtros (Simulado) */}
        <Modal animationType="slide" transparent={true} visible={isFilterModalVisible} onRequestClose={() => setFilterModalVisible(false)}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <View style={styles.modalHeader}>
                <NotoserifText size={22}>Filtros</NotoserifText>
                <TouchableOpacity onPress={() => setFilterModalVisible(false)}>
                  <ManropeText size={22}>✕</ManropeText>
                </TouchableOpacity>
              </View>
              <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.filterSection}>
                  <ManropeText style={styles.filterTitle} size={16} weight="bold">
                    Talla
                  </ManropeText>
                  <View style={styles.filterOptions}>
                    {['38', '39', '40', '41', '42'].map(t => (
                      <View key={t} style={styles.filterChip}>
                        <ManropeText size={14}>{t}</ManropeText>
                      </View>
                    ))}
                  </View>
                </View>
                <View style={styles.filterSection}>
                  <ManropeText style={styles.filterTitle} size={16} weight="bold">
                    Precio
                  </ManropeText>
                  <View style={styles.filterOptions}>
                    {['$100 - $200', '$200 - $500', '$500+'].map(p => (
                      <View key={p} style={styles.filterChip}>
                        <ManropeText size={14}>{p}</ManropeText>
                      </View>
                    ))}
                  </View>
                </View>
                <View style={styles.filterSection}>
                  <ManropeText style={styles.filterTitle} size={16} weight="bold">
                    Color
                  </ManropeText>
                  <View style={styles.filterOptions}>
                    {['Negro', 'Blanco', 'Marrón', 'Azul'].map(c => (
                      <View key={c} style={styles.filterChip}>
                        <ManropeText size={14}>{c}</ManropeText>
                      </View>
                    ))}
                  </View>
                </View>
              </ScrollView>
              <TouchableOpacity style={[styles.applyButton, { marginBottom: insets.bottom + 10 }]} onPress={() => setFilterModalVisible(false)}>
                <ManropeText style={styles.applyButtonText} size={16}>
                  APLICAR FILTROS
                </ManropeText>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
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
    marginTop: '8%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  searchContainer: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    marginRight: 10,
    borderRadius: 12,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderColor: '#eee',
    backgroundColor: GlobalColors.surfaceContainerLowest,
  },
  searchIcon: {
    opacity: 0.5,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Manrope-Regular',
    color: GlobalColors.onSurface,
  },
  clearIcon: {
    opacity: 0.5,
  },
  filterButton: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 12,
    alignItems: 'center',
    borderColor: '#eee',
    justifyContent: 'center',
    backgroundColor: GlobalColors.surfaceContainerLowest,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 100, // Espacio para el Tab Bar flotante
  },
  card: {
    margin: 8,
    borderRadius: 16,
    overflow: 'hidden',
    width: COLUMN_WIDTH,
    backgroundColor: GlobalColors.surface,
    // Sombra sutil pero premium
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  imageContainer: {
    width: '100%',
    height: COLUMN_WIDTH * 1.25,
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  favoriteButton: {
    top: 10,
    right: 10,
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    position: 'absolute',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  favoriteIcon: {
    color: GlobalColors.onSurface,
  },
  cardContent: {
    padding: 12,
  },
  priceText: {
    color: GlobalColors.onSurface,
  },
  nameText: {
    color: GlobalColors.onSurface,
    marginTop: 4,
  },
  categoryText: {
    marginTop: 4,
    opacity: 0.7,
    color: GlobalColors.onSurfaceVariant,
  },
  shippingText: {
    marginTop: 8,
    fontWeight: 'bold',
    color: GlobalColors.primary,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 50,
    justifyContent: 'center',
  },
  emptyIcon: {
    opacity: 0.2,
    marginBottom: 20,
  },
  emptyText: {
    textAlign: 'center',
    color: GlobalColors.onSurface,
  },
  emptySubtext: {
    marginTop: 10,
    textAlign: 'center',
    color: GlobalColors.onSurfaceVariant,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    padding: 24,
    maxHeight: '85%',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    backgroundColor: GlobalColors.background,
  },
  modalHeader: {
    marginBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  filterSection: {
    marginBottom: 24,
  },
  filterTitle: {
    marginBottom: 12,
    color: GlobalColors.onSurface,
  },
  filterOptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  filterChip: {
    borderWidth: 1,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 20,
    paddingVertical: 10,
    borderColor: '#eee',
    paddingHorizontal: 20,
    backgroundColor: GlobalColors.surfaceContainerLowest,
  },
  applyButton: {
    marginTop: 20,
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
    backgroundColor: GlobalColors.primary,
  },
  applyButtonText: {
    color: GlobalColors.onPrimary,
    fontWeight: 'bold',
  },
});

export default SearchProductScreen;
