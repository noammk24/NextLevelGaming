import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

const COLORS = {
  blue: '#170398',
  green: '#5ACF29',
  cyan: '#0499B1',
  grey: '#D9D9D9',
  white: '#FFFFFF',
};

type PackageItem = {
  title: string;
  price: string;
};

type PackageSection = {
  title: string;
  items: PackageItem[];
};

const PACKAGE_SECTIONS: PackageSection[] = [
  {
    title: 'GAMING PACKAGES',
    items: [
      { title: 'Ultimate Gamer Pass', price: 'R1,500' },
      { title: 'VIP Gaming Experience', price: 'R1,500' },
      { title: 'Esports Training Package', price: 'R1,500' },
      { title: 'Birthday Party Package', price: 'R1,500' },
    ],
  },
  {
    title: 'INDIVIDUAL EXPERIENCES',
    items: [
      { title: 'Virtual Reality Experience', price: 'R750' },
      { title: 'Racing Simulator Challenge', price: 'R750' },
      { title: 'Escape Room Challenge', price: 'R750' },
    ],
  },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header area with the brand identity. */}
        <View style={styles.header}>
          <View style={styles.logoPlaceholder}>
            <Text style={styles.logoText}>NL</Text>
          </View>

          <Text style={styles.brandName}>NEXT LEVEL</Text>
        </View>

        {/* Hero section for the main message and key actions. */}
        <View style={styles.hero}>
          <Text style={styles.heroTitle}>LEVEL UP{'\n'}YOUR GAME</Text>

          <Text style={styles.heroText}>
            Experience gaming, esports and unforgettable entertainment at Next Level
            Gaming & Esports Arena.
          </Text>

          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => router.push('/overview')}
          >
            <Text style={styles.primaryButtonText}>EXPLORE EXPERIENCES</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => router.push('/about')}
          >
            <Text style={styles.secondaryButtonText}>ABOUT US</Text>
          </TouchableOpacity>
        </View>

        {/* Intro block explaining the arena's audience and purpose. */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>NEXT LEVEL GAMING</Text>

          <Text style={styles.sectionText}>
            A modern gaming and esports arena designed for gamers, families,
            schools, gaming clubs and businesses.
          </Text>
        </View>

        {/* Shared package sections are mapped from data for a cleaner layout. */}
        {PACKAGE_SECTIONS.map((section) => (
          <View key={section.title} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>

            {section.items.map((item) => (
              <PackageCard
                key={`${section.title}-${item.title}`}
                title={item.title}
                price={item.price}
              />
            ))}
          </View>
        ))}

        {/* Closing call to action to encourage conversions. */}
        <View style={styles.cta}>
          <Text style={styles.ctaTitle}>READY TO LEVEL UP?</Text>

          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => router.push('/overview')}
          >
            <Text style={styles.primaryButtonText}>VIEW PACKAGES</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function PackageCard({ title, price }: PackageItem) {
  return (
    <View style={styles.card}>
      <View style={styles.imagePlaceholder}>
        <Text style={styles.imageText}>GAMING</Text>
      </View>

      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardPrice}>{price}</Text>

      <TouchableOpacity
        style={styles.smallButton}
        onPress={() => router.push('/overview')}
      >
        <Text style={styles.smallButtonText}>VIEW DETAILS</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

  header: {
    height: 70,
    backgroundColor: COLORS.blue,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  logoPlaceholder: {
    width: 45,
    height: 45,
    borderRadius: 23,
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  logoText: {
    color: COLORS.blue,
    fontSize: 18,
    fontWeight: '900',
  },

  brandName: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: '800',
  },

  hero: {
    backgroundColor: COLORS.blue,
    paddingHorizontal: 24,
    paddingVertical: 50,
  },

  heroTitle: {
    color: COLORS.white,
    fontSize: 38,
    fontWeight: '900',
    lineHeight: 42,
    marginBottom: 18,
  },

  heroText: {
    color: COLORS.white,
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 28,
  },

  primaryButton: {
    backgroundColor: COLORS.green,
    paddingVertical: 15,
    paddingHorizontal: 22,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
  },

  primaryButtonText: {
    color: COLORS.blue,
    fontSize: 14,
    fontWeight: '900',
  },

  secondaryButton: {
    backgroundColor: COLORS.white,
    paddingVertical: 15,
    paddingHorizontal: 22,
    borderRadius: 12,
    alignItems: 'center',
  },

  secondaryButtonText: {
    color: COLORS.blue,
    fontSize: 14,
    fontWeight: '900',
  },

  section: {
    paddingHorizontal: 20,
    paddingVertical: 28,
  },

  sectionTitle: {
    color: COLORS.blue,
    fontSize: 23,
    fontWeight: '900',
    marginBottom: 12,
  },

  sectionText: {
    color: '#333333',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
  },

  card: {
    backgroundColor: '#F5F5F5',
    borderRadius: 16,
    marginBottom: 18,
    padding: 14,
  },

  imagePlaceholder: {
    height: 150,
    borderRadius: 12,
    backgroundColor: COLORS.cyan,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
  },

  imageText: {
    color: COLORS.white,
    fontSize: 22,
    fontWeight: '900',
  },

  cardTitle: {
    color: COLORS.blue,
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 6,
  },

  cardPrice: {
    color: COLORS.green,
    fontSize: 20,
    fontWeight: '900',
    marginBottom: 12,
  },

  smallButton: {
    backgroundColor: COLORS.blue,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },

  smallButtonText: {
    color: COLORS.white,
    fontSize: 13,
    fontWeight: '800',
  },

  cta: {
    backgroundColor: COLORS.cyan,
    margin: 20,
    padding: 28,
    borderRadius: 18,
    alignItems: 'center',
    marginBottom: 40,
  },

  ctaTitle: {
    color: COLORS.white,
    fontSize: 25,
    fontWeight: '900',
    marginBottom: 20,
    textAlign: 'center',
  },
});