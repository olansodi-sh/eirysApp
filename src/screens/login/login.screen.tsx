import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { GlobalColors, theme } from '../../theme/theme';
import NotoserifText from '../../components/texts/notoserif.text';

const LoginScreen = ({ navigation }: { navigation: any }) => {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.header}>
            <NotoserifText style={styles.title} size={46}>
              Bienvenido
            </NotoserifText>
            <Text style={styles.subtitle}>
              Inicia sesión para continuar en la galería
            </Text>
          </View>

          <View style={styles.form}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>CORREO ELECTRÓNICO</Text>
              <TextInput
                style={styles.input}
                placeholder="ejemplo@eirys.com"
                placeholderTextColor={theme.colors.outline}
                keyboardType="email-address"
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>CONTRASEÑA</Text>
              <TextInput
                style={styles.input}
                placeholder="••••••••"
                placeholderTextColor={theme.colors.outline}
                secureTextEntry
              />
            </View>

            <TouchableOpacity style={styles.forgotPassword}>
              <Text style={styles.forgotPasswordText}>
                ¿Olvidaste tu contraseña?
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.loginButton, theme.shadows.medium]}
            >
              <Text style={styles.loginButtonText}>ENTRAR</Text>
            </TouchableOpacity>

            <View style={styles.footer}>
              <Text style={styles.footerText}>¿No tienes una cuenta? </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('RegisterScreen')}
              >
                <Text style={styles.signUpText}>Regístrate</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalColors.background,
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    padding: theme.spacing.xl,
    flexGrow: 1,
    justifyContent: 'center',
  },
  header: {
    marginBottom: theme.spacing.xxl,
  },
  title: {
    color: theme.colors.onSurface,
  },
  subtitle: {
    fontFamily: theme.typography.fonts.body,
    fontSize: theme.typography.sizes.bodyLg,
    color: theme.colors.onSurfaceVariant,
    marginTop: theme.spacing.sm,
  },
  form: {
    marginTop: theme.spacing.lg,
  },
  inputContainer: {
    marginBottom: theme.spacing.lg,
  },
  label: {
    fontFamily: theme.typography.fonts.label,
    fontSize: theme.typography.sizes.labelLg,
    color: theme.colors.primary,
    letterSpacing: 1.5,
    marginBottom: theme.spacing.sm,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.outlineVariant,
    paddingVertical: theme.spacing.sm,
    fontSize: theme.typography.sizes.bodyLg,
    fontFamily: theme.typography.fonts.body,
    color: theme.colors.onSurface,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: theme.spacing.xxl,
  },
  forgotPasswordText: {
    fontFamily: theme.typography.fonts.body,
    fontSize: theme.typography.sizes.bodyMd,
    color: theme.colors.onSurfaceVariant,
    textDecorationLine: 'underline',
  },
  loginButton: {
    backgroundColor: theme.colors.primary,
    paddingVertical: theme.spacing.md,
    borderRadius: theme.roundness,
    alignItems: 'center',
    marginBottom: theme.spacing.lg,
  },
  loginButtonText: {
    fontFamily: theme.typography.fonts.label,
    fontSize: theme.typography.sizes.labelLg,
    color: theme.colors.onPrimary,
    letterSpacing: 2,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: theme.spacing.lg,
  },
  footerText: {
    fontFamily: theme.typography.fonts.body,
    fontSize: theme.typography.sizes.bodyMd,
    color: theme.colors.onSurfaceVariant,
  },
  signUpText: {
    fontFamily: theme.typography.fonts.label,
    fontSize: theme.typography.sizes.bodyMd,
    color: theme.colors.primary,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
