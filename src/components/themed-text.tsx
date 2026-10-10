import React from 'react';
import {
  Text,
  type TextProps,
  StyleSheet,
} from 'react-native';
import { ThemeTextColor } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

type ThemedTextProps = TextProps & {
  type?:
    | 'default'
    | 'title'
    | 'subtitle'
    | 'defaultSemiBold'
    | 'link'
    | 'code'
    | 'small'
    | 'smallBold'
    | 'linkPrimary';
  themeColor?: ThemeTextColor;
};

export function ThemedText({
  style,
  type = 'default',
  themeColor = 'text',
  ...rest
}: ThemedTextProps) {
  const theme = useTheme();

  return (
    <Text
      style={[
        styles.default,
        { color: theme[themeColor] },
        type === 'title' && styles.title,
        type === 'subtitle' && styles.subtitle,
        type === 'defaultSemiBold' && styles.semiBold,
        (type === 'link' || type === 'linkPrimary') && styles.link,
        type === 'code' && styles.code,
        type === 'small' && styles.small,
        type === 'smallBold' && styles.smallBold,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333333',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 38,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  semiBold: {
    fontWeight: '600',
  },
  link: {
    color: '#170398',
  },
  code: {
    fontFamily: 'monospace',
    fontWeight: '500',
    fontSize: 12,
  },
  small: {
    fontSize: 14,
    lineHeight: 20,
  },
  smallBold: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '700',
  },
});