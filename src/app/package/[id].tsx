import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import { BookableDetailScreen } from '@/components/BookableDetailScreen';
import { GAMING_PACKAGES } from '@/constants/experiences';

export default function PackageDetailRoute() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const item = GAMING_PACKAGES.find((candidate) => candidate.id === id);

  return <BookableDetailScreen item={item} />;
}
