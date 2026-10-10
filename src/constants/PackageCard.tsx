
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { COLORS, RADIUS, SPACING } from '../constants/theme';
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
};

export default function PackageCard({
  title,
  price,
  description,
  imageUrl,
  imageLabel,
  actionLabel = 'VIEW DETAILS',
  actionRoute = '/overview',
}: PackageCardProps) {
  return (
    <View style={styles.card}>
      <GamingImage
        imageUrl={imageUrl}
        accessibilityLabel={imageLabel}
        style={styles.image}
      />

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
      <Text style={styles.description}>{description}</Text>
      <ActionButton
        label={actionLabel}
        onPress={() => router.push(actionRoute)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.lightGrey,
    borderRadius: RADIUS.large,
    marginBottom: SPACING.medium,
    padding: SPACING.medium,
    borderWidth: 1,
    borderColor: '#EEEEEE',
  },

  image: {
    marginBottom: SPACING.medium,
  },

  title: {
    color: COLORS.blue,
    fontSize: 18,
    fontWeight: '800',
    marginBottom: SPACING.small,
  },

  price: {
    color: COLORS.blue,
    fontSize: 20,
    fontWeight: '900',
    marginBottom: SPACING.small,
  },

  description: {
    color: COLORS.darkText,
    fontSize: 14,
    lineHeight: 21,
    marginBottom: SPACING.medium,
  },
});