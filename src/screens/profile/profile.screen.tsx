import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { theme } from '../../theme/theme';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
            <View style={[styles.avatarContainer, theme.shadows.medium]}>
                <Image 
                    source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200' }}
                    style={styles.avatar}
                />
            </View>
            <Text style={styles.userName}>Iris Peterson</Text>
            <Text style={styles.userEmail}>iris.p@luminescent.com</Text>
            <TouchableOpacity style={styles.editBtn}>
                <Text style={styles.editBtnText}>EDITAR PERFIL</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.menu}>
            <Text style={styles.menuTitle}>MI EXPERIENCIA</Text>
            
            <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuItemText}>Mis Pedidos</Text>
                <Text style={styles.chevron}>→</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuItemText}>Libreta de Direcciones</Text>
                <Text style={styles.chevron}>→</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuItemText}>Métodos de Pago</Text>
                <Text style={styles.chevron}>→</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuItemText}>Preferencias</Text>
                <Text style={styles.chevron}>→</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.logoutSection}>
            <TouchableOpacity style={styles.logoutBtn}>
                <Text style={styles.logoutBtnText}>CERRAR SESIÓN</Text>
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
    alignItems: 'center',
    paddingTop: theme.spacing.xxl,
    backgroundColor: theme.colors.surface,
    paddingBottom: theme.spacing.xxl,
  },
  avatarContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: theme.colors.surfaceContainerLowest,
    padding: 4,
    marginBottom: theme.spacing.lg,
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 56,
  },
  userName: {
    fontFamily: theme.typography.fonts.headline,
    fontSize: theme.typography.sizes.headlineMd,
    color: theme.colors.onSurface,
  },
  userEmail: {
    fontFamily: theme.typography.fonts.body,
    fontSize: theme.typography.sizes.bodyLg,
    color: theme.colors.onSurfaceVariant,
    marginTop: 4,
  },
  editBtn: {
      marginTop: theme.spacing.lg,
      borderWidth: 1,
      borderColor: theme.colors.outlineVariant,
      paddingHorizontal: theme.spacing.lg,
      paddingVertical: theme.spacing.sm,
      borderRadius: theme.roundness,
  },
  editBtnText: {
    fontFamily: theme.typography.fonts.label,
    fontSize: theme.typography.sizes.labelMd,
    color: theme.colors.primary,
    letterSpacing: 1,
  },
  menu: {
      marginTop: theme.spacing.xl,
      paddingHorizontal: theme.spacing.lg,
  },
  menuTitle: {
    fontFamily: theme.typography.fonts.label,
    fontSize: theme.typography.sizes.labelLg,
    color: theme.colors.primary,
    letterSpacing: 2,
    marginBottom: theme.spacing.lg,
    opacity: 0.6,
  },
  menuItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: theme.spacing.lg,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.surfaceContainer,
  },
  menuItemText: {
    fontFamily: theme.typography.fonts.body,
    fontSize: theme.typography.sizes.bodyLg,
    color: theme.colors.onSurface,
  },
  chevron: {
      fontSize: 18,
      color: theme.colors.outline,
  },
  logoutSection: {
      marginTop: theme.spacing.xxl,
      paddingHorizontal: theme.spacing.xxl,
  },
  logoutBtn: {
      paddingVertical: theme.spacing.md,
      alignItems: 'center',
  },
  logoutBtnText: {
    fontFamily: theme.typography.fonts.label,
    fontSize: theme.typography.sizes.labelLg,
    color: theme.colors.error,
    letterSpacing: 1.5,
  }
});

export default ProfileScreen;
