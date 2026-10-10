import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { ActionButton } from '@/components/ActionButton';
import { BrandHeader } from '@/components/BrandHeader';
import { GamingImage } from '@/components/GamingImage';
import { COLORS, RADIUS, SPACING } from '@/constants/theme';

const gamingImage =
  'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80';

const activities = [
  {
    title: 'Gaming and esports',
    description: 'Enjoy recreational gaming and take part in competitive esports activities.',
  },
  {
    title: 'Special occasions',
    description: 'Bring friends and family together for birthday parties and group celebrations.',
  },
  {
    title: 'Groups and events',
    description: 'Plan a school outing, corporate event, gaming tournament or club activity.',
  },
];

export default function AboutScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <BrandHeader />
        <View style={styles.hero}>
          <Text style={styles.eyebrow}>OUR STORY</Text>
          <Text style={styles.title}>ABOUT US</Text>
          <Text style={styles.subtitle}>A place to play, compete and connect.</Text>
        </View>

        <View style={styles.imageWrap}>
          <GamingImage
            imageUrl={gamingImage}
            accessibilityLabel="Esports players competing at a gaming event"
            style={styles.image}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>HOW IT STARTED</Text>
          <Text style={styles.text}>
            Next Level Gaming & Esports Arena is a fictional gaming venue based in Johannesburg, South Africa. The scenario for the business describes it as established in 2023 by Jason Naidoo.
          </Text>
          <Text style={styles.text}>
            The arena brings gaming and esports experiences together in one place, welcoming people who want to play for fun, enjoy an activity with a group or explore competitive gaming.
          </Text>
        </View>

        <View style={styles.callout}>
          <Text style={styles.calloutTitle}>WHO CAN JOIN IN?</Text>
          <Text style={styles.calloutText}>
            Gamers, families, school groups, gaming clubs and businesses can explore experiences suited to individuals and groups.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>WHAT HAPPENS HERE</Text>
          {activities.map((activity) => (
            <View style={styles.activity} key={activity.title}>
              <Text style={styles.activityTitle}>{activity.title}</Text>
              <Text style={styles.activityText}>{activity.description}</Text>
            </View>
          ))}
        </View>

        <View style={styles.actions}>
          <ActionButton
            label="EXPLORE OUR EXPERIENCES"
            onPress={() => router.push('/overview')}
          />
          <ActionButton
            label="BACK TO HOME"
            variant="secondary"
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
    padding: SPACING.large,
    backgroundColor: COLORS.cyan,
  },
  eyebrow: {
    color: COLORS.blue,
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 1.3,
  },
  title: {
    color: COLORS.white,
    fontSize: 34,
    fontWeight: '900',
    marginTop: SPACING.small,
  },
  subtitle: {
    color: COLORS.white,
    fontSize: 16,
    lineHeight: 23,
    marginTop: SPACING.small,
  },
  imageWrap: {
    paddingHorizontal: SPACING.medium,
    paddingTop: SPACING.medium,
  },
  image: {
    height: 220,
  },
  section: {
    padding: SPACING.medium,
  },
  sectionTitle: {
    color: COLORS.green,
    fontSize: 21,
    fontWeight: '900',
    marginBottom: SPACING.small,
  },
  text: {
    color: COLORS.white,
    fontSize: 15,
    lineHeight: 24,
    marginBottom: SPACING.medium,
  },
  callout: {
    marginHorizontal: SPACING.medium,
    padding: SPACING.large,
    borderRadius: RADIUS.large,
    backgroundColor: COLORS.blue,
    borderWidth: 1,
    borderColor: COLORS.cyan,
  },
  calloutTitle: {
    color: COLORS.green,
    fontSize: 19,
    fontWeight: '900',
    marginBottom: SPACING.small,
  },
  calloutText: {
    color: COLORS.white,
    fontSize: 15,
    lineHeight: 23,
  },
  activity: {
    padding: SPACING.medium,
    borderRadius: RADIUS.medium,
    backgroundColor: COLORS.card,
    marginBottom: SPACING.small,
  },
  activityTitle: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '800',
    marginBottom: 6,
  },
  activityText: {
    color: COLORS.grey,
    fontSize: 14,
    lineHeight: 21,
  },
  actions: {
    paddingHorizontal: SPACING.medium,
    gap: SPACING.small,
  },
});
