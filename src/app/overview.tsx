import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { router } from 'expo-router';

const packages = [
  'Ultimate Gamer Pass',
  'VIP Gaming Experience',
  'Esports Training Package',
  'Birthday Party Package',
];

const experiences = [
  'Virtual Reality Experience',
  'Racing Simulator Challenge',
  'Escape Room Challenge',
];

export default function OverviewScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>NL</Text>

        <View>
          <Text style={styles.brand}>NEXT LEVEL</Text>
          <Text style={styles.subtitle}>
            GAMING & ESPORTS ARENA
          </Text>
        </View>
      </View>

      {/* Hero */}
      <View style={styles.hero}>
        <Text style={styles.heroTitle}>EXPLORE</Text>
        <Text style={styles.heroSubtitle}>
          OUR GAMING EXPERIENCES
        </Text>
      </View>

      {/* Gaming Packages */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>GAMING PACKAGES</Text>

        <Text style={styles.description}>
          Choose from our range of gaming packages designed for
          gamers, groups and special events.
        </Text>

        {packages.map((item, index) => (
          <View style={styles.card} key={item}>
            <View style={styles.number}>
              <Text style={styles.numberText}>{index + 1}</Text>
            </View>

            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{item}</Text>
              <Text style={styles.price}>R1,500</Text>

              <TouchableOpacity
                style={styles.smallButton}
                onPress={() => router.push('/package-details')}
              >
                <Text style={styles.smallButtonText}>
                  VIEW DETAILS
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>

      {/* Individual Experiences */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          INDIVIDUAL EXPERIENCES
        </Text>

        <Text style={styles.description}>
          Try one of our exciting individual gaming and
          entertainment experiences.
        </Text>

        {experiences.map((item, index) => (
          <View style={styles.experienceCard} key={item}>
            <Text style={styles.experienceIcon}>🎮</Text>

            <View style={styles.experienceContent}>
              <Text style={styles.experienceTitle}>
                {item}
              </Text>

              <Text style={styles.experiencePrice}>
                R750
              </Text>
            </View>
          </View>
        ))}
      </View>

      {/* Booking CTA */}
      <View style={styles.cta}>
        <Text style={styles.ctaTitle}>
          READY TO LEVEL UP?
        </Text>

        <Text style={styles.ctaText}>
          Choose your experience and start your Next Level
          adventure.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/calculate-fees')}
        >
          <Text style={styles.buttonText}>
            CALCULATE FEES
          </Text>
        </TouchableOpacity>
      </View>
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

  heroTitle: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: '900',
  },

  heroSubtitle: {
    color: '#D9D9D9',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 5,
  },

  section: {
    padding: 20,
  },

  sectionTitle: {
    color: '#5ACF29',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  description: {
    color: '#D9D9D9',
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 18,
  },

  card: {
    flexDirection: 'row',
    backgroundColor: '#151538',
    borderRadius: 15,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#170398',
  },

  number: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#5ACF29',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },

  numberText: {
    color: '#170398',
    fontSize: 18,
    fontWeight: 'bold',
  },

  cardContent: {
    flex: 1,
  },

  cardTitle: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  price: {
    color: '#5ACF29',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  smallButton: {
    backgroundColor: '#170398',
    paddingVertical: 9,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },

  smallButtonText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: 'bold',
  },

  experienceCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#151538',
    padding: 16,
    borderRadius: 15,
    marginBottom: 12,
  },

  experienceIcon: {
    fontSize: 30,
    marginRight: 15,
  },

  experienceContent: {
    flex: 1,
  },

  experienceTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  experiencePrice: {
    color: '#5ACF29',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 5,
  },

  cta: {
    margin: 20,
    padding: 25,
    borderRadius: 18,
    backgroundColor: '#170398',
    alignItems: 'center',
  },

  ctaTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  ctaText: {
    color: '#D9D9D9',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 18,
    lineHeight: 21,
  },

  button: {
    backgroundColor: '#5ACF29',
    paddingVertical: 14,
    paddingHorizontal: 25,
    borderRadius: 10,
  },

  buttonText: {
    color: '#170398',
    fontWeight: 'bold',
  },
});