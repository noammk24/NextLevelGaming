import React from 'react';
import { router } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import PackageCard from '@/constants/PackageCard';
import { ActionButton } from '@/components/ActionButton';
import { GamingImage } from '@/components/GamingImage';
import { ScreenLayout } from '@/components/ScreenLayout';
import { SectionHeader } from '@/components/SectionHeader';
import { GAMING_PACKAGES, INDIVIDUAL_EXPERIENCES } from '@/constants/experiences';
import { COLORS, FONT_FAMILY, RADIUS, SPACING } from '@/constants/theme';

export default function HomeScreen() {
  const hero = GAMING_PACKAGES[0];

  return (
    <ScreenLayout>
      <View style={styles.hero}>
        <Text style={styles.location}>JOHANNESBURG · SOUTH AFRICA</Text>
        <Text style={styles.title}>Play, compete and connect.</Text>
        <Text style={styles.description}>
          Find gaming packages and individual experiences for players, families, schools and groups.
        </Text>
        <GamingImage
          imageUrl={hero.imageUrl}
          accessibilityLabel={hero.imageLabel}
          style={styles.heroImage}
        />
        <ActionButton label="EXPLORE EXPERIENCES" onPress={() => router.push('/explore')} />
        <ActionButton
          label="CALCULATE FEES"
          variant="outline"
          onPress={() => router.push('/calculate-fees')}
        />
      </View>

      <View style={styles.section}>
        <SectionHeader
          eyebrow="GAMING PACKAGES"
          title="Featured packages"
          description="Choose a package for your next gaming session or event."
        />
        {GAMING_PACKAGES.slice(0, 2).map((item) => (
          <PackageCard
            key={item.id}
            {...item}
            categoryLabel={item.categoryLabel}
            onAction={() =>
              router.push({ pathname: '/package/[id]', params: { id: item.id } })
            }
          />
        ))}
        <ActionButton
          label="VIEW ALL PACKAGES"
          variant="outline"
          onPress={() => router.push('/explore')}
        />
      </View>

      <View style={styles.section}>
        <SectionHeader
          eyebrow="INDIVIDUAL EXPERIENCES"
          title="Popular activities"
          description="Pick a standalone activity and take on a new challenge."
        />
        {INDIVIDUAL_EXPERIENCES.slice(0, 2).map((item) => (
          <PackageCard
            key={item.id}
            {...item}
            categoryLabel={item.categoryLabel}
            onAction={() =>
              router.push({ pathname: '/experience/[id]', params: { id: item.id } })
            }
          />
        ))}
        <ActionButton
          label="BROWSE ALL EXPERIENCES"
          variant="outline"
          onPress={() => router.push('/explore')}
        />
      </View>

      <View style={styles.bookingCallout}>
        <Text style={styles.calloutTitle}>Plan your next session</Text>
        <Text style={styles.calloutText}>
          Add bookable experiences, then review the subtotal, discount and estimated total.
        </Text>
        <ActionButton label="VIEW BOOKING" onPress={() => router.push('/bookings')} />
      </View>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  hero: {
    gap: SPACING.small,
    marginBottom: SPACING.extraLarge,
  },
  location: {
    color: COLORS.blue,
    fontSize: 11,
    letterSpacing: 0.8,
    fontFamily: FONT_FAMILY.semibold,
  },
  title: {
    color: COLORS.blue,
    fontSize: 30,
    lineHeight: 36,
    fontFamily: FONT_FAMILY.extraBold,
  },
  description: {
    color: COLORS.darkText,
    fontSize: 15,
    lineHeight: 23,
    fontFamily: FONT_FAMILY.regular,
  },
  heroImage: {
    height: 190,
    marginVertical: SPACING.small,
  },
  section: {
    marginBottom: SPACING.extraLarge,
  },
  bookingCallout: {
    backgroundColor: COLORS.paleBlue,
    padding: SPACING.large,
    borderRadius: RADIUS.large,
    gap: SPACING.small,
  },
  calloutTitle: {
    color: COLORS.blue,
    fontSize: 20,
    fontFamily: FONT_FAMILY.bold,
  },
  calloutText: {
    color: COLORS.darkText,
    fontSize: 14,
    lineHeight: 22,
    fontFamily: FONT_FAMILY.regular,
  },
});
