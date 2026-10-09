import React from 'react';
import {
  Text,
  type TextProps,
  StyleSheet,
} from 'react-native';

type ThemedTextProps = TextProps & {
  type?:
    | 'default'
    | 'title'
    | 'subtitle'
    | 'defaultSemiBold'
    | 'link'
    | 'code';
};

export function ThemedText({
  style,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  return (
    <Text
      style={[
        styles.default,
        type === 'title' && styles.title,
        type === 'subtitle' && styles.subtitle,
        type === 'defaultSemiBold' && styles.semiBold,
        type === 'link' && styles.link,
        type === 'code' && styles.code,
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
});