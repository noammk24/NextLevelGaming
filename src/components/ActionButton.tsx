import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { COLORS, FONT_FAMILY, RADIUS, SPACING } from '@/constants/theme';

type ActionButtonProps = {
  label: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  disabled?: boolean;
};

export function ActionButton({
  label,
  onPress,
  variant = 'primary',
  disabled = false,
}: ActionButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityState={{ disabled }}
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.button,
        styles[variant],
        disabled && styles.disabled,
        pressed && styles.pressed,
      ]}>
      <Text style={[styles.label, styles[`${variant}Label`]]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 48,
    borderRadius: RADIUS.pill,
    paddingHorizontal: SPACING.medium,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  primary: {
    backgroundColor: COLORS.green,
  },
  secondary: {
    borderWidth: 1,
    borderColor: COLORS.cyan,
    backgroundColor: COLORS.white,
  },
  outline: {
    borderWidth: 1,
    borderColor: COLORS.cyan,
    backgroundColor: COLORS.white,
  },
  label: {
    fontSize: 14,
    fontFamily: FONT_FAMILY.semibold,
    textAlign: 'center',
  },
  primaryLabel: {
    color: COLORS.blue,
  },
  secondaryLabel: {
    color: COLORS.blue,
  },
  outlineLabel: {
    color: COLORS.blue,
  },
  pressed: {
    opacity: 0.78,
  },
  disabled: {
    opacity: 0.55,
  },
});
