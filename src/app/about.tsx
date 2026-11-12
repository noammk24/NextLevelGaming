import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GamingImage } from '@/components/GamingImage';
import { ScreenLayout } from '@/components/ScreenLayout';
import { SectionHeader } from '@/components/SectionHeader';
import { GAMING_PACKAGES, INDIVIDUAL_EXPERIENCES } from '@/constants/experiences';
import { COLORS, FONT_FAMILY, RADIUS, SPACING } from '@/constants/theme';

const gallery = [
  GAMING_PACKAGES[0],
  GAMING_PACKAGES[2],
  INDIVIDUAL_EXPERIENCES[1],
];

const values = [
  {
    title: 'Play',
    description: 'Enjoy recreational gaming and shared experiences at the arena.',
  },
  {
    title: 'Compete',
    description: 'Explore competitive esports and training experiences.',
  },
  {
    title: 'Connect',
    description: 'Bring friends, families, schools, clubs, and businesses together.',
  },
];

export default function AboutScreen() {
  return (
    <ScreenLayout showBack>
      <SectionHeader
        eyebrow="OUR STORY"
        title="About Next Level"
        description="A place to play, compete and connect."
      />

      <View style={styles.panel}>
        <Text style={styles.panelTitle}>OUR STORY</Text>
        <Text style={styles.body}>
          Next Level Gaming & Esports Arena is a fictional venue in Johannesburg, South Africa.
          The project scenario describes it as established in 2023 by Jason Naidoo.
        </Text>
        <Text style={styles.body}>
          The arena brings gaming and esports experiences together for individuals and groups.
        </Text>
      </View>

      <View style={styles.section}>
        <SectionHeader title="Mission and values" />
        <Text style={styles.body}>
          Our mission is to provide a place to play, compete and connect through gaming.
        </Text>
        {values.map((value) => (
          <View key={value.title} style={styles.valueCard}>
            <Text style={styles.valueTitle}>{value.title}</Text>
            <Text style={styles.valueDescription}>{value.description}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <SectionHeader
          title="Venue gallery"
          description="Gaming and esports imagery used by the project."
        />
        {gallery.map((item) => (
          <GamingImage
            key={item.id}
            imageUrl={item.imageUrl}
            accessibilityLabel={item.imageLabel}
            style={styles.galleryImage}
          />
        ))}
      </View>

      <View style={styles.panel}>
        <Text style={styles.panelTitle}>LEADERSHIP</Text>
        <Text style={styles.body}>The project scenario names Jason Naidoo as the arena founder.</Text>
      </View>

      <View style={styles.panel}>
        <Text style={styles.panelTitle}>PARTNERS</Text>
        <Text style={styles.body}>Partner information has not been supplied.</Text>
      </View>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  section: {
    marginTop: SPACING.extraLarge,
  },
  panel: {
    padding: SPACING.medium,
    marginTop: SPACING.medium,
    borderRadius: RADIUS.medium,
    backgroundColor: COLORS.paleBlue,
  },
  panelTitle: {
    color: COLORS.blue,
    fontSize: 13,
    fontFamily: FONT_FAMILY.bold,
    letterSpacing: 0.4,
    marginBottom: SPACING.small,
  },
  body: {
    color: COLORS.darkText,
    fontSize: 14,
    lineHeight: 22,
    fontFamily: FONT_FAMILY.regular,
    marginBottom: SPACING.small,
  },
  valueCard: {
    padding: SPACING.medium,
    marginTop: SPACING.small,
    borderRadius: RADIUS.medium,
    backgroundColor: COLORS.white,
    borderColor: COLORS.border,
    borderWidth: 1,
  },
  valueTitle: {
    color: COLORS.blue,
    fontSize: 16,
    fontFamily: FONT_FAMILY.bold,
    marginBottom: 4,
  },
  valueDescription: {
    color: COLORS.darkText,
    fontSize: 14,
    lineHeight: 21,
    fontFamily: FONT_FAMILY.regular,
  },
  galleryImage: {
    height: 190,
    marginBottom: SPACING.small,
  },
});
