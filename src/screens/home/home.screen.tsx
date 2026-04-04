import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
  Animated,
  StatusBar,
} from 'react-native';
import { theme } from '../../theme/theme';


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
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Header - Editorial Style */}
        <Animated.View style={[styles.header, { opacity: fadeAnim, transform: [{ translateY: slideUp }] }]}>
          <Text style={styles.eyebrow}>EIRYS BOUTIQUE</Text>
          <Text style={styles.headline}>The Luminescent Gallery</Text>
          <Text style={styles.subHeadline}>Camina con luz propia</Text>
        </Animated.View>

        {/* Hero Section - Layer Physics */}
        <Animated.View style={[styles.heroCard, theme.shadows.medium, { opacity: fadeAnim }]}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=1000' }}
            style={styles.heroImage}
            resizeMode="cover"
          />
          <View style={styles.heroOverlay}>
            <Text style={styles.heroBrand}>IRYS 2024</Text>
            <TouchableOpacity 
                style={styles.ctaButton} 
                activeOpacity={0.8}
                onPress={() => navigation.navigate('Checkout')}
            >
              <Text style={styles.ctaLabel}>DESCUBRIR COLECCIÓN</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>

        {/* Product Grid - Bento Grid Style */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Curaduría Editorial</Text>
        </View>

        <View style={styles.bentoGrid}>
          <View style={styles.bentoColumn}>
            <View style={[styles.bentoItemSmall, theme.shadows.soft]}>
                <Image
                    source={{ uri: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=600' }}
                    style={styles.productImage}
                />
              <Text style={styles.productName}>Breeze Step</Text>
            </View>
            <View style={[styles.bentoItemLarge, theme.shadows.soft]}>
                <Image
                    source={{ uri: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80&w=600' }}
                    style={styles.productImage}
                />
              <Text style={styles.productName}>Silk Glow</Text>
            </View>
          </View>
          <View style={styles.bentoColumn}>
            <View style={[styles.bentoItemLarge, theme.shadows.soft]}>
                <Image
                    source={{ uri: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=600' }}
                    style={styles.productImage}
                />
              <Text style={styles.productName}>Essence</Text>
            </View>
            <View style={[styles.bentoItemSmall, theme.shadows.soft]}>
                <Image
                    source={{ uri: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=600' }}
                    style={styles.productImage}
                />
              <Text style={styles.productName}>Urban Light</Text>
            </View>
          </View>
        </View>

        {/* Newsletter/Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Suscríbete para recibir noticias de la Colección Iris</Text>
          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.secondaryLabel}>UNIRSE A LA LISTA</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  scrollContent: {
    paddingBottom: theme.spacing.xxl,
  },
  header: {
    paddingHorizontal: theme.spacing.lg,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.md,
  },
  eyebrow: {
    fontFamily: theme.typography.fonts.label,
    fontSize: theme.typography.sizes.labelMd,
    color: theme.colors.primary,
    letterSpacing: 2,
    marginBottom: theme.spacing.xs,
  },
  headline: {
    fontFamily: theme.typography.fonts.headline,
    fontSize: theme.typography.sizes.headlineLg,
    color: theme.colors.onSurface,
    lineHeight: 40,
  },
  subHeadline: {
    fontFamily: theme.typography.fonts.body,
    fontSize: theme.typography.sizes.titleMd,
    color: theme.colors.onSurfaceVariant,
    marginTop: theme.spacing.xs,
  },
  heroCard: {
    margin: theme.spacing.lg,
    borderRadius: theme.roundness,
    overflow: 'hidden',
    height: 450,
    backgroundColor: theme.colors.surface,
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
    padding: theme.spacing.lg,
    backgroundColor: 'rgba(250, 249, 247, 0.7)',
  },
  heroBrand: {
    fontFamily: theme.typography.fonts.headline,
    fontSize: theme.typography.sizes.displayMd,
    color: theme.colors.primary,
    opacity: 0.8,
  },
  ctaButton: {
    backgroundColor: theme.colors.primary,
    paddingVertical: theme.spacing.md,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing.md,
    borderRadius: theme.roundness,
  },
  ctaLabel: {
    fontFamily: theme.typography.fonts.label,
    color: theme.colors.onPrimary,
    fontSize: theme.typography.sizes.labelLg,
    letterSpacing: 1.5,
  },
  sectionHeader: {
    paddingHorizontal: theme.spacing.lg,
    marginVertical: theme.spacing.lg,
  },
  sectionTitle: {
    fontFamily: theme.typography.fonts.headline,
    fontSize: theme.typography.sizes.titleLg,
    color: theme.colors.onSurface,
  },
  bentoGrid: {
    flexDirection: 'row',
    paddingHorizontal: theme.spacing.sm,
  },
  bentoColumn: {
    flex: 1,
    paddingHorizontal: theme.spacing.xs,
  },
  bentoItemSmall: {
    backgroundColor: theme.colors.surfaceContainerLowest,
    height: 180,
    borderRadius: theme.roundness,
    marginBottom: theme.spacing.sm,
    padding: theme.spacing.sm,
    overflow: 'hidden',
  },
  bentoItemLarge: {
    backgroundColor: theme.colors.surfaceContainerLowest,
    height: 280,
    borderRadius: theme.roundness,
    marginBottom: theme.spacing.sm,
    padding: theme.spacing.sm,
    overflow: 'hidden',
  },
  productImage: {
      width: '100%',
      height: '80%',
      borderRadius: theme.roundness,
  },
  productName: {
    fontFamily: theme.typography.fonts.label,
    fontSize: theme.typography.sizes.labelLg,
    color: theme.colors.onSurface,
    marginTop: theme.spacing.sm,
  },
  footer: {
    marginTop: theme.spacing.xxl,
    paddingHorizontal: theme.spacing.xxl,
    alignItems: 'center',
  },
  footerText: {
    fontFamily: theme.typography.fonts.body,
    fontSize: theme.typography.sizes.bodyMd,
    color: theme.colors.onSurfaceVariant,
    textAlign: 'center',
    lineHeight: 22,
  },
  secondaryButton: {
    marginTop: theme.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.primary,
    paddingBottom: 2,
  },
  secondaryLabel: {
    fontFamily: theme.typography.fonts.label,
    color: theme.colors.primary,
    fontSize: theme.typography.sizes.labelMd,
    letterSpacing: 1,
  },
});

export default HomeScreen;
