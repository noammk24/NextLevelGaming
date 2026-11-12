import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { COLORS, FONT_FAMILY, RADIUS, SPACING } from '@/constants/theme';

type BrandHeaderProps = {
  showBack?: boolean;
};

export function BrandHeader({ showBack = false }: BrandHeaderProps) {
  return (
    <View style={styles.header}>
      {showBack && (
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Go back"
          onPress={() => (router.canGoBack() ? router.back() : router.replace('/explore'))}
          style={styles.backButton}>
          <Text style={styles.backLabel}>‹</Text>
        </Pressable>
      )}
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Next Level Gaming home"
        onPress={() => router.replace('/home')}
        style={styles.brandPressable}>
        <Image
          source={require('../../assets/images/logo next level.jpeg')}
          style={styles.logo}
          resizeMode="cover"
          accessible={false}
        />
        <Text numberOfLines={1} style={styles.brand}>NEXT LEVEL</Text>
      </Pressable>
      <View style={styles.actions}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Browse experiences"
          onPress={() => router.push('/explore')}
          style={styles.bookButton}>
          <Text style={styles.bookLabel}>Book</Text>
        </Pressable>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Explore memberships"
          onPress={() => router.push('/memberships')}
          style={styles.joinButton}>
          <Text style={styles.joinLabel}>Join</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 68,
    paddingHorizontal: SPACING.medium,
    paddingVertical: SPACING.small,
    backgroundColor: COLORS.white,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: COLORS.border,
  },
  backButton: {
    width: 40,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 4,
  },
  backLabel: {
    color: COLORS.blue,
    fontSize: 32,
    lineHeight: 36,
    fontFamily: FONT_FAMILY.regular,
  },
  brandPressable: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    minWidth: 0,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.paleBlue,
    marginRight: SPACING.small,
  },
  brand: {
    color: COLORS.blue,
    fontSize: 14,
    fontFamily: FONT_FAMILY.extraBold,
    letterSpacing: 0.1,
    flexShrink: 1,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  bookButton: {
    minWidth: 58,
    height: 44,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.cyan,
    borderRadius: RADIUS.pill,
    backgroundColor: COLORS.white,
  },
  bookLabel: {
    color: COLORS.blue,
    fontSize: 13,
    fontFamily: FONT_FAMILY.semibold,
  },
  joinButton: {
    minWidth: 56,
    height: 44,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: RADIUS.pill,
    backgroundColor: COLORS.green,
  },
  joinLabel: {
    color: COLORS.blue,
    fontSize: 13,
    fontFamily: FONT_FAMILY.semibold,
  },
});
