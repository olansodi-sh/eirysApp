export const theme = {
  colors: {
    background: '#faf9f7',
    primary: '#5f5e5e',
    primaryContainer: '#e5e2e1',
    onPrimary: '#faf7f6',
    secondary: '#605f5b',
    secondaryContainer: '#e5e2dd',
    onSecondary: '#fcf8f3',
    tertiary: '#625f58',
    tertiaryContainer: '#f9f3ea',
    onTertiary: '#fef8ef',
    surface: '#faf9f7',
    surfaceVariant: '#e0e3e0',
    onSurface: '#2f3331',
    onSurfaceVariant: '#5c605d',
    outline: '#777c79',
    outlineVariant: '#afb3b0',
    error: '#9e422c',
    errorContainer: '#fe8b70',
    onHigh: '#0d0e0e',
    surfaceContainerLowest: '#ffffff',
  },
  typography: {
    fonts: {
      headline: 'NotoSerif-Bold', // Assuming fonts are added or using system defaults if not
      body: 'Manrope-Regular',
      label: 'Manrope-Medium',
    },
    sizes: {
      displayLg: 57,
      displayMd: 45,
      headlineLg: 32,
      headlineMd: 28,
      titleLg: 22,
      titleMd: 16,
      bodyLg: 16,
      bodyMd: 14,
      labelLg: 14,
      labelMd: 12,
    }
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },
  roundness: 4, // ROUND_FOUR
  shadows: {
    soft: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.05,
      shadowRadius: 10,
      elevation: 2,
    },
    medium: {
      shadowColor: '#2f3331',
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.08,
      shadowRadius: 20,
      elevation: 5,
    }
  }
};
