import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import { theme } from '../../theme/theme';

const CheckoutScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Caja</Text>
          <Text style={styles.subtitle}>Finaliza tu curaduría</Text>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Entregando a</Text>
            <TouchableOpacity><Text style={styles.editLink}>Cambiar</Text></TouchableOpacity>
          </View>
          <View style={[styles.card, theme.shadows.soft]}>
            <Text style={styles.cardName}>Iris Smith</Text>
            <Text style={styles.cardText}>123 Luminescent Street, Luxury District</Text>
            <Text style={styles.cardText}>Metrópolis, CP 54321</Text>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Pago</Text>
            <TouchableOpacity><Text style={styles.editLink}>Editar</Text></TouchableOpacity>
          </View>
          <View style={[styles.card, theme.shadows.soft]}>
            <View style={styles.paymentInfo}>
              <View style={styles.cardIcon}>
                <Text style={styles.cardIconText}>VISA</Text>
              </View>
              <View>
                <Text style={styles.cardName}>Visa terminada en 4422</Text>
                <Text style={styles.cardText}>Vence 08/26</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tu Pedido</Text>
          <View style={styles.orderSummary}>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryText}>Subtotal</Text>
              <Text style={[styles.summaryText, styles.summaryAmount]}>$620.00</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryText}>Envío</Text>
              <Text style={[styles.summaryText, styles.summaryAmount]}>GRATIS</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.summaryRow}>
              <Text style={styles.totalLabel}>TOTAL</Text>
              <Text style={styles.totalAmount}>$620.00</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity style={[styles.payButton, theme.shadows.medium]}>
          <Text style={styles.payButtonText}>CONFIRMAR Y PAGAR</Text>
        </TouchableOpacity>
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
    padding: theme.spacing.lg,
  },
  header: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },
  title: {
    fontFamily: theme.typography.fonts.headline,
    fontSize: theme.typography.sizes.headlineLg,
    color: theme.colors.onSurface,
  },
  subtitle: {
    fontFamily: theme.typography.fonts.body,
    fontSize: theme.typography.sizes.bodyMd,
    color: theme.colors.onSurfaceVariant,
    marginTop: 4,
  },
  section: {
    marginBottom: theme.spacing.xxl,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: theme.spacing.md,
  },
  sectionTitle: {
    fontFamily: theme.typography.fonts.headline,
    fontSize: theme.typography.sizes.titleLg,
    color: theme.colors.onSurface,
  },
  editLink: {
    fontFamily: theme.typography.fonts.label,
    fontSize: theme.typography.sizes.labelMd,
    color: theme.colors.primary,
    textDecorationLine: 'underline',
  },
  card: {
    backgroundColor: theme.colors.surfaceContainerLowest,
    padding: theme.spacing.lg,
    borderRadius: theme.roundness,
  },
  cardName: {
    fontFamily: theme.typography.fonts.label,
    fontSize: theme.typography.sizes.bodyLg,
    color: theme.colors.onSurface,
    marginBottom: 4,
  },
  cardText: {
    fontFamily: theme.typography.fonts.body,
    fontSize: theme.typography.sizes.bodyLg,
    color: theme.colors.onSurfaceVariant,
    lineHeight: 24,
  },
  paymentInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardIcon: {
    backgroundColor: theme.colors.primary,
    width: 50,
    height: 32,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing.md,
  },
  cardIconText: {
    color: theme.colors.onPrimary,
    fontSize: 10,
    fontWeight: 'bold',
  },
  orderSummary: {
    marginTop: theme.spacing.md,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: theme.spacing.sm,
  },
  summaryText: {
    fontFamily: theme.typography.fonts.body,
    fontSize: theme.typography.sizes.bodyLg,
    color: theme.colors.onSurfaceVariant,
  },
  summaryAmount: {
    color: theme.colors.onSurface,
  },
  divider: {
    height: 1,
    backgroundColor: theme.colors.outlineVariant,
    marginVertical: theme.spacing.md,
    opacity: 0.3,
  },
  totalLabel: {
    fontFamily: theme.typography.fonts.label,
    fontSize: theme.typography.sizes.titleMd,
    color: theme.colors.onSurface,
    letterSpacing: 2,
  },
  totalAmount: {
    fontFamily: theme.typography.fonts.headline,
    fontSize: theme.typography.sizes.titleLg,
    color: theme.colors.primary,
  },
  payButton: {
    backgroundColor: theme.colors.primary,
    paddingVertical: theme.spacing.md,
    borderRadius: theme.roundness,
    alignItems: 'center',
    marginTop: theme.spacing.lg,
    marginBottom: theme.spacing.xxl,
  },
  payButtonText: {
    fontFamily: theme.typography.fonts.label,
    fontSize: theme.typography.sizes.labelLg,
    color: theme.colors.onPrimary,
    letterSpacing: 2,
  },
});

export default CheckoutScreen;
