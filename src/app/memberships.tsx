import React from 'react';
import { router } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { ActionButton } from '@/components/ActionButton';
import { ScreenLayout } from '@/components/ScreenLayout';
import { SectionHeader } from '@/components/SectionHeader';
import { SOLO_MEMBERSHIPS } from '@/constants/experiences';
import { COLORS, FONT_FAMILY, RADIUS, SPACING } from '@/constants/theme';

export default function MembershipsScreen() {
  return (
    <ScreenLayout showBack>
      <SectionHeader
        eyebrow="SOLO MEMBERSHIPS"
        title="Choose a membership"
        description="Membership prices and billing periods are shown as listed."
      />

      {SOLO_MEMBERSHIPS.map((membership) => (
        <View key={membership.id} style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.title}>{membership.title}</Text>
          </View>
          <Text style={styles.price}>{membership.price}</Text>
          <Text style={styles.description}>
            Specific membership benefits have not been supplied.
          </Text>
          <ActionButton
            label="ENQUIRE ABOUT THIS PLAN"
            variant="outline"
            onPress={() => router.push('/contact')}
          />
        </View>
      ))}

      <View style={styles.pathwayPanel}>
        <Text style={styles.pathwayTitle}>PLAYER-DEVELOPMENT PATHWAY</Text>
        <Text style={styles.description}>
          The listed plans are Casual Pass, Elite Member, and Pro Academy. Progression criteria
          and pathway details have not been provided.
        </Text>
      </View>
      <Text style={styles.note}>
        Memberships are recurring or time-based offers and are not included in booking discounts.
      </Text>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: SPACING.medium,
    marginBottom: SPACING.medium,
    borderRadius: RADIUS.large,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.white,
    shadowColor: '#101828',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: SPACING.small,
  },
  title: {
    flexShrink: 1,
    color: COLORS.blue,
    fontSize: 18,
    fontFamily: FONT_FAMILY.bold,
  },
  price: {
    color: COLORS.blue,
    fontSize: 18,
    fontFamily: FONT_FAMILY.bold,
    marginTop: SPACING.small,
  },
  description: {
    color: COLORS.mutedText,
    fontSize: 13,
    lineHeight: 20,
    fontFamily: FONT_FAMILY.regular,
    marginVertical: SPACING.medium,
  },
  pathwayPanel: {
    padding: SPACING.medium,
    borderRadius: RADIUS.medium,
    backgroundColor: COLORS.paleBlue,
  },
  pathwayTitle: {
    color: COLORS.blue,
    fontSize: 13,
    fontFamily: FONT_FAMILY.bold,
    marginBottom: SPACING.small,
  },
  note: {
    color: COLORS.mutedText,
    fontSize: 12,
    lineHeight: 19,
    fontFamily: FONT_FAMILY.regular,
    marginTop: SPACING.medium,
  },
});
