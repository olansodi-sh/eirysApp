import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { ManropeText, NotoserifText } from '../../components';
import { GlobalColors, theme } from '../../theme/theme';

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
            <NotoserifText style={styles.userName} size={28}>
              Iris Peterson
            </NotoserifText>
            <ManropeText style={styles.userEmail} size={16}>
              iris.p@luminescent.com
            </ManropeText>
            <TouchableOpacity style={styles.editBtn}>
                <ManropeText style={styles.editBtnText} size={12}>
                  EDITAR PERFIL
                </ManropeText>
            </TouchableOpacity>
        </View>

        <View style={styles.menu}>
            <ManropeText style={styles.menuTitle} size={14}>
              MI EXPERIENCIA
            </ManropeText>
            
            <TouchableOpacity style={styles.menuItem}>
                <ManropeText style={styles.menuItemText} size={16}>
                  Mis Pedidos
                </ManropeText>
                <ManropeText style={styles.chevron} size={18}>
                  →
                </ManropeText>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem}>
                <ManropeText style={styles.menuItemText} size={16}>
                  Libreta de Direcciones
                </ManropeText>
                <ManropeText style={styles.chevron} size={18}>
                  →
                </ManropeText>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem}>
                <ManropeText style={styles.menuItemText} size={16}>
                  Métodos de Pago
                </ManropeText>
                <ManropeText style={styles.chevron} size={18}>
                  →
                </ManropeText>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem}>
                <ManropeText style={styles.menuItemText} size={16}>
                  Preferencias
                </ManropeText>
                <ManropeText style={styles.chevron} size={18}>
                  →
                </ManropeText>
            </TouchableOpacity>
        </View>

        <View style={styles.logoutSection}>
            <TouchableOpacity style={styles.logoutBtn}>
                <ManropeText style={styles.logoutBtnText} size={14}>
                  CERRAR SESIÓN
                </ManropeText>
            </TouchableOpacity>
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
      paddingBottom: 48, // spacing.xxl
  },
  header: {
    alignItems: 'center',
    paddingTop: 48, // spacing.xxl
    backgroundColor: GlobalColors.surface,
    paddingBottom: 48, // spacing.xxl
  },
  avatarContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: GlobalColors.surfaceContainerLowest,
    padding: 4,
    marginBottom: 24, // spacing.lg
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 56,
  },
  userName: {
    color: GlobalColors.onSurface,
  },
  userEmail: {
    color: GlobalColors.onSurfaceVariant,
    marginTop: 4,
  },
  editBtn: {
      marginTop: 24, // spacing.lg
      borderWidth: 1,
      borderColor: GlobalColors.outlineVariant,
      paddingHorizontal: 24, // spacing.lg
      paddingVertical: 8, // spacing.sm
      borderRadius: 4, // roundness
  },
  editBtnText: {
    color: GlobalColors.primary,
    letterSpacing: 1,
  },
  menu: {
      marginTop: 32, // spacing.xl
      paddingHorizontal: 24, // spacing.lg
  },
  menuTitle: {
    color: GlobalColors.primary,
    letterSpacing: 2,
    marginBottom: 24, // spacing.lg
    opacity: 0.6,
  },
  menuItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 24, // spacing.lg
      borderBottomWidth: 1,
      borderBottomColor: GlobalColors.surfaceVariant, // updated to use a global color
  },
  menuItemText: {
    color: GlobalColors.onSurface,
  },
  chevron: {
      color: GlobalColors.outline,
  },
  logoutSection: {
      marginTop: 48, // spacing.xxl
      paddingHorizontal: 48, // spacing.xxl
  },
  logoutBtn: {
      paddingVertical: 16, // spacing.md
      alignItems: 'center',
  },
  logoutBtnText: {
    color: GlobalColors.error,
    letterSpacing: 1.5,
  }
});

export default ProfileScreen;
