import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { GlobalColors, theme } from '../../theme/theme';
import { ManropeText, NotoserifText } from '../../components';

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
            <ManropeText style={styles.subtitle} size={16}>
              Inicia sesión para continuar en la galería
            </ManropeText>
          </View>

          <View style={styles.form}>
            <View style={styles.inputContainer}>
              <ManropeText style={styles.label} size={14}>
                CORREO ELECTRÓNICO
              </ManropeText>
              <TextInput
                style={styles.input}
                placeholder="ejemplo@eirys.com"
                placeholderTextColor={theme.colors.outline}
                keyboardType="email-address"
              />
            </View>

            <View style={styles.inputContainer}>
              <ManropeText style={styles.label} size={14}>
                CONTRASEÑA
              </ManropeText>
              <TextInput
                style={styles.input}
                placeholder="••••••••"
                placeholderTextColor={theme.colors.outline}
                secureTextEntry
              />
            </View>

            <TouchableOpacity style={styles.forgotPassword}>
              <ManropeText style={styles.forgotPasswordText} size={14}>
                ¿Olvidaste tu contraseña?
              </ManropeText>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.loginButton, theme.shadows.medium]}
            >
              <ManropeText style={styles.loginButtonText} size={14}>
                ENTRAR
              </ManropeText>
            </TouchableOpacity>

            <View style={styles.footer}>
              <ManropeText style={styles.footerText} size={14}>
                ¿No tienes una cuenta?{' '}
              </ManropeText>
              <TouchableOpacity
                onPress={() => navigation.navigate('RegisterScreen')}
              >
                <ManropeText style={styles.signUpText} size={14}>
                  Regístrate
                </ManropeText>
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
    flexGrow: 1,
    width: '86%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  header: {
    width: '100%',
    marginBottom: '10%',
  },
  title: {
    color: GlobalColors.onSurface,
  },
  subtitle: {
    marginTop: '2%',
    color: GlobalColors.onSurfaceVariant,
  },
  form: {
    marginTop: '10%',
  },
  inputContainer: {
    marginBottom: '7%',
  },
  label: {
    letterSpacing: 1.5,
    marginBottom: '2%',
    color: GlobalColors.primary,
  },
  input: {
    fontSize: 16,
    borderBottomWidth: 1,
    paddingVertical: '3%',
    fontFamily: 'Manrope-Regular',
    color: GlobalColors.onSurface,
    borderBottomColor: GlobalColors.outlineVariant,
  },
  forgotPassword: {
    marginBottom: '15%',
    alignSelf: 'flex-end',
  },
  forgotPasswordText: {
    textDecorationLine: 'underline',
    color: GlobalColors.onSurfaceVariant,
  },
  loginButton: {
    borderRadius: 4,
    marginBottom: '10%',
    alignItems: 'center',
    paddingVertical: '3%',
    backgroundColor: GlobalColors.primary,
  },
  loginButtonText: {
    letterSpacing: 2,
    color: GlobalColors.onPrimary,
  },
  footer: {
    marginTop: '10%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    color: GlobalColors.onSurfaceVariant,
  },
  signUpText: {
    fontWeight: 'bold',
    color: GlobalColors.primary,
  },
});

export default LoginScreen;
