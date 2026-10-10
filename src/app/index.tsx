import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { ActionButton } from '@/components/ActionButton';
import { BrandHeader } from '@/components/BrandHeader';
import PackageCard from '@/constants/PackageCard';
import { COLORS, RADIUS, SPACING } from '@/constants/theme';
import { GAMING_PACKAGES, INDIVIDUAL_EXPERIENCES } from '@/constants/experiences';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <BrandHeader />

        <View style={styles.hero}>
          <Text style={styles.eyebrow}>JOHANNESBURG • SOUTH AFRICA</Text>
          <Text style={styles.heroTitle}>LEVEL UP{'\n'}YOUR GAME</Text>
          <Text style={styles.heroText}>
            Step into a world of gaming, esports and shared experiences at Next Level Gaming & Esports Arena.
          </Text>
          <ActionButton
            label="EXPLORE EXPERIENCES"
            onPress={() => router.push('/overview')}
          />
          <ActionButton
            label="OUR STORY"
            variant="outline"
            onPress={() => router.push('/about')}
          />
        </View>

        <View style={styles.intro}>
          <Text style={styles.sectionEyebrow}>WELCOME TO NEXT LEVEL</Text>
          <Text style={styles.introTitle}>Your place to play, compete and connect.</Text>
          <Text style={styles.bodyText}>
            Find gaming packages and individual experiences for players, families, schools and groups.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>GAMING PACKAGES</Text>
          <Text style={styles.bodyText}>Find a package that fits your next gaming session or event.</Text>
          {GAMING_PACKAGES.map((item) => (
            <PackageCard
              key={item.title}
              {...item}
              actionLabel="VIEW PACKAGE"
              actionRoute="/overview"
            />
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>INDIVIDUAL EXPERIENCES</Text>
          <Text style={styles.bodyText}>Choose a standalone activity and take on a new challenge.</Text>
          {INDIVIDUAL_EXPERIENCES.map((item) => (
            <PackageCard
              key={item.title}
              {...item}
              actionLabel="CALCULATE FEES"
              actionRoute="/calculate-fees"
            />
          ))}
        </View>

        <View style={styles.callToAction}>
          <Text style={styles.ctaEyebrow}>YOUR NEXT SESSION STARTS HERE</Text>
          <Text style={styles.ctaTitle}>Ready to level up?</Text>
          <Text style={styles.ctaText}>
            Browse the full experience list, calculate fees or get in touch with the arena.
          </Text>
          <ActionButton
            label="VIEW PACKAGES"
            onPress={() => router.push('/overview')}
          />
          <ActionButton
            label="CALCULATE FEES"
            variant="secondary"
            onPress={() => router.push('/calculate-fees')}
          />
          <ActionButton
            label="CONTACT US"
            variant="outline"
            onPress={() => router.push('/contact')}
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
    backgroundColor: COLORS.background,
  },
  hero: {
    padding: SPACING.large,
    backgroundColor: COLORS.blue,
    gap: SPACING.medium,
  },
  eyebrow: {
    color: COLORS.green,
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.2,
  },
  heroTitle: {
    color: COLORS.white,
    fontSize: 42,
    lineHeight: 46,
    fontWeight: '900',
    letterSpacing: -0.7,
  },
  heroText: {
    color: COLORS.grey,
    fontSize: 16,
    lineHeight: 24,
  },
  intro: {
    padding: SPACING.large,
    backgroundColor: COLORS.cyan,
    gap: SPACING.small,
  },
  sectionEyebrow: {
    color: COLORS.blue,
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 1,
  },
  introTitle: {
    color: COLORS.white,
    fontSize: 24,
    lineHeight: 30,
    fontWeight: '900',
  },
  bodyText: {
    color: COLORS.grey,
    fontSize: 15,
    lineHeight: 23,
    marginBottom: SPACING.medium,
  },
  section: {
    paddingHorizontal: SPACING.medium,
    paddingTop: SPACING.large,
  },
  sectionTitle: {
    color: COLORS.white,
    fontSize: 22,
    fontWeight: '900',
    marginBottom: SPACING.small,
  },
  callToAction: {
    margin: SPACING.medium,
    padding: SPACING.large,
    borderRadius: RADIUS.large,
    backgroundColor: COLORS.cyan,
    gap: SPACING.small,
  },
  ctaEyebrow: {
    color: COLORS.blue,
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 1,
  },
  ctaTitle: {
    color: COLORS.white,
    fontSize: 27,
    fontWeight: '900',
  },
  ctaText: {
    color: COLORS.white,
    fontSize: 15,
    lineHeight: 23,
    marginBottom: SPACING.small,
  },
});
