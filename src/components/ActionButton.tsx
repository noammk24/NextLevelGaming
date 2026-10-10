import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { COLORS, RADIUS, SPACING } from '@/constants/theme';

type ActionButtonProps = {
  label: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
};

export function ActionButton({
  label,
  onPress,
  variant = 'primary',
}: ActionButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        styles[variant],
        pressed && styles.pressed,
      ]}>
      <Text style={[styles.label, styles[`${variant}Label`]]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 48,
    borderRadius: RADIUS.small,
    paddingHorizontal: SPACING.medium,
    paddingVertical: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: {
    backgroundColor: COLORS.green,
  },
  secondary: {
    backgroundColor: COLORS.blue,
  },
  outline: {
    borderWidth: 1,
    borderColor: COLORS.green,
  },
  label: {
    fontSize: 14,
    fontWeight: '800',
    textAlign: 'center',
  },
  primaryLabel: {
    color: COLORS.blue,
  },
  secondaryLabel: {
    color: COLORS.white,
  },
  outlineLabel: {
    color: COLORS.white,
  },
  pressed: {
    opacity: 0.78,
  },
});
