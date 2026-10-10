import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { COLORS } from '@/constants/theme';

const bookingOptions = [
  { id: 'ultimate', name: 'Ultimate Gamer Pass', price: 1500 },
  { id: 'vip', name: 'VIP Gaming Experience', price: 1500 },
  { id: 'esports', name: 'Esports Training Package', price: 1500 },
  { id: 'birthday', name: 'Birthday Party Package', price: 1500 },
  { id: 'vr', name: 'Virtual Reality Experience', price: 750 },
  { id: 'racing', name: 'Racing Simulator Challenge', price: 750 },
  { id: 'escape', name: 'Escape Room Challenge', price: 750 },
];

export default function CalculateFeesScreen() {
  const [selectedBookings, setSelectedBookings] = useState<string[]>([]);

  const toggleBooking = (id: string) => {
    setSelectedBookings((previous) =>
      previous.includes(id)
        ? previous.filter((bookingId) => bookingId !== id)
        : [...previous, id]
    );
  };

  const selectedItems = bookingOptions.filter((item) =>
    selectedBookings.includes(item.id)
  );

  const subtotal = selectedItems.reduce(
    (total, item) => total + item.price,
    0
  );

  const bookingCount = selectedBookings.length;

  let discountRate = 0;

  if (bookingCount === 2) {
    discountRate = 5;
  } else if (bookingCount === 3) {
    discountRate = 10;
  } else if (bookingCount > 3) {
    discountRate = 15;
  }

  const discountAmount = subtotal * (discountRate / 100);
  const finalTotal = subtotal - discountAmount;

  const formatPrice = (amount: number) =>
    `R${amount.toLocaleString('en-ZA', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>NL</Text>
        </View>

        <View>
          <Text style={styles.brand}>NEXT LEVEL</Text>
          <Text style={styles.brandSubtitle}>
            GAMING & ESPORTS ARENA
          </Text>
        </View>
      </View>

      {/* Page heading */}
      <View style={styles.hero}>
        <Text style={styles.heroTitle}>CALCULATE FEES</Text>
        <Text style={styles.heroSubtitle}>
          Build your gaming experience.
        </Text>
      </View>

      {/* Instructions */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>SELECT YOUR BOOKINGS</Text>

        <Text style={styles.description}>
          Select one or more packages or individual experiences.
          Your total and available discount will update automatically.
        </Text>

        {bookingOptions.map((item) => {
          const isSelected = selectedBookings.includes(item.id);

          return (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.bookingCard,
                isSelected && styles.selectedCard,
              ]}
              onPress={() => toggleBooking(item.id)}
              activeOpacity={0.8}
            >
              <View
                style={[
                  styles.checkbox,
                  isSelected && styles.checkedBox,
                ]}
              >
                <Text style={styles.checkmark}>
                  {isSelected ? '✓' : ''}
                </Text>
              </View>

              <View style={styles.bookingInfo}>
                <Text style={styles.bookingName}>{item.name}</Text>
                <Text style={styles.bookingPrice}>
                  {formatPrice(item.price)}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Calculation summary */}
      <View style={styles.summary}>
        <Text style={styles.summaryTitle}>YOUR BOOKING SUMMARY</Text>

        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Selected bookings</Text>
          <Text style={styles.summaryValue}>{bookingCount}</Text>
        </View>

        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Subtotal</Text>
          <Text style={styles.summaryValue}>
            {formatPrice(subtotal)}
          </Text>
        </View>

        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Discount</Text>
          <Text style={styles.discountValue}>
            {discountRate}% ({formatPrice(discountAmount)})
          </Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>TOTAL</Text>
          <Text style={styles.totalValue}>
            {formatPrice(finalTotal)}
          </Text>
        </View>

        <Text style={styles.discountNote}>
          1 booking: 0% discount | 2 bookings: 5% | 3 bookings: 10%
          | More than 3: 15%
        </Text>

        <TouchableOpacity
          style={styles.clearButton}
          onPress={() => setSelectedBookings([])}
        >
          <Text style={styles.clearButtonText}>CLEAR SELECTION</Text>
        </TouchableOpacity>
      </View>

      {/* Return navigation */}
      <TouchableOpacity
  style={styles.backButton}
  onPress={() => router.push('/overview')}
>
  <Text style={styles.backButtonText}>BACK TO OVERVIEW</Text>
</TouchableOpacity>

      <View style={styles.bottomSpace} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: COLORS.blue,
  },

  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  logoText: {
    color: COLORS.blue,
    fontSize: 20,
    fontWeight: '900',
  },

  brand: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: '900',
  },

  brandSubtitle: {
    color: COLORS.grey,
    fontSize: 10,
    marginTop: 3,
  },

  hero: {
    padding: 28,
    backgroundColor: COLORS.cyan,
  },

  heroTitle: {
    color: COLORS.white,
    fontSize: 28,
    fontWeight: '900',
  },

  heroSubtitle: {
    color: COLORS.white,
    fontSize: 15,
    marginTop: 8,
  },

  section: {
    padding: 20,
  },

  sectionTitle: {
    color: COLORS.green,
    fontSize: 21,
    fontWeight: '900',
    marginBottom: 10,
  },

  description: {
    color: COLORS.grey,
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 18,
  },

  bookingCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.card,
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: COLORS.blue,
  },

  selectedCard: {
    borderColor: COLORS.green,
    backgroundColor: '#202B35',
  },

  checkbox: {
    width: 25,
    height: 25,
    borderWidth: 2,
    borderColor: COLORS.grey,
    borderRadius: 6,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },

  checkedBox: {
    backgroundColor: COLORS.green,
    borderColor: COLORS.green,
  },

  checkmark: {
    color: COLORS.blue,
    fontSize: 17,
    fontWeight: '900',
  },

  bookingInfo: {
    flex: 1,
  },

  bookingName: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: 'bold',
  },

  bookingPrice: {
    color: COLORS.green,
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 6,
  },

  summary: {
    marginHorizontal: 20,
    marginTop: 5,
    padding: 20,
    backgroundColor: COLORS.blue,
    borderRadius: 16,
  },

  summaryTitle: {
    color: COLORS.green,
    fontSize: 19,
    fontWeight: '900',
    marginBottom: 20,
  },

  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    gap: 10,
  },

  summaryLabel: {
    color: COLORS.grey,
    fontSize: 14,
    flexShrink: 1,
  },

  summaryValue: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: 'bold',
  },

  discountValue: {
    color: COLORS.green,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'right',
    flexShrink: 1,
  },

  divider: {
    height: 1,
    backgroundColor: COLORS.cyan,
    marginVertical: 10,
  },

  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },

  totalLabel: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: '900',
  },

  totalValue: {
    color: COLORS.green,
    fontSize: 23,
    fontWeight: '900',
  },

  discountNote: {
    color: COLORS.grey,
    fontSize: 11,
    lineHeight: 18,
    marginTop: 12,
  },

  clearButton: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: COLORS.green,
    borderRadius: 10,
    padding: 13,
    alignItems: 'center',
  },

  clearButtonText: {
    color: COLORS.green,
    fontSize: 13,
    fontWeight: 'bold',
  },

  backButton: {
    marginHorizontal: 20,
    marginTop: 18,
    padding: 15,
    backgroundColor: COLORS.green,
    borderRadius: 10,
    alignItems: 'center',
  },

  backButtonText: {
    color: COLORS.blue,
    fontWeight: '900',
  },

  bottomSpace: {
    height: 30,
  },
});