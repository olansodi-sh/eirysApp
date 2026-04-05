/* eslint-disable react-native/no-inline-styles */
import { textAdapter } from '../../utils/utilies';
import { Text, TextStyle, StyleProp, TextProps } from 'react-native';
import React from 'react';

interface ManropeTextProps extends TextProps {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
  size?: number;
  weight?: 'normal' | 'bold';
}

/**
 * Componente de texto con fuente Manrope
 * @param children - Texto a mostrar
 * @param style - Estilos adicionales
 * @param size - Tamaño de fuente
 * @param weight - Peso de fuente
 * @param props - Props adicionales
 * @returns
 */

const ManropeText = ({
  children,
  style,
  size = 16,
  weight = 'normal',
  ...props
}: ManropeTextProps) => {
  return (
    <Text
      {...props}
      style={[
        {
          fontFamily: 'Manrope-Regular',
          fontSize: textAdapter(size),
          fontWeight: weight,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
};

export default ManropeText;
