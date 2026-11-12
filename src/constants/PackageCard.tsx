
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { COLORS, FONT_FAMILY, RADIUS, SPACING } from '../constants/theme';
import { ActionButton } from '../components/ActionButton';
import { GamingImage } from '../components/GamingImage';

type PackageCardProps = {
  title: string;
  price: string;
  description: string;
  imageUrl: string;
  imageLabel: string;
  actionLabel?: string;
  actionRoute?: '/overview' | '/calculate-fees' | '/contact';
  categoryLabel?: string;
  onAction?: () => void;
};

export default function PackageCard({
  title,
  price,
  description,
  imageUrl,
  imageLabel,
  actionLabel = 'VIEW DETAILS',
  actionRoute = '/overview',
  categoryLabel = 'Gaming experience',
  onAction,
}: PackageCardProps) {
  return (
    <View style={styles.card}>
      <GamingImage
        imageUrl={imageUrl}
        accessibilityLabel={imageLabel}
        style={styles.image}
      />
      <View style={styles.badge}>
        <Text style={styles.badgeLabel}>{categoryLabel}</Text>
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
      <Text style={styles.description}>{description}</Text>
      <ActionButton
        label={actionLabel}
        onPress={onAction ?? (() => router.push(actionRoute))}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    borderRadius: RADIUS.large,
    marginBottom: SPACING.medium,
    padding: SPACING.medium,
    borderWidth: 1,
    borderColor: COLORS.border,
    shadowColor: '#101828',
    shadowOpacity: 0.06,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },

  image: {
    marginBottom: SPACING.medium,
    height: 164,
  },

  badge: {
    alignSelf: 'flex-start',
    backgroundColor: COLORS.paleGreen,
    borderRadius: RADIUS.pill,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: SPACING.small,
  },

  badgeLabel: {
    color: COLORS.blue,
    fontFamily: FONT_FAMILY.semibold,
    fontSize: 11,
  },

  title: {
    color: COLORS.blue,
    fontSize: 17,
    fontFamily: FONT_FAMILY.bold,
    marginBottom: SPACING.small,
  },

  price: {
    color: COLORS.blue,
    fontSize: 18,
    fontFamily: FONT_FAMILY.bold,
    marginBottom: SPACING.small,
  },

  description: {
    color: COLORS.darkText,
    fontSize: 14,
    lineHeight: 21,
    marginBottom: SPACING.medium,
    fontFamily: FONT_FAMILY.regular,
  },
});