import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Link } from 'expo-router';
import { ActionButton } from '@/components/ActionButton';
import { ContactMap } from '@/components/ContactMap';
import { ScreenLayout } from '@/components/ScreenLayout';
import { SectionHeader } from '@/components/SectionHeader';
import { CONTACT_DETAILS } from '@/constants/contact';
import { COLORS, FONT_FAMILY, RADIUS, SPACING } from '@/constants/theme';

type Feedback = {
  type: 'error' | 'success';
  message: string;
};

export default function ContactScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [feedback, setFeedback] = useState<Feedback | null>(null);

  const submitEnquiry = () => {
    if (!name.trim() || !email.trim() || !message.trim()) {
      setFeedback({
        type: 'error',
        message: 'Please complete your name, email address, and message.',
      });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setFeedback({
        type: 'error',
        message: 'Please enter a valid email address.',
      });
      return;
    }

    setFeedback({
      type: 'success',
      message: 'Your enquiry passed demo validation. It was not sent or stored.',
    });
  };

  return (
    <KeyboardAvoidingView
      style={styles.keyboard}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScreenLayout showBack keyboardShouldPersistTaps="handled">
        <SectionHeader
          eyebrow="CONTACT US"
          title="Get in touch"
          description="Ask about an experience or group event."
        />

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Location</Text>
          <Text style={styles.infoText}>{CONTACT_DETAILS.location}</Text>
          <Text style={styles.infoText}>
            Exact street address: {CONTACT_DETAILS.address ?? 'Not provided'}
          </Text>
        </View>
        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Contact details</Text>
          <Text style={styles.infoText}>Phone</Text>
          {CONTACT_DETAILS.phones.map((phone) => (
            <Link key={phone} href={`tel:${phone.replace(/\s/g, '')}`} style={styles.contactLink}>
              {phone}
            </Link>
          ))}
          <Text style={[styles.infoText, styles.emailLabel]}>Email</Text>
          <Link href={`mailto:${CONTACT_DETAILS.email}`} style={styles.contactLink}>
            {CONTACT_DETAILS.email}
          </Link>
        </View>
        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Opening hours</Text>
          <Text style={styles.infoText}>
            {CONTACT_DETAILS.openingHours ?? 'Opening hours have not been provided.'}
          </Text>
        </View>
        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Find us in Johannesburg</Text>
          <Text style={styles.infoText}>
            This map points to Johannesburg generally; an exact arena address was not provided.
          </Text>
          <ContactMap
            title="Google map centered on Johannesburg, South Africa"
            uri={CONTACT_DETAILS.mapEmbedUrl}
          />
          <Link href={CONTACT_DETAILS.mapUrl} asChild>
            <Pressable accessibilityRole="link" style={styles.mapAction}>
              <Text style={styles.mapActionText}>OPEN IN GOOGLE MAPS</Text>
            </Pressable>
          </Link>
        </View>

        <View style={styles.form}>
          <Text style={styles.formTitle}>Prepare an enquiry</Text>
          <Text style={styles.formNote}>
            Demo form only. Submitting validates the fields; it does not send or store a message.
          </Text>

          <Text style={styles.label}>Full name</Text>
          <TextInput
            accessibilityLabel="Full name"
            style={styles.input}
            placeholder="Enter your full name"
            placeholderTextColor={COLORS.mutedText}
            value={name}
            onChangeText={(value) => {
              setName(value);
              setFeedback(null);
            }}
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
            onChangeText={(value) => {
              setEmail(value);
              setFeedback(null);
            }}
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect={false}
            returnKeyType="next"
          />

          <Text style={styles.label}>Message</Text>
          <TextInput
            accessibilityLabel="Enquiry message"
            style={[styles.input, styles.messageInput]}
            placeholder="How can we help?"
            placeholderTextColor={COLORS.mutedText}
            value={message}
            onChangeText={(value) => {
              setMessage(value);
              setFeedback(null);
            }}
            multiline
            textAlignVertical="top"
            maxLength={1000}
          />
          <Text style={styles.characterCount}>{message.length}/1000</Text>
          {feedback && (
            <Text
              accessibilityRole="alert"
              accessibilityLiveRegion="polite"
              style={[
                styles.feedback,
                feedback.type === 'error' ? styles.errorFeedback : styles.successFeedback,
              ]}>
              {feedback.type === 'error' ? '⚠ ' : '✓ '}
              {feedback.message}
            </Text>
          )}
          <ActionButton label="VALIDATE ENQUIRY (DEMO)" onPress={submitEnquiry} />
        </View>
      </ScreenLayout>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboard: {
    flex: 1,
  },
  infoCard: {
    padding: SPACING.medium,
    marginBottom: SPACING.small,
    borderRadius: RADIUS.medium,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  infoTitle: {
    color: COLORS.blue,
    fontSize: 16,
    fontFamily: FONT_FAMILY.bold,
    marginBottom: SPACING.small,
  },
  infoText: {
    color: COLORS.darkText,
    fontSize: 14,
    lineHeight: 21,
    fontFamily: FONT_FAMILY.regular,
    marginBottom: 4,
  },
  contactLink: {
    color: COLORS.blue,
    fontSize: 14,
    lineHeight: 24,
    fontFamily: FONT_FAMILY.semibold,
    marginBottom: 4,
  },
  emailLabel: {
    marginTop: SPACING.small,
  },
  mapAction: {
    minHeight: 48,
    marginTop: SPACING.medium,
    paddingHorizontal: SPACING.medium,
    borderRadius: RADIUS.pill,
    borderWidth: 1,
    borderColor: COLORS.cyan,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapActionText: {
    color: COLORS.blue,
    fontSize: 14,
    fontFamily: FONT_FAMILY.semibold,
  },
  form: {
    padding: SPACING.medium,
    marginTop: SPACING.medium,
    borderRadius: RADIUS.large,
    backgroundColor: COLORS.paleBlue,
  },
  formTitle: {
    color: COLORS.blue,
    fontSize: 20,
    fontFamily: FONT_FAMILY.bold,
  },
  formNote: {
    color: COLORS.mutedText,
    fontSize: 13,
    lineHeight: 20,
    fontFamily: FONT_FAMILY.regular,
    marginTop: SPACING.small,
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
  messageInput: {
    minHeight: 132,
  },
  characterCount: {
    color: COLORS.mutedText,
    fontSize: 12,
    fontFamily: FONT_FAMILY.regular,
    textAlign: 'right',
    marginTop: -SPACING.small,
    marginBottom: SPACING.medium,
  },
  feedback: {
    fontSize: 13,
    lineHeight: 20,
    fontFamily: FONT_FAMILY.semibold,
    marginBottom: SPACING.medium,
  },
  errorFeedback: {
    color: COLORS.blue,
  },
  successFeedback: {
    color: COLORS.blue,
  },
});
