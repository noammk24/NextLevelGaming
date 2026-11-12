import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { COLORS, FONT_FAMILY, RADIUS, SPACING } from '@/constants/theme';

type ScreenLinkCardProps = {
  title: string;
  description: string;
  onPress: () => void;
};

export function ScreenLinkCard({ title, description, onPress }: ScreenLinkCardProps) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}>
      <View style={styles.text}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <Text accessibilityElementsHidden style={styles.arrow}>›</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    minHeight: 76,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: SPACING.medium,
    marginBottom: SPACING.small,
    backgroundColor: COLORS.white,
    borderRadius: RADIUS.medium,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  text: {
    flex: 1,
    marginRight: SPACING.small,
  },
  title: {
    color: COLORS.blue,
    fontSize: 16,
    fontFamily: FONT_FAMILY.bold,
  },
  description: {
    color: COLORS.mutedText,
    fontSize: 13,
    lineHeight: 19,
    fontFamily: FONT_FAMILY.regular,
    marginTop: 4,
  },
  arrow: {
    color: COLORS.cyan,
    fontSize: 27,
    fontFamily: FONT_FAMILY.regular,
  },
  pressed: {
    opacity: 0.75,
  },
});
