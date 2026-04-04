/* eslint-disable react-native/no-inline-styles */
import { textAdapter } from '../../utils/utilies';
import { Text, TextStyle } from 'react-native';
import React from 'react';

interface NotoserifTextProps {
  children: React.ReactNode;
  style?: TextStyle;
  size?: number;
  weight?: 'normal' | 'bold';
}
/**
 * Componente de texto con fuente Notoserif
 * @param children Texto a mostrar
 * @param style Estilos adicionales
 * @param size Tamaño del texto
 * @param weight Peso del texto
 * @returns Componente de texto
 */

const NotoserifText = ({
  children,
  style,
  size = 16,
  weight = 'normal',
  ...props
}: NotoserifTextProps) => {
  return (
    <Text
      {...props}
      style={[
        {
          fontFamily: 'NotoSerif-Regular',
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

export default NotoserifText;
