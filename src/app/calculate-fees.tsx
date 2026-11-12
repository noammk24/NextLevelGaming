import React from 'react';
import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { ActionButton } from '@/components/ActionButton';
import { ScreenLayout } from '@/components/ScreenLayout';
import { SectionHeader } from '@/components/SectionHeader';
import { BOOKABLE_ITEMS } from '@/constants/experiences';
import { formatZar } from '@/constants/fees';
import { COLORS, FONT_FAMILY, RADIUS, SPACING } from '@/constants/theme';
import { useBooking } from '@/state/BookingContext';

export default function CalculateFeesScreen() {
  const { selectedItems, summary, addItem, removeItem, clearItems } = useBooking();
  const selectedIds = new Set(selectedItems.map((item) => item.id));

  return (
    <ScreenLayout showBack>
      <SectionHeader
        eyebrow="PLAN YOUR SESSION"
        title="Calculate fees"
        description="Select bookable items to see an itemized subtotal, discount, and estimated total."
      />

      <Text style={styles.helper}>
        Each package or individual experience can be selected once. Memberships are excluded.
      </Text>

      {BOOKABLE_ITEMS.map((item) => {
        const selected = selectedIds.has(item.id);

        return (
          <Pressable
            key={item.id}
            accessibilityRole="checkbox"
            accessibilityState={{ checked: selected }}
            accessibilityLabel={`${item.title}, ${item.price}`}
            onPress={() => (selected ? removeItem(item.id) : addItem(item.id))}
            style={({ pressed }) => [styles.option, selected && styles.selectedOption, pressed && styles.pressed]}>
            <View style={[styles.checkbox, selected && styles.checkedBox]}>
              {selected && <Text style={styles.checkmark}>✓</Text>}
            </View>
            <View style={styles.optionText}>
              <Text style={styles.optionTitle}>{item.title}</Text>
              <Text style={styles.optionDescription}>{item.categoryLabel}</Text>
              <Text style={styles.optionState}>{selected ? 'Added to booking' : 'Tap to add'}</Text>
            </View>
            <Text style={styles.optionPrice}>{item.price}</Text>
          </Pressable>
        );
      })}

      <View style={styles.summary}>
        <Text style={styles.summaryTitle}>ITEMIZED ESTIMATE</Text>
        {selectedItems.length === 0 ? (
          <Text style={styles.emptyText}>Select a package or activity to start your estimate.</Text>
        ) : (
          selectedItems.map((item) => (
            <View key={item.id} style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>{item.title}</Text>
              <Text style={styles.summaryValue}>{item.price}</Text>
            </View>
          ))
        )}
        <View style={styles.divider} />
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Subtotal</Text>
          <Text style={styles.summaryValue}>{formatZar(summary.subtotal)}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Discount ({summary.discountRate}%)</Text>
          <Text style={styles.summaryValue}>−{formatZar(summary.discountAmount)}</Text>
        </View>
        <View style={styles.totalStrip}>
          <Text style={styles.totalLabel}>ESTIMATED TOTAL</Text>
          <Text style={styles.totalValue}>{formatZar(summary.total)}</Text>
        </View>
        <Text style={styles.discountNote}>
          1 booking: 0% · 2: 5% · 3: 10% · More than 3: 15%. No taxes or extra charges are added.
        </Text>
      </View>

      {selectedItems.length > 0 && (
        <View style={styles.actions}>
          <ActionButton label="VIEW BOOKING SUMMARY" onPress={() => router.push('/bookings')} />
          <ActionButton label="CLEAR SELECTION" variant="outline" onPress={clearItems} />
        </View>
      )}
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  helper: {
    color: COLORS.mutedText,
    fontSize: 13,
    lineHeight: 20,
    fontFamily: FONT_FAMILY.regular,
    marginBottom: SPACING.medium,
  },
  option: {
    minHeight: 76,
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.small,
    padding: SPACING.medium,
    marginBottom: SPACING.small,
    borderRadius: RADIUS.medium,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.white,
  },
  selectedOption: {
    borderColor: COLORS.blue,
    backgroundColor: COLORS.paleBlue,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: COLORS.blue,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkedBox: {
    backgroundColor: COLORS.blue,
  },
  checkmark: {
    color: COLORS.white,
    fontSize: 15,
    lineHeight: 18,
    fontFamily: FONT_FAMILY.bold,
  },
  optionText: {
    flex: 1,
    minWidth: 0,
  },
  optionTitle: {
    color: COLORS.blue,
    fontSize: 14,
    fontFamily: FONT_FAMILY.bold,
  },
  optionDescription: {
    color: COLORS.darkText,
    fontSize: 12,
    fontFamily: FONT_FAMILY.regular,
    marginTop: 3,
  },
  optionState: {
    color: COLORS.mutedText,
    fontSize: 11,
    fontFamily: FONT_FAMILY.semibold,
    marginTop: 3,
  },
  optionPrice: {
    color: COLORS.blue,
    fontSize: 13,
    fontFamily: FONT_FAMILY.bold,
  },
  pressed: {
    opacity: 0.75,
  },
  summary: {
    padding: SPACING.medium,
    marginTop: SPACING.medium,
    borderRadius: RADIUS.large,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  summaryTitle: {
    color: COLORS.blue,
    fontSize: 16,
    fontFamily: FONT_FAMILY.bold,
    marginBottom: SPACING.medium,
  },
  emptyText: {
    color: COLORS.mutedText,
    fontSize: 14,
    lineHeight: 21,
    fontFamily: FONT_FAMILY.regular,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: SPACING.small,
    marginBottom: SPACING.small,
  },
  summaryLabel: {
    flex: 1,
    color: COLORS.darkText,
    fontSize: 14,
    fontFamily: FONT_FAMILY.regular,
  },
  summaryValue: {
    color: COLORS.blue,
    fontSize: 14,
    fontFamily: FONT_FAMILY.semibold,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.border,
    marginVertical: SPACING.small,
  },
  totalStrip: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: SPACING.small,
    padding: SPACING.medium,
    marginTop: SPACING.small,
    borderRadius: RADIUS.medium,
    backgroundColor: COLORS.paleGreen,
  },
  totalLabel: {
    flex: 1,
    color: COLORS.blue,
    fontSize: 13,
    fontFamily: FONT_FAMILY.bold,
  },
  totalValue: {
    color: COLORS.blue,
    fontSize: 22,
    fontFamily: FONT_FAMILY.extraBold,
  },
  discountNote: {
    color: COLORS.mutedText,
    fontSize: 12,
    lineHeight: 19,
    fontFamily: FONT_FAMILY.regular,
    marginTop: SPACING.medium,
  },
  actions: {
    gap: SPACING.small,
    marginTop: SPACING.medium,
  },
});
