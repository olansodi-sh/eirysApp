import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, ScrollView, SafeAreaView, Animated, StatusBar } from 'react-native';
import { ManropeText, NotoserifText } from '../../components';
import { GlobalColors, theme } from '../../theme/theme';

const HomeScreen = ({ navigation }: { navigation: any }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideUp = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(slideUp, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim, slideUp]);

  return (
    <React.Fragment>
      <StatusBar barStyle="dark-content" backgroundColor={GlobalColors.background} />
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          {/* Header - Editorial Style */}
          <Animated.View style={[styles.header, { opacity: fadeAnim, transform: [{ translateY: slideUp }] }]}>
            <ManropeText style={styles.eyebrow} size={12}>
              EIRYS BOUTIQUE
            </ManropeText>
            <NotoserifText style={styles.headline} size={32}>
              The Luminescent Gallery
            </NotoserifText>
            <ManropeText style={styles.subHeadline} size={16}>
              Camina con luz propia
            </ManropeText>
          </Animated.View>

          {/* Hero Section - Layer Physics */}
          <Animated.View style={[styles.heroCard, theme.shadows.medium, { opacity: fadeAnim }]}>
            <Image source={{ uri: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=1000' }} style={styles.heroImage} resizeMode="cover" />
            <View style={styles.heroOverlay}>
              <NotoserifText style={styles.heroBrand} size={45}>
                IRYS 2024
              </NotoserifText>
              <TouchableOpacity style={styles.ctaButton} activeOpacity={0.8} onPress={() => navigation.navigate('Checkout')}>
                <ManropeText style={styles.ctaLabel} size={14}>
                  DESCUBRIR COLECCIÓN
                </ManropeText>
              </TouchableOpacity>
            </View>
          </Animated.View>

          {/* Product Grid - Bento Grid Style */}
          <View style={styles.sectionHeader}>
            <NotoserifText style={styles.sectionTitle} size={22}>
              Curaduría Editorial
            </NotoserifText>
          </View>

          <View style={styles.bentoGrid}>
            <View style={styles.bentoColumn}>
              <View style={[styles.bentoItemSmall, theme.shadows.soft]}>
                <Image source={{ uri: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=600' }} style={styles.productImage} />
                <ManropeText style={styles.productName} size={14}>
                  Breeze Step
                </ManropeText>
              </View>
              <View style={[styles.bentoItemLarge, theme.shadows.soft]}>
                <Image source={{ uri: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80&w=600' }} style={styles.productImage} />
                <ManropeText style={styles.productName} size={14}>
                  Silk Glow
                </ManropeText>
              </View>
            </View>
            <View style={styles.bentoColumn}>
              <View style={[styles.bentoItemLarge, theme.shadows.soft]}>
                <Image source={{ uri: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=600' }} style={styles.productImage} />
                <ManropeText style={styles.productName} size={14}>
                  Essence
                </ManropeText>
              </View>
              <View style={[styles.bentoItemSmall, theme.shadows.soft]}>
                <Image source={{ uri: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=600' }} style={styles.productImage} />
                <ManropeText style={styles.productName} size={14}>
                  Urban Light
                </ManropeText>
              </View>
            </View>
          </View>

          {/* Newsletter/Footer */}
          <View style={styles.footer}>
            <ManropeText style={styles.footerText} size={14}>
              Suscríbete para recibir noticias de la Colección Iris
            </ManropeText>
            <TouchableOpacity style={styles.secondaryButton}>
              <ManropeText style={styles.secondaryLabel} size={12}>
                UNIRSE A LA LISTA
              </ManropeText>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalColors.background,
  },
  scrollContent: {
    paddingBottom: 48, // spacing.xxl
  },
  header: {
    paddingHorizontal: 24, // spacing.lg
    paddingTop: 32, // spacing.xl
    paddingBottom: 16, // spacing.md
  },
  eyebrow: {
    color: GlobalColors.primary,
    letterSpacing: 2,
    marginBottom: 4, // spacing.xs
  },
  headline: {
    color: GlobalColors.onSurface,
    lineHeight: 40,
  },
  subHeadline: {
    color: GlobalColors.onSurfaceVariant,
    marginTop: 4, // spacing.xs
  },
  heroCard: {
    margin: 24, // spacing.lg
    borderRadius: 4, // roundness
    overflow: 'hidden',
    height: 450,
    backgroundColor: GlobalColors.surface,
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  heroOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 24, // spacing.lg
    backgroundColor: 'rgba(250, 249, 247, 0.7)',
  },
  heroBrand: {
    color: GlobalColors.primary,
    opacity: 0.8,
  },
  ctaButton: {
    backgroundColor: GlobalColors.primary,
    paddingVertical: 16, // spacing.md
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16, // spacing.md
    borderRadius: 4, // roundness
  },
  ctaLabel: {
    color: GlobalColors.onPrimary,
    letterSpacing: 1.5,
  },
  sectionHeader: {
    paddingHorizontal: 24, // spacing.lg
    marginVertical: 24, // spacing.lg
  },
  sectionTitle: {
    color: GlobalColors.onSurface,
  },
  bentoGrid: {
    flexDirection: 'row',
    paddingHorizontal: 8, // spacing.sm
  },
  bentoColumn: {
    flex: 1,
    paddingHorizontal: 4, // spacing.xs
  },
  bentoItemSmall: {
    backgroundColor: GlobalColors.surfaceContainerLowest,
    height: 180,
    borderRadius: 4, // roundness
    marginBottom: 8, // spacing.sm
    padding: 8, // spacing.sm
    overflow: 'hidden',
  },
  bentoItemLarge: {
    backgroundColor: GlobalColors.surfaceContainerLowest,
    height: 280,
    borderRadius: 4, // roundness
    marginBottom: 8, // spacing.sm
    padding: 8, // spacing.sm
    overflow: 'hidden',
  },
  productImage: {
    width: '100%',
    height: '80%',
    borderRadius: 4, // roundness
  },
  productName: {
    color: GlobalColors.onSurface,
    marginTop: 8, // spacing.sm
  },
  footer: {
    marginTop: 48, // spacing.xxl
    paddingHorizontal: 48, // spacing.xxl
    alignItems: 'center',
  },
  footerText: {
    color: GlobalColors.onSurfaceVariant,
    textAlign: 'center',
    lineHeight: 22,
  },
  secondaryButton: {
    marginTop: 16, // spacing.md
    borderBottomWidth: 1,
    borderBottomColor: GlobalColors.primary,
    paddingBottom: 2,
  },
  secondaryLabel: {
    color: GlobalColors.primary,
    letterSpacing: 1,
  },
});

export default HomeScreen;
