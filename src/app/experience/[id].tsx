import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import { BookableDetailScreen } from '@/components/BookableDetailScreen';
import { INDIVIDUAL_EXPERIENCES } from '@/constants/experiences';

export default function ExperienceDetailRoute() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const item = INDIVIDUAL_EXPERIENCES.find((candidate) => candidate.id === id);

  return <BookableDetailScreen item={item} />;
}
