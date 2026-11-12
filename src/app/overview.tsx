import React from 'react';
import { router } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { ActionButton } from '@/components/ActionButton';
import { ScreenLayout } from '@/components/ScreenLayout';
import { SectionHeader } from '@/components/SectionHeader';
import { COLORS, FONT_FAMILY, RADIUS, SPACING } from '@/constants/theme';

const overviewItems = [
  {
    title: 'Tournaments',
    description:
      'The arena scenario includes gaming tournaments and competitive esports activities.',
  },
  {
    title: 'Coaching and training',
    description:
      'The Esports Training Package focuses on competitive play and building esports skills.',
  },
  {
    title: 'Groups and events',
    description:
      'The arena describes birthday parties, school outings, corporate events, and club activities.',
  },
];

export default function OverviewScreen() {
  return (
    <ScreenLayout showBack>
      <SectionHeader
        eyebrow="ARENA OVERVIEW"
        title="What happens here"
        description="Explore the gaming, training, and group experiences described for the arena."
      />

      {overviewItems.map((item) => (
        <View key={item.title} style={styles.card}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.body}>{item.description}</Text>
        </View>
      ))}

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Hardware specifications</Text>
        <Text style={styles.body}>
          Specific PC, console, peripheral, and network specifications have not been supplied.
        </Text>
      </View>

      <View style={styles.processPanel}>
        <Text style={styles.cardTitle}>Booking process</Text>
        <Text style={styles.step}>1. Browse packages and individual experiences.</Text>
        <Text style={styles.step}>2. Add items to your booking and review the estimate.</Text>
        <Text style={styles.step}>3. Confirm the demo summary; no reservation or payment is made.</Text>
      </View>

      <View style={styles.action}>
        <ActionButton label="EXPLORE EXPERIENCES" onPress={() => router.push('/explore')} />
      </View>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: SPACING.medium,
    marginBottom: SPACING.small,
    borderRadius: RADIUS.medium,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.white,
  },
  cardTitle: {
    color: COLORS.blue,
    fontSize: 17,
    fontFamily: FONT_FAMILY.bold,
    marginBottom: SPACING.small,
  },
  body: {
    color: COLORS.darkText,
    fontSize: 14,
    lineHeight: 22,
    fontFamily: FONT_FAMILY.regular,
  },
  processPanel: {
    padding: SPACING.medium,
    marginTop: SPACING.small,
    borderRadius: RADIUS.medium,
    backgroundColor: COLORS.paleBlue,
  },
  step: {
    color: COLORS.darkText,
    fontSize: 14,
    lineHeight: 22,
    fontFamily: FONT_FAMILY.regular,
    marginTop: SPACING.small,
  },
  action: {
    marginTop: SPACING.large,
  },
});
