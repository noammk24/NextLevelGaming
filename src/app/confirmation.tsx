import React from 'react';
import { router } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { ActionButton } from '@/components/ActionButton';
import { ScreenLayout } from '@/components/ScreenLayout';
import { SectionHeader } from '@/components/SectionHeader';
import { formatZar } from '@/constants/fees';
import { COLORS, FONT_FAMILY, RADIUS, SPACING } from '@/constants/theme';
import { useBooking } from '@/state/BookingContext';

export default function ConfirmationScreen() {
  const { selectedItems, summary, clearItems } = useBooking();

  if (selectedItems.length === 0) {
    return (
      <ScreenLayout showBack>
        <SectionHeader eyebrow="DEMO CONFIRMATION" title="No items to confirm" />
        <Text style={styles.body}>Add a package or activity before reviewing a confirmation.</Text>
        <View style={styles.action}>
          <ActionButton label="EXPLORE EXPERIENCES" onPress={() => router.replace('/explore')} />
        </View>
      </ScreenLayout>
    );
  }

  const startNewSelection = () => {
    clearItems();
    router.replace('/explore');
  };

  return (
    <ScreenLayout showBack>
      <View style={styles.successIcon} accessibilityLabel="Success">
        <Text style={styles.checkmark}>✓</Text>
      </View>
      <SectionHeader
        eyebrow="DEMO CONFIRMATION"
        title="Your summary is ready"
        description="Your selected items and estimate are confirmed in this demo flow."
      />

      <View style={styles.summaryCard}>
        {selectedItems.map((item) => (
          <View key={item.id} style={styles.summaryRow}>
            <Text style={styles.itemName}>{item.title}</Text>
            <Text style={styles.itemPrice}>{item.price}</Text>
          </View>
        ))}
        <View style={styles.divider} />
        <View style={styles.summaryRow}>
          <Text style={styles.totalLabel}>ESTIMATED TOTAL</Text>
          <Text style={styles.totalValue}>{formatZar(summary.total)}</Text>
        </View>
      </View>

      <View style={styles.notice}>
        <Text style={styles.noticeTitle}>No real reservation was made</Text>
        <Text style={styles.body}>
          This demo does not contact the arena, reserve a session, or process payment.
        </Text>
      </View>
      <View style={styles.action}>
        <ActionButton label="START A NEW SELECTION" onPress={startNewSelection} />
      </View>
      <View style={styles.action}>
        <ActionButton
          label="RETURN TO BOOKING"
          variant="outline"
          onPress={() => router.replace('/bookings')}
        />
      </View>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  successIcon: {
    width: 64,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACING.medium,
    borderRadius: 32,
    backgroundColor: COLORS.paleGreen,
    borderWidth: 1,
    borderColor: COLORS.green,
  },
  checkmark: {
    color: COLORS.blue,
    fontSize: 30,
    fontFamily: FONT_FAMILY.bold,
  },
  summaryCard: {
    padding: SPACING.medium,
    borderRadius: RADIUS.large,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.white,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: SPACING.small,
    marginVertical: SPACING.small,
  },
  itemName: {
    flex: 1,
    color: COLORS.darkText,
    fontSize: 14,
    fontFamily: FONT_FAMILY.regular,
  },
  itemPrice: {
    color: COLORS.blue,
    fontSize: 14,
    fontFamily: FONT_FAMILY.semibold,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.border,
    marginVertical: SPACING.small,
  },
  totalLabel: {
    flex: 1,
    color: COLORS.blue,
    fontSize: 13,
    fontFamily: FONT_FAMILY.bold,
  },
  totalValue: {
    color: COLORS.blue,
    fontSize: 20,
    fontFamily: FONT_FAMILY.extraBold,
  },
  notice: {
    padding: SPACING.medium,
    marginTop: SPACING.medium,
    borderRadius: RADIUS.medium,
    backgroundColor: COLORS.paleBlue,
  },
  noticeTitle: {
    color: COLORS.blue,
    fontSize: 15,
    fontFamily: FONT_FAMILY.bold,
    marginBottom: SPACING.small,
  },
  body: {
    color: COLORS.darkText,
    fontSize: 14,
    lineHeight: 21,
    fontFamily: FONT_FAMILY.regular,
  },
  action: {
    marginTop: SPACING.medium,
  },
});
