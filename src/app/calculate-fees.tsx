import React, { useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { ActionButton } from '@/components/ActionButton';
import { BrandHeader } from '@/components/BrandHeader';
import {
  GAMING_PACKAGES,
  INDIVIDUAL_EXPERIENCES,
} from '@/constants/experiences';
import { calculateFeeSummary } from '@/constants/fees';
import { COLORS, RADIUS, SPACING } from '@/constants/theme';

const bookingOptions = [...GAMING_PACKAGES, ...INDIVIDUAL_EXPERIENCES];

const formatPrice = (amount: number) =>
  `R${amount.toLocaleString('en-ZA', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

export default function CalculateFeesScreen() {
  const [selectedBookings, setSelectedBookings] = useState<string[]>([]);

  const selectedItems = useMemo(
    () => bookingOptions.filter((item) => selectedBookings.includes(item.id)),
    [selectedBookings],
  );
  const { bookingCount, subtotal, discountRate, discountAmount, total } =
    calculateFeeSummary(selectedItems);

  const toggleBooking = (id: string) => {
    setSelectedBookings((previous) =>
      previous.includes(id)
        ? previous.filter((bookingId) => bookingId !== id)
        : [...previous, id],
    );
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled">
        <BrandHeader />
        <View style={styles.hero}>
          <Text style={styles.eyebrow}>PLAN YOUR SESSION</Text>
          <Text style={styles.heroTitle}>CALCULATE FEES</Text>
          <Text style={styles.heroSubtitle}>
            Select experiences to see your subtotal, applicable discount and estimated total.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>SELECT EXPERIENCES</Text>
          <Text style={styles.description}>
            Select each package or activity once. You can change your selection at any time.
          </Text>

          {bookingOptions.map((item) => {
            const isSelected = selectedBookings.includes(item.id);

            return (
              <Pressable
                key={item.id}
                onPress={() => toggleBooking(item.id)}
                accessibilityRole="checkbox"
                accessibilityState={{ checked: isSelected }}
                accessibilityLabel={`${item.title}, ${item.price}`}
                style={[styles.bookingCard, isSelected && styles.selectedCard]}>
                <Text style={[styles.checkbox, isSelected && styles.checkedBox]}>
                  {isSelected ? '✓' : ''}
                </Text>
                <View style={styles.bookingInfo}>
                  <Text style={styles.bookingName}>{item.title}</Text>
                  <Text style={styles.bookingDescription}>{item.description}</Text>
                </View>
                <Text style={styles.bookingPrice}>{item.price}</Text>
              </Pressable>
            );
          })}
        </View>

        <View
          style={styles.summary}
          accessible
          accessibilityLabel={`Booking estimate. ${bookingCount} selected. Subtotal ${formatPrice(subtotal)}. Discount ${discountRate} percent, ${formatPrice(discountAmount)}. Estimated total ${formatPrice(total)}.`}>
          <Text style={styles.summaryTitle}>YOUR ESTIMATE</Text>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Selected experiences</Text>
            <Text style={styles.summaryValue}>{bookingCount}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Subtotal</Text>
            <Text style={styles.summaryValue}>{formatPrice(subtotal)}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Discount ({discountRate}%)</Text>
            <Text style={styles.discountValue}>−{formatPrice(discountAmount)}</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>ESTIMATED TOTAL</Text>
            <Text style={styles.totalValue}>{formatPrice(total)}</Text>
          </View>
          {selectedItems.length > 0 && (
            <View style={styles.selectedList}>
              {selectedItems.map((item) => (
                <Text key={item.id} style={styles.selectedItem}>
                  {item.title} · {item.price}
                </Text>
              ))}
            </View>
          )}
          <Text style={styles.discountNote}>
            One experience: no discount · Two: 5% · Three: 10% · More than three: 15%.
            Discount is calculated on the selected subtotal.
          </Text>
          <ActionButton
            label="CLEAR SELECTION"
            variant="outline"
            onPress={() => setSelectedBookings([])}
          />
        </View>

        <View style={styles.footer}>
          <Text style={styles.disclaimer}>
            This is an estimate only, not a reservation or confirmed booking.
          </Text>
          <ActionButton
            label="BACK TO EXPERIENCES"
            onPress={() => router.push('/overview')}
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
  },
  hero: {
    padding: SPACING.large,
    backgroundColor: COLORS.cyan,
  },
  eyebrow: {
    color: COLORS.blue,
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 1.1,
  },
  heroTitle: {
    color: COLORS.white,
    fontSize: 30,
    lineHeight: 36,
    fontWeight: '900',
    marginTop: SPACING.small,
  },
  heroSubtitle: {
    color: COLORS.white,
    fontSize: 15,
    lineHeight: 22,
    marginTop: SPACING.small,
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
  description: {
    color: COLORS.grey,
    fontSize: 14,
    lineHeight: 21,
    marginBottom: SPACING.medium,
  },
  bookingCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.card,
    borderColor: COLORS.blue,
    borderWidth: 1,
    borderRadius: RADIUS.medium,
    padding: SPACING.medium,
    marginBottom: SPACING.small,
  },
  selectedCard: {
    borderColor: COLORS.green,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: COLORS.grey,
    color: COLORS.blue,
    textAlign: 'center',
    lineHeight: 20,
    paddingTop: 0,
    marginRight: SPACING.small,
  },
  checkedBox: {
    backgroundColor: COLORS.green,
    borderColor: COLORS.green,
  },
  bookingInfo: {
    flex: 1,
    marginRight: SPACING.small,
  },
  bookingName: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: '800',
  },
  bookingDescription: {
    color: COLORS.grey,
    fontSize: 12,
    lineHeight: 17,
    marginTop: 4,
  },
  bookingPrice: {
    color: COLORS.green,
    fontSize: 14,
    fontWeight: '800',
  },
  summary: {
    marginHorizontal: SPACING.medium,
    padding: SPACING.medium,
    backgroundColor: COLORS.blue,
    borderRadius: RADIUS.large,
  },
  summaryTitle: {
    color: COLORS.green,
    fontSize: 20,
    fontWeight: '900',
    marginBottom: SPACING.medium,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: SPACING.small,
    marginBottom: SPACING.small,
  },
  summaryLabel: {
    color: COLORS.grey,
    fontSize: 14,
    flexShrink: 1,
  },
  summaryValue: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: '800',
  },
  discountValue: {
    color: COLORS.green,
    fontSize: 14,
    fontWeight: '800',
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.cyan,
    marginVertical: SPACING.small,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: SPACING.small,
  },
  totalLabel: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight: '900',
    flexShrink: 1,
  },
  totalValue: {
    color: COLORS.green,
    fontSize: 21,
    fontWeight: '900',
  },
  selectedList: {
    borderTopWidth: 1,
    borderTopColor: '#5346B2',
    marginTop: SPACING.medium,
    paddingTop: SPACING.small,
  },
  selectedItem: {
    color: COLORS.white,
    fontSize: 13,
    lineHeight: 20,
  },
  discountNote: {
    color: COLORS.grey,
    fontSize: 12,
    lineHeight: 18,
    marginVertical: SPACING.medium,
  },
  footer: {
    padding: SPACING.medium,
    gap: SPACING.small,
  },
  disclaimer: {
    color: COLORS.grey,
    fontSize: 13,
    lineHeight: 19,
    textAlign: 'center',
    marginBottom: SPACING.small,
  },
});
