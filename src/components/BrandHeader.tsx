import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { COLORS, SPACING } from '@/constants/theme';

export function BrandHeader() {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel="Next Level Gaming home"
      onPress={() => router.replace('/')}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/images/logo next level.jpeg')}
          style={styles.logo}
          resizeMode="cover"
          accessible={false}
          accessibilityLabel="Next Level Gaming & Esports Arena logo"
        />
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
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: COLORS.white,
    marginRight: SPACING.medium,
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
