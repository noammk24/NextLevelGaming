import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { router } from 'expo-router';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>NL</Text>

        <View>
          <Text style={styles.brand}>NEXT LEVEL</Text>
          <Text style={styles.subtitle}>GAMING & ESPORTS ARENA</Text>
        </View>
      </View>

      {/* Page Title */}
      <View style={styles.hero}>
        <Text style={styles.title}>ABOUT US</Text>
        <Text style={styles.titleLine}>
          LEVEL UP YOUR EXPERIENCE
        </Text>
      </View>

      {/* About */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>WHO WE ARE</Text>

        <Text style={styles.text}>
          Next Level Gaming & Esports Arena is a modern gaming and
          esports venue based in Johannesburg. We provide an exciting
          environment where gamers, families, schools, gaming clubs
          and businesses can enjoy competitive and recreational gaming.
        </Text>

        <Text style={styles.text}>
          Our arena hosts gaming events, esports tournaments, birthday
          parties, school outings and corporate team-building
          experiences.
        </Text>
      </View>

      {/* Mission */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>OUR MISSION</Text>

        <Text style={styles.cardText}>
          To create an exciting, welcoming and high-quality gaming
          environment where everyone can connect, compete and have fun.
        </Text>
      </View>

      {/* What We Offer */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>WHAT WE OFFER</Text>

        <View style={styles.offer}>
          <Text style={styles.offerTitle}>🎮 Gaming Experiences</Text>
          <Text style={styles.offerText}>
            Enjoy a variety of gaming and entertainment experiences.
          </Text>
        </View>

        <View style={styles.offer}>
          <Text style={styles.offerTitle}>🏆 Esports Events</Text>
          <Text style={styles.offerText}>
            Take part in competitive gaming and esports activities.
          </Text>
        </View>

        <View style={styles.offer}>
          <Text style={styles.offerTitle}>🎉 Special Events</Text>
          <Text style={styles.offerText}>
            Birthday parties, school outings and corporate events.
          </Text>
        </View>
      </View>

      {/* Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/overview')}
      >
        <Text style={styles.buttonText}>EXPLORE OUR EXPERIENCES</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
    width: 55,
    height: 55,
    borderRadius: 30,
    backgroundColor: '#5ACF29',
    color: '#170398',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    marginRight: 12,
  },

  brand: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

  subtitle: {
    color: '#D9D9D9',
    fontSize: 10,
    marginTop: 2,
  },

  hero: {
    padding: 30,
    backgroundColor: '#0499B1',
  },

  title: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: '900',
  },

  titleLine: {
    color: '#D9D9D9',
    fontSize: 14,
    marginTop: 8,
    fontWeight: 'bold',
  },

  section: {
    padding: 20,
  },

  sectionTitle: {
    color: '#5ACF29',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },

  text: {
    color: '#FFFFFF',
    fontSize: 15,
    lineHeight: 24,
    marginBottom: 14,
  },

  card: {
    margin: 20,
    padding: 22,
    borderRadius: 16,
    backgroundColor: '#170398',
    borderWidth: 1,
    borderColor: '#0499B1',
  },

  cardTitle: {
    color: '#5ACF29',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  cardText: {
    color: '#FFFFFF',
    fontSize: 15,
    lineHeight: 23,
  },

  offer: {
    backgroundColor: '#151538',
    padding: 18,
    borderRadius: 14,
    marginBottom: 12,
  },

  offerTitle: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 6,
  },

  offerText: {
    color: '#D9D9D9',
    fontSize: 14,
    lineHeight: 20,
  },

  button: {
    backgroundColor: '#5ACF29',
    margin: 20,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },

  buttonText: {
    color: '#170398',
    fontWeight: 'bold',
    fontSize: 15,
  },
});