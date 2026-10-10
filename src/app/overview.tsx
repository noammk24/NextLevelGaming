import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { ActionButton } from '@/components/ActionButton';
import { BrandHeader } from '@/components/BrandHeader';
import PackageCard from '@/constants/PackageCard';
import { GAMING_PACKAGES, INDIVIDUAL_EXPERIENCES } from '@/constants/experiences';
import { COLORS, SPACING } from '@/constants/theme';

export default function OverviewScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <BrandHeader />
        <View style={styles.hero}>
          <Text style={styles.eyebrow}>FIND YOUR NEXT EXPERIENCE</Text>
          <Text style={styles.title}>EXPLORE</Text>
          <Text style={styles.subtitle}>Gaming packages and individual activities.</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>GAMING PACKAGES</Text>
          <Text style={styles.description}>
            Explore the available packages. Prices are shown as listed; use Calculate Fees to see a selection total.
          </Text>
          {GAMING_PACKAGES.map((item) => (
            <PackageCard
              key={item.title}
              {...item}
              actionLabel="CALCULATE FEES"
              actionRoute="/calculate-fees"
            />
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>INDIVIDUAL EXPERIENCES</Text>
          <Text style={styles.description}>
            Choose from virtual reality, racing simulator and escape room experiences.
          </Text>
          {INDIVIDUAL_EXPERIENCES.map((item) => (
            <PackageCard
              key={item.title}
              {...item}
              actionLabel="CALCULATE FEES"
              actionRoute="/calculate-fees"
            />
          ))}
        </View>

        <View style={styles.footer}>
          <ActionButton
            label="CONTACT US"
            onPress={() => router.push('/contact')}
          />
          <ActionButton
            label="BACK TO HOME"
            variant="outline"
            onPress={() => router.push('/')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    paddingBottom: SPACING.large,
  },
  hero: {
    backgroundColor: COLORS.cyan,
    padding: SPACING.large,
  },
  eyebrow: {
    color: COLORS.blue,
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 1,
  },
  title: {
    color: COLORS.white,
    fontSize: 34,
    fontWeight: '900',
    marginTop: SPACING.small,
  },
  subtitle: {
    color: COLORS.white,
    fontSize: 15,
    lineHeight: 22,
    marginTop: SPACING.small,
  },
  section: {
    paddingHorizontal: SPACING.medium,
    paddingTop: SPACING.large,
  },
  sectionTitle: {
    color: COLORS.green,
    fontSize: 22,
    fontWeight: '900',
    marginBottom: SPACING.small,
  },
  description: {
    color: COLORS.grey,
    fontSize: 14,
    lineHeight: 21,
    marginBottom: SPACING.medium,
  },
  footer: {
    paddingHorizontal: SPACING.medium,
    gap: SPACING.small,
  },
});
