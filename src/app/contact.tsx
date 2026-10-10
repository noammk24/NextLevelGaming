import React, { useState } from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

export default function ContactScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (!name.trim() || !email.trim() || !message.trim()) {
      Alert.alert('Missing information', 'Please complete all fields.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      Alert.alert('Invalid email', 'Please enter a valid email address.');
      return;
    }

    Alert.alert(
      'Message submitted',
      'Thank you for contacting Next Level Gaming & Esports Arena!'
    );

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>NL</Text>
        <View>
          <Text style={styles.brand}>NEXT LEVEL</Text>
          <Text style={styles.subtitle}>GAMING & ESPORTS ARENA</Text>
        </View>
      </View>

      <View style={styles.hero}>
        <Text style={styles.title}>CONTACT US</Text>
        <Text style={styles.heroText}>
          Have a question? Get in touch with our team.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>GET IN TOUCH</Text>

        <Text style={styles.info}>
          📍 Location: Johannesburg, South Africa
        </Text>
        <Text style={styles.info}>
          🎮 Gaming, esports and special events
        </Text>

        <Text style={styles.heading}>SEND US A MESSAGE</Text>

        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your full name"
          placeholderTextColor="#999999"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email address"
          placeholderTextColor="#999999"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.label}>Message</Text>
        <TextInput
          style={[styles.input, styles.messageInput]}
          placeholder="How can we help you?"
          placeholderTextColor="#999999"
          value={message}
          onChangeText={setMessage}
          multiline
          textAlignVertical="top"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit}
        >
          <Text style={styles.buttonText}>SUBMIT MESSAGE</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.push('/')}
        >
          <Text style={styles.backText}>BACK TO HOME</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0B0B20',
  },
  container: {
    flex: 1,
    backgroundColor: '#0B0B20',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#170398',
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#5ACF29',
    color: '#170398',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 21,
    fontWeight: '900',
    marginRight: 12,
  },
  brand: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '900',
  },
  subtitle: {
    color: '#D9D9D9',
    fontSize: 10,
    marginTop: 3,
  },
  hero: {
    backgroundColor: '#0499B1',
    padding: 28,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: '900',
  },
  heroText: {
    color: '#FFFFFF',
    fontSize: 14,
    marginTop: 8,
  },
  section: {
    padding: 20,
  },
  heading: {
    color: '#5ACF29',
    fontSize: 21,
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 16,
  },
  info: {
    color: '#FFFFFF',
    fontSize: 14,
    marginBottom: 12,
    lineHeight: 22,
  },
  label: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 14,
    fontSize: 15,
    marginBottom: 18,
    color: '#111111',
  },
  messageInput: {
    minHeight: 120,
  },
  button: {
    backgroundColor: '#5ACF29',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 5,
  },
  buttonText: {
    color: '#170398',
    fontWeight: '900',
  },
  backButton: {
    borderWidth: 1,
    borderColor: '#5ACF29',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 14,
    marginBottom: 20,
  },
  backText: {
    color: '#5ACF29',
    fontWeight: 'bold',
  },
});