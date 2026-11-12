import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS, FONT_FAMILY, SPACING } from '@/constants/theme';

type SectionHeaderProps = {
  title: string;
  description?: string;
  eyebrow?: string;
};

export function SectionHeader({ title, description, eyebrow }: SectionHeaderProps) {
  return (
    <View style={styles.container}>
      {eyebrow && <Text style={styles.eyebrow}>{eyebrow}</Text>}
      <Text style={styles.title}>{title}</Text>
      {description && <Text style={styles.description}>{description}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: SPACING.medium,
  },
  eyebrow: {
    color: COLORS.blue,
    fontSize: 11,
    fontFamily: FONT_FAMILY.semibold,
    letterSpacing: 0.7,
    marginBottom: SPACING.small,
  },
  title: {
    color: COLORS.blue,
    fontSize: 24,
    lineHeight: 30,
    fontFamily: FONT_FAMILY.bold,
  },
  description: {
    color: COLORS.darkText,
    fontSize: 15,
    lineHeight: 23,
    fontFamily: FONT_FAMILY.regular,
    marginTop: SPACING.small,
  },
});
