import React from 'react';
import { router } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { ActionButton } from '@/components/ActionButton';
import { GamingImage } from '@/components/GamingImage';
import { ScreenLayout } from '@/components/ScreenLayout';
import type { GamingExperience } from '@/constants/experiences';
import { COLORS, FONT_FAMILY, RADIUS, SPACING } from '@/constants/theme';
import { useBooking } from '@/state/BookingContext';

type BookableDetailScreenProps = {
  item?: GamingExperience;
};

export function BookableDetailScreen({ item }: BookableDetailScreenProps) {
  const { selectedItems, addItem } = useBooking();

  if (!item) {
    return (
      <ScreenLayout showBack>
        <View style={styles.notFound}>
          <Text style={styles.title}>Experience not found</Text>
          <Text style={styles.body}>
            This item is not in the current package and experience list.
          </Text>
          <ActionButton label="BROWSE EXPERIENCES" onPress={() => router.replace('/explore')} />
        </View>
      </ScreenLayout>
    );
  }

  const isSelected = selectedItems.some((selected) => selected.id === item.id);

  return (
    <ScreenLayout showBack>
      <GamingImage
        imageUrl={item.imageUrl}
        accessibilityLabel={item.imageLabel}
        style={styles.heroImage}
      />
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{item.categoryLabel}</Text>
      </View>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.price}>{item.price}</Text>
      <Text style={styles.body}>{item.description}</Text>

      <View style={styles.infoPanel}>
        <Text style={styles.panelTitle}>OVERVIEW</Text>
        <Text style={styles.panelText}>{item.description}</Text>
      </View>
      <View style={styles.infoPanel}>
        <Text style={styles.panelTitle}>SUITABLE FOR</Text>
        <Text style={styles.panelText}>{item.suitableFor}</Text>
      </View>

      <Text style={styles.note}>
        Each package or individual experience can be added once. Memberships are not included in
        this booking discount.
      </Text>
      <ActionButton
        label={isSelected ? 'ALREADY IN BOOKING' : 'ADD TO BOOKING'}
        disabled={isSelected}
        onPress={() => addItem(item.id)}
      />
      <View style={styles.secondaryAction}>
        <ActionButton
          label="CALCULATE FEES"
          variant="outline"
          onPress={() => router.push('/calculate-fees')}
        />
      </View>
      {isSelected && (
        <View style={styles.bookingAction}>
          <ActionButton
            label="VIEW BOOKING"
            variant="outline"
            onPress={() => router.push('/bookings')}
          />
        </View>
      )}
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  notFound: {
    gap: SPACING.medium,
    padding: SPACING.large,
    borderRadius: RADIUS.large,
    backgroundColor: COLORS.paleBlue,
  },
  heroImage: {
    height: 220,
    marginBottom: SPACING.medium,
  },
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginBottom: SPACING.small,
    borderRadius: RADIUS.pill,
    backgroundColor: COLORS.paleGreen,
  },
  badgeText: {
    color: COLORS.blue,
    fontSize: 11,
    fontFamily: FONT_FAMILY.semibold,
  },
  title: {
    color: COLORS.blue,
    fontSize: 28,
    lineHeight: 34,
    fontFamily: FONT_FAMILY.extraBold,
  },
  price: {
    color: COLORS.blue,
    fontSize: 20,
    fontFamily: FONT_FAMILY.bold,
    marginTop: SPACING.small,
  },
  body: {
    color: COLORS.darkText,
    fontSize: 15,
    lineHeight: 23,
    fontFamily: FONT_FAMILY.regular,
    marginTop: SPACING.small,
  },
  infoPanel: {
    padding: SPACING.medium,
    marginTop: SPACING.medium,
    borderRadius: RADIUS.medium,
    backgroundColor: COLORS.paleBlue,
  },
  panelTitle: {
    color: COLORS.blue,
    fontSize: 12,
    fontFamily: FONT_FAMILY.bold,
    letterSpacing: 0.4,
    marginBottom: SPACING.small,
  },
  panelText: {
    color: COLORS.darkText,
    fontSize: 14,
    lineHeight: 21,
    fontFamily: FONT_FAMILY.regular,
  },
  note: {
    color: COLORS.mutedText,
    fontSize: 12,
    lineHeight: 19,
    fontFamily: FONT_FAMILY.regular,
    marginVertical: SPACING.medium,
  },
  secondaryAction: {
    marginTop: SPACING.small,
  },
  bookingAction: {
    marginTop: SPACING.small,
    marginBottom: SPACING.large,
  },
});
