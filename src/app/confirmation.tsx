import React, { useState } from 'react';
import { router } from 'expo-router';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { ActionButton } from '@/components/ActionButton';
import { ScreenLayout } from '@/components/ScreenLayout';
import { SectionHeader } from '@/components/SectionHeader';
import { formatZar } from '@/constants/fees';
import { COLORS, FONT_FAMILY, RADIUS, SPACING } from '@/constants/theme';
import { submitFormspreeForm } from '@/services/formspree';
import { useBooking } from '@/state/BookingContext';

type Feedback = {
  type: 'error';
  message: string;
};

export default function ConfirmationScreen() {
  const { selectedItems, summary, clearItems } = useBooking();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('');
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [requestSent, setRequestSent] = useState(false);

  if (selectedItems.length === 0) {
    return (
      <ScreenLayout showBack>
        <SectionHeader eyebrow="BOOKING REQUEST" title="No items to request" />
        <Text style={styles.body}>Add a package or activity before sending a booking request.</Text>
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

  const updateField = (setter: (value: string) => void) => (value: string) => {
    setter(value);
    setFeedback(null);
  };

  const submitBookingRequest = async () => {
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedDate = preferredDate.trim();
    const trimmedTime = preferredTime.trim();

    if (!trimmedName || !trimmedEmail || !trimmedDate || !trimmedTime) {
      setFeedback({
        type: 'error',
        message: 'Please enter your name, email, preferred date, and preferred time.',
      });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setFeedback({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }

    const dateParts = /^(\d{4})-(\d{2})-(\d{2})$/.exec(trimmedDate);
    if (!dateParts) {
      setFeedback({ type: 'error', message: 'Enter the preferred date as YYYY-MM-DD.' });
      return;
    }

    const [year, month, day] = dateParts.slice(1).map(Number);
    const parsedDate = new Date(Date.UTC(year, month - 1, day));
    if (
      year < 1000 ||
      parsedDate.getUTCFullYear() !== year ||
      parsedDate.getUTCMonth() !== month - 1 ||
      parsedDate.getUTCDate() !== day
    ) {
      setFeedback({ type: 'error', message: 'Enter a valid calendar date as YYYY-MM-DD.' });
      return;
    }

    if (!/^([01]\d|2[0-3]):[0-5]\d$/.test(trimmedTime)) {
      setFeedback({
        type: 'error',
        message: 'Enter the preferred time in 24-hour format, such as 14:30.',
      });
      return;
    }

    setFeedback(null);
    setIsSubmitting(true);

    try {
      const result = await submitFormspreeForm({
        _subject: 'New booking request from Next Level Gaming',
        name: trimmedName,
        email: trimmedEmail,
        phone: phone.trim(),
        preferred_date: trimmedDate,
        preferred_time: trimmedTime,
        selected_experiences: selectedItems
          .map((item) => `${item.title} (${item.price})`)
          .join(', '),
        estimated_total: formatZar(summary.total),
      });

      if (!result.success) {
        const message =
          result.reason === 'network'
            ? 'Could not reach the booking form. Check your internet connection and try again.'
            : `The booking form could not accept your request (HTTP ${result.statusCode}). Please try again or contact the arena.`;
        setFeedback({
          type: 'error',
          message,
        });
        return;
      }

      setRequestSent(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.keyboard}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScreenLayout showBack keyboardShouldPersistTaps="handled">
        {requestSent ? (
          <>
            <View style={styles.successIcon} accessibilityLabel="Request received">
              <Text style={styles.checkmark}>✓</Text>
            </View>
            <SectionHeader
              eyebrow="REQUEST RECEIVED"
              title="Thanks for your request"
              description="Your booking request has been sent to the arena."
            />
            <View style={styles.notice}>
              <Text style={styles.noticeTitle}>The arena still needs to confirm</Text>
              <Text style={styles.body}>
                Your preferred session is not reserved yet. The arena will contact you to confirm
                availability and next steps.
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
          </>
        ) : (
          <>
            <SectionHeader
              eyebrow="BOOKING REQUEST"
              title="Request a booking"
              description="Send your selections and preferred session details. The arena will follow up to confirm availability."
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

            <View style={styles.form}>
              <Text style={styles.formNote}>
                Your details and request will be sent to the arena via Formspree. Submitting does
                not guarantee a reservation.
              </Text>

              <Text style={styles.label}>Full name</Text>
              <TextInput
                accessibilityLabel="Full name"
                style={styles.input}
                placeholder="Enter your full name"
                placeholderTextColor={COLORS.mutedText}
                value={name}
                onChangeText={updateField(setName)}
                autoCapitalize="words"
                autoComplete="name"
                returnKeyType="next"
              />

              <Text style={styles.label}>Email address</Text>
              <TextInput
                accessibilityLabel="Email address"
                style={styles.input}
                placeholder="Enter your email address"
                placeholderTextColor={COLORS.mutedText}
                value={email}
                onChangeText={updateField(setEmail)}
                keyboardType="email-address"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect={false}
                returnKeyType="next"
              />

              <Text style={styles.label}>Phone number (optional)</Text>
              <TextInput
                accessibilityLabel="Phone number (optional)"
                style={styles.input}
                placeholder="Enter your phone number"
                placeholderTextColor={COLORS.mutedText}
                value={phone}
                onChangeText={updateField(setPhone)}
                keyboardType="phone-pad"
                autoComplete="tel"
                returnKeyType="next"
              />

              <Text style={styles.label}>Preferred date</Text>
              <TextInput
                accessibilityLabel="Preferred date"
                style={styles.input}
                placeholder="YYYY-MM-DD"
                placeholderTextColor={COLORS.mutedText}
                value={preferredDate}
                onChangeText={updateField(setPreferredDate)}
                autoCapitalize="none"
                returnKeyType="next"
              />

              <Text style={styles.label}>Preferred time (24-hour format)</Text>
              <TextInput
                accessibilityLabel="Preferred time"
                style={styles.input}
                placeholder="For example, 14:30"
                placeholderTextColor={COLORS.mutedText}
                value={preferredTime}
                onChangeText={updateField(setPreferredTime)}
                autoCapitalize="none"
                returnKeyType="done"
              />

              {feedback && (
                <Text
                  accessibilityRole="alert"
                  accessibilityLiveRegion="polite"
                  style={styles.feedback}>
                  {feedback.message}
                </Text>
              )}
              <ActionButton
                label={isSubmitting ? 'SENDING REQUEST...' : 'SEND BOOKING REQUEST'}
                onPress={submitBookingRequest}
                disabled={isSubmitting}
              />
            </View>
          </>
        )}
      </ScreenLayout>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboard: {
    flex: 1,
  },
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
  form: {
    padding: SPACING.medium,
    marginTop: SPACING.medium,
    marginBottom: SPACING.large,
    borderRadius: RADIUS.large,
    backgroundColor: COLORS.paleBlue,
  },
  formNote: {
    color: COLORS.mutedText,
    fontSize: 13,
    lineHeight: 20,
    fontFamily: FONT_FAMILY.regular,
    marginBottom: SPACING.medium,
  },
  label: {
    color: COLORS.blue,
    fontSize: 14,
    fontFamily: FONT_FAMILY.semibold,
    marginBottom: SPACING.small,
  },
  input: {
    minHeight: 48,
    paddingHorizontal: SPACING.medium,
    paddingVertical: 12,
    marginBottom: SPACING.medium,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: RADIUS.small,
    backgroundColor: COLORS.white,
    color: COLORS.darkText,
    fontSize: 14,
    fontFamily: FONT_FAMILY.regular,
  },
  feedback: {
    color: COLORS.blue,
    fontSize: 13,
    lineHeight: 20,
    fontFamily: FONT_FAMILY.semibold,
    marginBottom: SPACING.medium,
  },
  action: {
    marginTop: SPACING.medium,
  },
});
