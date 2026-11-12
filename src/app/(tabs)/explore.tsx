import React from 'react';
import { router } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import PackageCard from '@/constants/PackageCard';
import { ActionButton } from '@/components/ActionButton';
import { ScreenLayout } from '@/components/ScreenLayout';
import { SectionHeader } from '@/components/SectionHeader';
import { GAMING_PACKAGES, INDIVIDUAL_EXPERIENCES } from '@/constants/experiences';
import { SPACING } from '@/constants/theme';

export default function ExploreScreen() {
  return (
    <ScreenLayout>
      <SectionHeader
        eyebrow="EXPLORE"
        title="Find your next experience"
        description="Browse gaming packages and individual activities at Next Level Gaming & Esports Arena."
      />

      <ActionButton
        label="ABOUT THE ARENA"
        variant="outline"
        onPress={() => router.push('/overview')}
      />

      <View style={styles.section}>
        <SectionHeader
          eyebrow="GAMING PACKAGES"
          title="Packages"
          description="Four ways to make your next session or event memorable."
        />
        {GAMING_PACKAGES.map((item) => (
          <PackageCard
            key={item.id}
            {...item}
            categoryLabel={item.categoryLabel}
            onAction={() =>
              router.push({ pathname: '/package/[id]', params: { id: item.id } })
            }
          />
        ))}
      </View>

      <View style={styles.section}>
        <SectionHeader
          eyebrow="INDIVIDUAL EXPERIENCES"
          title="Activities"
          description="Choose a standalone challenge."
        />
        {INDIVIDUAL_EXPERIENCES.map((item) => (
          <PackageCard
            key={item.id}
            {...item}
            categoryLabel={item.categoryLabel}
            onAction={() =>
              router.push({ pathname: '/experience/[id]', params: { id: item.id } })
            }
          />
        ))}
      </View>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  section: {
    marginTop: SPACING.extraLarge,
  },
});
