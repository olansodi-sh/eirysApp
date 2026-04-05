import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import { ManropeText, NotoserifText } from '../../components';
import { GlobalColors, theme } from '../../theme/theme';

const SupportScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <NotoserifText style={styles.title} size={32}>
            Soporte
          </NotoserifText>
          <ManropeText style={styles.subtitle} size={14}>
            ¿Cómo podemos iluminar tu camino?
          </ManropeText>
        </View>

        <View style={styles.section}>
          <NotoserifText style={styles.sectionTitle} size={22}>
            Temas Frecuentes
          </NotoserifText>
          <TouchableOpacity style={styles.faqItem}>
            <ManropeText style={styles.faqText} size={16}>
              Envíos y Entregas
            </ManropeText>
            <ManropeText style={styles.chevron} size={18}>
              →
            </ManropeText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.faqItem}>
            <ManropeText style={styles.faqText} size={16}>
              Devoluciones y Reembolsos
            </ManropeText>
            <ManropeText style={styles.chevron} size={18}>
              →
            </ManropeText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.faqItem}>
            <ManropeText style={styles.faqText} size={16}>
              Guía de Tallas Luxury
            </ManropeText>
            <ManropeText style={styles.chevron} size={18}>
              →
            </ManropeText>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <NotoserifText style={styles.sectionTitle} size={22}>
            Envíanos un Mensaje
          </NotoserifText>
          <View style={styles.inputGroup}>
            <ManropeText style={styles.label} size={12}>
              ASUNTO
            </ManropeText>
            <TextInput style={styles.input} placeholder="Ej. Estado de mi pedido" placeholderTextColor={GlobalColors.outline} />
          </View>
          <View style={styles.inputGroup}>
            <ManropeText style={styles.label} size={12}>
              MENSAJE
            </ManropeText>
            <TextInput style={[styles.input, styles.textArea]} placeholder="Escribe tu consulta aquí..." placeholderTextColor={GlobalColors.outline} multiline />
          </View>
          <TouchableOpacity style={[styles.sendButton, theme.shadows.medium]}>
            <ManropeText style={styles.sendButtonText} size={14}>
              ENVIAR MENSAJE
            </ManropeText>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <ManropeText style={styles.footerLabel} size={12}>
            CONTACTO DIRECTO
          </ManropeText>
          <ManropeText style={styles.footerLink} size={14}>
            Concierge: +1 (800) 555-IRIS
          </ManropeText>
          <ManropeText style={styles.footerLink} size={14}>
            Email: support@eirys.com
          </ManropeText>
        </View>
      </ScrollView>
    </SafeAreaView>
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
    paddingBottom: 48, // spacing.xxl
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
  sectionTitle: {
    color: GlobalColors.onSurface,
    marginBottom: 24, // spacing.lg
  },
  faqItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 24, // spacing.lg
    borderBottomWidth: 1,
    borderBottomColor: GlobalColors.surfaceVariant,
  },
  faqText: {
    color: GlobalColors.onSurface,
  },
  chevron: {
    color: GlobalColors.outline,
  },
  inputGroup: {
    marginBottom: 32, // spacing.xl
  },
  label: {
    color: GlobalColors.primary,
    letterSpacing: 2,
    marginBottom: 8, // spacing.sm
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: GlobalColors.outlineVariant,
    paddingVertical: 8, // spacing.sm
    fontFamily: 'Manrope-Regular',
    fontSize: 16,
    color: GlobalColors.onSurface,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  sendButton: {
    backgroundColor: GlobalColors.primary,
    paddingVertical: 16, // spacing.md
    borderRadius: 4, // roundness
    alignItems: 'center',
    marginTop: 16, // spacing.md
  },
  sendButtonText: {
    color: GlobalColors.onPrimary,
    letterSpacing: 2,
  },
  footer: {
    marginTop: 48, // spacing.xxl
    alignItems: 'center',
    paddingBottom: 48, // spacing.xxl
  },
  footerLabel: {
    color: GlobalColors.primary,
    letterSpacing: 2,
    marginBottom: 24, // spacing.lg
    opacity: 0.6,
  },
  footerLink: {
    color: GlobalColors.onSurfaceVariant,
    marginBottom: 8,
  },
});

export default SupportScreen;
