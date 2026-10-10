import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { ActionButton } from '@/components/ActionButton';
import { BrandHeader } from '@/components/BrandHeader';
import { COLORS, RADIUS, SPACING } from '@/constants/theme';

export default function ContactScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [feedback, setFeedback] = useState<{
    type: 'error' | 'info';
    message: string;
  } | null>(null);

  const handleSubmit = () => {
    if (!name.trim() || !email.trim() || !message.trim()) {
      setFeedback({
        type: 'error',
        message: 'Please complete your name, email address and message.',
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
      type: 'info',
      message: 'Your details are valid. This project demo does not send or store messages.',
    });
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <KeyboardAvoidingView
        style={styles.safeArea}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}>
          <BrandHeader />
          <View style={styles.hero}>
            <Text style={styles.eyebrow}>WE’RE HERE TO HELP</Text>
            <Text style={styles.title}>CONTACT US</Text>
            <Text style={styles.heroText}>
              Have a question about an experience or group event? Prepare an enquiry below.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>GET IN TOUCH</Text>
            <Text style={styles.info}>Johannesburg, South Africa</Text>
            <Text style={styles.info}>
              Gaming, esports, parties, school outings and corporate events.
            </Text>
            <Text style={styles.formNote}>
              Complete the form to validate your enquiry. This demo does not send or store messages.
            </Text>

            <Text style={styles.label}>Full name</Text>
            <TextInput
              accessibilityLabel="Full name"
              style={styles.input}
              placeholder="Enter your full name"
              placeholderTextColor="#777777"
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
              placeholderTextColor="#777777"
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
              placeholderTextColor="#777777"
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
                style={[
                  styles.feedback,
                  feedback.type === 'error' ? styles.errorFeedback : styles.infoFeedback,
                ]}>
                {feedback.message}
              </Text>
            )}

            <ActionButton label="VALIDATE ENQUIRY" onPress={handleSubmit} />
            <View style={styles.secondaryAction}>
              <ActionButton
                label="VIEW EXPERIENCES"
                variant="outline"
                onPress={() => router.push('/overview')}
              />
            </View>
            <View style={styles.secondaryAction}>
              <ActionButton
                label="BACK TO HOME"
                variant="secondary"
                onPress={() => router.push('/')}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
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
    letterSpacing: 1,
  },
  title: {
    color: COLORS.white,
    fontSize: 32,
    fontWeight: '900',
    marginTop: SPACING.small,
  },
  heroText: {
    color: COLORS.white,
    fontSize: 15,
    lineHeight: 23,
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
  info: {
    color: COLORS.white,
    fontSize: 14,
    lineHeight: 21,
    marginBottom: SPACING.small,
  },
  formNote: {
    color: COLORS.grey,
    fontSize: 13,
    lineHeight: 19,
    backgroundColor: COLORS.card,
    borderRadius: RADIUS.small,
    padding: SPACING.medium,
    marginVertical: SPACING.medium,
  },
  label: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: '800',
    marginBottom: SPACING.small,
  },
  input: {
    backgroundColor: COLORS.white,
    borderRadius: RADIUS.small,
    padding: SPACING.medium,
    fontSize: 15,
    marginBottom: SPACING.medium,
    color: COLORS.darkText,
  },
  messageInput: {
    minHeight: 130,
  },
  characterCount: {
    alignSelf: 'flex-end',
    color: COLORS.grey,
    fontSize: 12,
    marginTop: -SPACING.small,
    marginBottom: SPACING.medium,
  },
  feedback: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: SPACING.medium,
  },
  errorFeedback: {
    color: COLORS.cyan,
  },
  infoFeedback: {
    color: COLORS.green,
  },
  secondaryAction: {
    marginTop: SPACING.small,
  },
});
