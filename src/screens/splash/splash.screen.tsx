import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, StatusBar } from 'react-native';
import { theme } from '../../theme/theme';

const SplashScreen = () => {
  const scale = useRef(new Animated.Value(0.8)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.spring(scale, {
        toValue: 1,
        friction: 4,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
      }),
    ]).start();
  }, [scale, opacity]);

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Animated.View
        style={[styles.content, { opacity, transform: [{ scale }] }]}
      >
        <Text style={styles.logo}>EIRYS</Text>
        <View style={styles.divider} />
        <Text style={styles.slogan}>Cada paso, una obra</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  logo: {
    fontFamily: theme.typography.fonts.headline,
    fontSize: theme.typography.sizes.displayLg,
    color: theme.colors.primary,
    letterSpacing: 10,
  },
  divider: {
    width: 40,
    height: 1,
    backgroundColor: theme.colors.primary,
    marginVertical: theme.spacing.lg,
    opacity: 0.3,
  },
  slogan: {
    fontFamily: theme.typography.fonts.body,
    fontSize: theme.typography.sizes.labelLg,
    color: theme.colors.onSurfaceVariant,
    letterSpacing: 3,
    textTransform: 'uppercase',
  },
});

export default SplashScreen;
