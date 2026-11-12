import React from 'react';
import { router } from 'expo-router';
import { ScreenLayout } from '@/components/ScreenLayout';
import { ScreenLinkCard } from '@/components/ScreenLinkCard';
import { SectionHeader } from '@/components/SectionHeader';

export default function MoreScreen() {
  return (
    <ScreenLayout>
      <SectionHeader
        eyebrow="NEXT LEVEL"
        title="More"
        description="Learn about the arena, memberships, and ways to get in touch."
      />
      <ScreenLinkCard
        title="About Us"
        description="The arena story, mission, values, and venue information."
        onPress={() => router.push('/about')}
      />
      <ScreenLinkCard
        title="Arena overview"
        description="Tournaments, coaching, group events, and the booking process."
        onPress={() => router.push('/overview')}
      />
      <ScreenLinkCard
        title="Solo memberships"
        description="View membership names and listed pricing."
        onPress={() => router.push('/memberships')}
      />
      <ScreenLinkCard
        title="Contact Us"
        description="View available contact information and prepare an enquiry."
        onPress={() => router.push('/contact')}
      />
    </ScreenLayout>
  );
}
