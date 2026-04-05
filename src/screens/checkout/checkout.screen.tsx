import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { ManropeText, NotoserifText } from '../../components';
import { GlobalColors, theme } from '../../theme/theme';

const CheckoutScreen = () => {
  return (
    <React.Fragment>
      <StatusBar barStyle="dark-content" backgroundColor={GlobalColors.background} />
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.header}>
            <NotoserifText style={styles.title} size={32}>
              Caja
            </NotoserifText>
            <ManropeText style={styles.subtitle} size={14}>
              Finaliza tu curaduría
            </ManropeText>
          </View>

          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <NotoserifText style={styles.sectionTitle} size={22}>
                Entregando a
              </NotoserifText>
              <TouchableOpacity>
                <ManropeText style={styles.editLink} size={12}>
                  Cambiar
                </ManropeText>
              </TouchableOpacity>
            </View>
            <View style={[styles.card, theme.shadows.soft]}>
              <ManropeText style={styles.cardName} size={16}>
                Iris Smith
              </ManropeText>
              <ManropeText style={styles.cardText} size={16}>
                123 Luminescent Street, Luxury District
              </ManropeText>
              <ManropeText style={styles.cardText} size={16}>
                Metrópolis, CP 54321
              </ManropeText>
            </View>
          </View>

          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <NotoserifText style={styles.sectionTitle} size={22}>
                Pago
              </NotoserifText>
              <TouchableOpacity>
                <ManropeText style={styles.editLink} size={12}>
                  Editar
                </ManropeText>
              </TouchableOpacity>
            </View>
            <View style={[styles.card, theme.shadows.soft]}>
              <View style={styles.paymentInfo}>
                <View style={styles.cardIcon}>
                  <ManropeText style={styles.cardIconText} size={10}>
                    VISA
                  </ManropeText>
                </View>
                <View>
                  <ManropeText style={styles.cardName} size={16}>
                    Visa terminada en 4422
                  </ManropeText>
                  <ManropeText style={styles.cardText} size={16}>
                    Vence 08/26
                  </ManropeText>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <NotoserifText style={styles.sectionTitle} size={22}>
              Tu Pedido
            </NotoserifText>
            <View style={styles.orderSummary}>
              <View style={styles.summaryRow}>
                <ManropeText style={styles.summaryText} size={16}>
                  Subtotal
                </ManropeText>
                <ManropeText style={[styles.summaryText, styles.summaryAmount]} size={16}>
                  $620.00
                </ManropeText>
              </View>
              <View style={styles.summaryRow}>
                <ManropeText style={styles.summaryText} size={16}>
                  Envío
                </ManropeText>
                <ManropeText style={[styles.summaryText, styles.summaryAmount]} size={16}>
                  GRATIS
                </ManropeText>
              </View>
              <View style={styles.divider} />
              <View style={styles.summaryRow}>
                <ManropeText style={styles.totalLabel} size={16}>
                  TOTAL
                </ManropeText>
                <NotoserifText style={styles.totalAmount} size={22}>
                  $620.00
                </NotoserifText>
              </View>
            </View>
          </View>

          <TouchableOpacity style={[styles.payButton, theme.shadows.medium]}>
            <ManropeText style={styles.payButtonText} size={14}>
              CONFIRMAR Y PAGAR
            </ManropeText>
          </TouchableOpacity>
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
    padding: 24, // spacing.lg
  },
  header: {
    paddingTop: 32, // spacing.xl
    paddingBottom: 32, // spacing.xl
  },
  title: {
    color: GlobalColors.onSurface,
  },
  subtitle: {
    color: GlobalColors.onSurfaceVariant,
    marginTop: 4,
  },
  section: {
    marginBottom: 48, // spacing.xxl
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 16, // spacing.md
  },
  sectionTitle: {
    color: GlobalColors.onSurface,
  },
  editLink: {
    color: GlobalColors.primary,
    textDecorationLine: 'underline',
  },
  card: {
    backgroundColor: GlobalColors.surfaceContainerLowest,
    padding: 24, // spacing.lg
    borderRadius: 4, // roundness
  },
  cardName: {
    color: GlobalColors.onSurface,
    marginBottom: 4,
  },
  cardText: {
    color: GlobalColors.onSurfaceVariant,
    lineHeight: 24,
  },
  paymentInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardIcon: {
    backgroundColor: GlobalColors.primary,
    width: 50,
    height: 32,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16, // spacing.md
  },
  cardIconText: {
    color: GlobalColors.onPrimary,
    fontWeight: 'bold',
  },
  orderSummary: {
    marginTop: 16, // spacing.md
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8, // spacing.sm
  },
  summaryText: {
    color: GlobalColors.onSurfaceVariant,
  },
  summaryAmount: {
    color: GlobalColors.onSurface,
  },
  divider: {
    height: 1,
    backgroundColor: GlobalColors.outlineVariant,
    marginVertical: 16, // spacing.md
    opacity: 0.3,
  },
  totalLabel: {
    color: GlobalColors.onSurface,
    letterSpacing: 2,
  },
  totalAmount: {
    color: GlobalColors.primary,
  },
  payButton: {
    backgroundColor: GlobalColors.primary,
    paddingVertical: 16, // spacing.md
    borderRadius: 4, // roundness
    alignItems: 'center',
    marginTop: 24, // spacing.lg
    marginBottom: 48, // spacing.xxl
  },
  payButtonText: {
    color: GlobalColors.onPrimary,
    letterSpacing: 2,
  },
});

export default CheckoutScreen;
