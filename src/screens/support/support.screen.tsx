import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from 'react-native';
import { theme } from '../../theme/theme';

const SupportScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Soporte</Text>
          <Text style={styles.subtitle}>¿Cómo podemos iluminar tu camino?</Text>
        </View>

        <View style={styles.section}>
            <Text style={styles.sectionTitle}>Temas Frecuentes</Text>
            <TouchableOpacity style={styles.faqItem}>
                <Text style={styles.faqText}>Envíos y Entregas</Text>
                <Text style={styles.chevron}>→</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.faqItem}>
                <Text style={styles.faqText}>Devoluciones y Reembolsos</Text>
                <Text style={styles.chevron}>→</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.faqItem}>
                <Text style={styles.faqText}>Guía de Tallas Luxury</Text>
                <Text style={styles.chevron}>→</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.section}>
            <Text style={styles.sectionTitle}>Envíanos un Mensaje</Text>
            <View style={styles.inputGroup}>
                <Text style={styles.label}>ASUNTO</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Ej. Estado de mi pedido"
                    placeholderTextColor={theme.colors.outline}
                />
            </View>
            <View style={styles.inputGroup}>
                <Text style={styles.label}>MENSAJE</Text>
                <TextInput 
                    style={[styles.input, styles.textArea]}
                    placeholder="Escribe tu consulta aquí..."
                    placeholderTextColor={theme.colors.outline}
                    multiline
                />
            </View>
            <TouchableOpacity style={[styles.sendButton, theme.shadows.medium]}>
                <Text style={styles.sendButtonText}>ENVIAR MENSAJE</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.footer}>
            <Text style={styles.footerLabel}>CONTACTO DIRECTO</Text>
            <Text style={styles.footerLink}>Concierge: +1 (800) 555-IRIS</Text>
            <Text style={styles.footerLink}>Email: support@eirys.com</Text>
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
    padding: theme.spacing.lg,
  },
  header: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xxl,
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
  sectionTitle: {
    fontFamily: theme.typography.fonts.headline,
    fontSize: theme.typography.sizes.titleLg,
    color: theme.colors.onSurface,
    marginBottom: theme.spacing.lg,
  },
  faqItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: theme.spacing.lg,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.surfaceContainer,
  },
  faqText: {
    fontFamily: theme.typography.fonts.body,
    fontSize: theme.typography.sizes.bodyLg,
    color: theme.colors.onSurface,
  },
  chevron: {
      color: theme.colors.outline,
      fontSize: 18,
  },
  inputGroup: {
      marginBottom: theme.spacing.xl,
  },
  label: {
    fontFamily: theme.typography.fonts.label,
    fontSize: theme.typography.sizes.labelMd,
    color: theme.colors.primary,
    letterSpacing: 2,
    marginBottom: theme.spacing.sm,
  },
  input: {
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.outlineVariant,
      paddingVertical: theme.spacing.sm,
      fontFamily: theme.typography.fonts.body,
      fontSize: theme.typography.sizes.bodyLg,
      color: theme.colors.onSurface,
  },
  textArea: {
      height: 100,
      textAlignVertical: 'top',
  },
  sendButton: {
    backgroundColor: theme.colors.primary,
    paddingVertical: theme.spacing.md,
    borderRadius: theme.roundness,
    alignItems: 'center',
    marginTop: theme.spacing.md,
  },
  sendButtonText: {
    fontFamily: theme.typography.fonts.label,
    fontSize: theme.typography.sizes.labelLg,
    color: theme.colors.onPrimary,
    letterSpacing: 2,
  },
  footer: {
      marginTop: theme.spacing.xxl,
      alignItems: 'center',
      paddingBottom: theme.spacing.xxl,
  },
  footerLabel: {
    fontFamily: theme.typography.fonts.label,
    fontSize: theme.typography.sizes.labelMd,
    color: theme.colors.primary,
    letterSpacing: 2,
    marginBottom: theme.spacing.md,
    opacity: 0.6,
  },
  footerLink: {
    fontFamily: theme.typography.fonts.body,
    fontSize: theme.typography.sizes.bodyMd,
    color: theme.colors.onSurfaceVariant,
    marginBottom: 8,
  },
});

export default SupportScreen;
