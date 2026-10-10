import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { COLORS, SPACING } from '@/constants/theme';

export function BrandHeader() {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel="Next Level Gaming home"
      onPress={() => router.replace('/')}>
      <View style={styles.header}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>NL</Text>
        </View>
        <View>
          <Text style={styles.brand}>NEXT LEVEL</Text>
          <Text style={styles.subtitle}>GAMING & ESPORTS ARENA</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  header: {
    minHeight: 76,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING.large,
    paddingVertical: SPACING.medium,
    backgroundColor: COLORS.blue,
  },
  logo: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: COLORS.green,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SPACING.medium,
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
    letterSpacing: 0.5,
  },
  subtitle: {
    color: COLORS.grey,
    fontSize: 10,
    fontWeight: '700',
    marginTop: 3,
    letterSpacing: 0.6,
  },
});
