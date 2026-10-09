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
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.logoPlaceholder}>
            <Text style={styles.logoText}>NL</Text>
          </View>

          <View>
            <Text style={styles.brandName}>NEXT LEVEL</Text>
            <Text style={styles.brandSubtitle}>
              GAMING & ESPORTS ARENA
            </Text>
          </View>
        </View>

        {/* Hero Section */}
        <View style={styles.hero}>
          <Text style={styles.heroTitle}>
            LEVEL UP{'\n'}YOUR GAME
          </Text>

          <Text style={styles.heroText}>
            Experience gaming, esports and unforgettable entertainment
            at Next Level Gaming & Esports Arena.
          </Text>

          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => router.push('/overview')}
          >
            <Text style={styles.primaryButtonText}>
              EXPLORE EXPERIENCES
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => router.push('/about')}
          >
            <Text style={styles.secondaryButtonText}>
              ABOUT US
            </Text>
          </TouchableOpacity>
        </View>

        {/* Introduction */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            NEXT LEVEL GAMING
          </Text>

          <Text style={styles.sectionText}>
            A modern gaming and esports arena designed for gamers,
            families, schools, gaming clubs and businesses.
          </Text>
        </View>

        {/* Gaming Packages and Individual Experiences */}
        {PACKAGE_SECTIONS.map((section) => (
          <View key={section.title} style={styles.section}>
            <Text style={styles.sectionTitle}>
              {section.title}
            </Text>

            {section.items.map((item) => (
              <PackageCard
                key={item.title}
                title={item.title}
                price={item.price}
              />
            ))}
          </View>
        ))}

        {/* Main Actions */}
        <View style={styles.cta}>
          <Text style={styles.ctaTitle}>
            READY TO LEVEL UP?
          </Text>

          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => router.push('/overview')}
          >
            <Text style={styles.primaryButtonText}>
              VIEW PACKAGES
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => router.push('/calculate-fees')}
          >
            <Text style={styles.secondaryButtonText}>
              CALCULATE FEES
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.contactButton}
            onPress={() => router.push('/contact')}
          >
            <Text style={styles.contactButtonText}>
              CONTACT US
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

/* Reusable package card */
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
        <Text style={styles.smallButtonText}>
          VIEW DETAILS
        </Text>
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
    minHeight: 75,
    backgroundColor: COLORS.blue,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
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

  brandSubtitle: {
    color: COLORS.grey,
    fontSize: 10,
    marginTop: 3,
  },

  hero: {
    backgroundColor: COLORS.blue,
    paddingHorizontal: 24,
    paddingVertical: 45,
  },

  heroTitle: {
    color: COLORS.white,
    fontSize: 38,
    fontWeight: '900',
    lineHeight: 43,
    marginBottom: 18,
  },

  heroText: {
    color: COLORS.white,
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 25,
  },

  primaryButton: {
    backgroundColor: COLORS.green,
    paddingVertical: 15,
    paddingHorizontal: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
  },

  primaryButtonText: {
    color: COLORS.blue,
    fontSize: 14,
    fontWeight: '900',
    textAlign: 'center',
  },

  secondaryButton: {
    backgroundColor: COLORS.white,
    paddingVertical: 15,
    paddingHorizontal: 18,
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
    paddingVertical: 25,
  },

  sectionTitle: {
    color: COLORS.blue,
    fontSize: 22,
    fontWeight: '900',
    marginBottom: 14,
  },

  sectionText: {
    color: '#333333',
    fontSize: 16,
    lineHeight: 24,
  },

  card: {
    backgroundColor: '#F5F5F5',
    borderRadius: 16,
    marginBottom: 18,
    padding: 14,
    borderWidth: 1,
    borderColor: '#EEEEEE',
  },

  imagePlaceholder: {
    height: 145,
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
    color: COLORS.blue,
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
    padding: 24,
    borderRadius: 18,
    marginBottom: 40,
  },

  ctaTitle: {
    color: COLORS.white,
    fontSize: 24,
    fontWeight: '900',
    marginBottom: 20,
    textAlign: 'center',
  },

  contactButton: {
    borderWidth: 2,
    borderColor: COLORS.white,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 12,
  },

  contactButtonText: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: '900',
  },
});