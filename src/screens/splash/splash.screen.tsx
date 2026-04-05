import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, StatusBar } from 'react-native';
import { ManropeText, NotoserifText } from '../../components';
import { GlobalColors } from '../../theme/theme';

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
        <NotoserifText style={styles.logo} size={57}>
          EIRYS
        </NotoserifText>
        <View style={styles.divider} />
        <ManropeText style={styles.slogan} size={14}>
          Cada paso, una obra
        </ManropeText>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalColors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  logo: {
    color: GlobalColors.primary,
    letterSpacing: 10,
  },
  divider: {
    width: 40,
    height: 1,
    backgroundColor: GlobalColors.primary,
    marginVertical: 24, // spacing.lg
    opacity: 0.3,
  },
  slogan: {
    color: GlobalColors.onSurfaceVariant,
    letterSpacing: 3,
    textTransform: 'uppercase',
  },
});

export default SplashScreen;
