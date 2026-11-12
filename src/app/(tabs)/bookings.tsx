import React from 'react';
import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { ActionButton } from '@/components/ActionButton';
import { ScreenLayout } from '@/components/ScreenLayout';
import { SectionHeader } from '@/components/SectionHeader';
import { useBooking } from '@/state/BookingContext';
import { formatZar } from '@/constants/fees';
import { COLORS, FONT_FAMILY, RADIUS, SPACING } from '@/constants/theme';

export default function BookingsScreen() {
  const { selectedItems, summary, removeItem, clearItems } = useBooking();

  return (
    <ScreenLayout>
      <SectionHeader
        eyebrow="YOUR SELECTION"
        title="Booking summary"
        description="Review selected bookable experiences and the estimated total."
      />

      {selectedItems.length === 0 ? (
        <View style={styles.emptyState}>
          <Text style={styles.emptyTitle}>Your booking is empty</Text>
          <Text style={styles.emptyText}>
            Browse the packages and activities, then add an experience to see your estimate.
          </Text>
          <ActionButton label="EXPLORE EXPERIENCES" onPress={() => router.push('/explore')} />
        </View>
      ) : (
        <>
          {selectedItems.map((item) => (
            <View key={item.id} style={styles.itemCard}>
              <View style={styles.itemDetails}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemDescription}>{item.categoryLabel}</Text>
              </View>
              <View style={styles.itemActions}>
                <Text style={styles.itemPrice}>{item.price}</Text>
                <Pressable
                  accessibilityRole="button"
                  accessibilityLabel={`Remove ${item.title} from booking`}
                  onPress={() => removeItem(item.id)}
                  style={styles.removeButton}>
                  <Text style={styles.removeLabel}>Remove</Text>
                </Pressable>
              </View>
            </View>
          ))}

          <View style={styles.summaryCard}>
            <Text style={styles.summaryTitle}>PRICE BREAKDOWN</Text>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Selected bookings</Text>
              <Text style={styles.summaryValue}>{summary.bookingCount}</Text>
            </View>
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
              One booking: 0% · Two: 5% · Three: 10% · More than three: 15%. Memberships are
              excluded from this estimate.
            </Text>
          </View>

          <Text style={styles.disclaimer}>
            Demo estimate only. No reservation or payment is created.
          </Text>
          <ActionButton label="CONTINUE TO CONFIRMATION" onPress={() => router.push('/confirmation')} />
          <View style={styles.clearButton}>
            <ActionButton label="CLEAR SELECTION" variant="outline" onPress={clearItems} />
          </View>
        </>
      )}
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  emptyState: {
    gap: SPACING.medium,
    padding: SPACING.large,
    borderRadius: RADIUS.large,
    backgroundColor: COLORS.paleBlue,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  emptyTitle: {
    color: COLORS.blue,
    fontSize: 20,
    fontFamily: FONT_FAMILY.bold,
  },
  emptyText: {
    color: COLORS.darkText,
    fontSize: 14,
    lineHeight: 22,
    fontFamily: FONT_FAMILY.regular,
  },
  itemCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: SPACING.small,
    padding: SPACING.medium,
    marginBottom: SPACING.small,
    backgroundColor: COLORS.white,
    borderRadius: RADIUS.medium,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  itemDetails: {
    flex: 1,
  },
  itemTitle: {
    color: COLORS.blue,
    fontSize: 16,
    fontFamily: FONT_FAMILY.bold,
  },
  itemDescription: {
    color: COLORS.mutedText,
    fontSize: 13,
    fontFamily: FONT_FAMILY.regular,
    marginTop: 4,
  },
  itemActions: {
    alignItems: 'flex-end',
    gap: 5,
  },
  itemPrice: {
    color: COLORS.blue,
    fontSize: 15,
    fontFamily: FONT_FAMILY.bold,
  },
  removeButton: {
    minHeight: 44,
    minWidth: 64,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  removeLabel: {
    color: COLORS.blue,
    fontSize: 12,
    fontFamily: FONT_FAMILY.semibold,
    textDecorationLine: 'underline',
  },
  summaryCard: {
    marginTop: SPACING.medium,
    padding: SPACING.medium,
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
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: SPACING.small,
    marginBottom: SPACING.small,
  },
  summaryLabel: {
    color: COLORS.darkText,
    fontSize: 14,
    fontFamily: FONT_FAMILY.regular,
  },
  summaryValue: {
    color: COLORS.blue,
    fontSize: 14,
    fontFamily: FONT_FAMILY.semibold,
  },
  totalStrip: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: SPACING.small,
    marginTop: SPACING.small,
    padding: SPACING.medium,
    borderRadius: RADIUS.medium,
    backgroundColor: COLORS.paleGreen,
  },
  totalLabel: {
    flexShrink: 1,
    color: COLORS.blue,
    fontSize: 13,
    fontFamily: FONT_FAMILY.bold,
  },
  totalValue: {
    color: COLORS.blue,
    fontSize: 21,
    fontFamily: FONT_FAMILY.extraBold,
  },
  discountNote: {
    color: COLORS.mutedText,
    fontSize: 12,
    lineHeight: 19,
    fontFamily: FONT_FAMILY.regular,
    marginTop: SPACING.medium,
  },
  disclaimer: {
    color: COLORS.mutedText,
    fontSize: 13,
    lineHeight: 20,
    textAlign: 'center',
    fontFamily: FONT_FAMILY.regular,
    marginVertical: SPACING.medium,
  },
  clearButton: {
    marginTop: SPACING.small,
  },
});
