
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { router } from 'expo-router';
import { COLORS, RADIUS, SPACING } from '../constants/theme';

type PackageCardProps = {
  title: string;
  price: string;
};

export default function PackageCard({
  title,
  price,
}: PackageCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.imagePlaceholder}>
        <Text style={styles.imageText}>GAMING</Text>
      </View>

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/overview')}
      >
        <Text style={styles.buttonText}>VIEW DETAILS</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.lightGrey,
    borderRadius: RADIUS.large,
    marginBottom: SPACING.medium,
    padding: SPACING.medium,
    borderWidth: 1,
    borderColor: '#EEEEEE',
  },

  imagePlaceholder: {
    height: 145,
    borderRadius: RADIUS.medium,
    backgroundColor: COLORS.cyan,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SPACING.medium,
  },

  imageText: {
    color: COLORS.white,
    fontSize: 22,
    fontWeight: '900',
  },

  title: {
    color: COLORS.blue,
    fontSize: 18,
    fontWeight: '800',
    marginBottom: SPACING.small,
  },

  price: {
    color: COLORS.blue,
    fontSize: 20,
    fontWeight: '900',
    marginBottom: SPACING.medium,
  },

  button: {
    backgroundColor: COLORS.blue,
    paddingVertical: 12,
    borderRadius: RADIUS.small,
    alignItems: 'center',
  },

  buttonText: {
    color: COLORS.white,
    fontSize: 13,
    fontWeight: '800',
  },
});