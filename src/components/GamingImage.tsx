import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, type ImageStyle, type StyleProp } from 'react-native';
import { COLORS, RADIUS } from '@/constants/theme';

type GamingImageProps = {
  imageUrl: string;
  accessibilityLabel: string;
  style?: StyleProp<ImageStyle>;
};

export function GamingImage({ imageUrl, accessibilityLabel, style }: GamingImageProps) {
  const [imageFailed, setImageFailed] = useState(false);

  if (imageFailed) {
    return (
      <View
        accessible
        accessibilityLabel={`${accessibilityLabel} image unavailable`}
        style={[styles.fallback, style]}>
        <Text style={styles.fallbackText}>NEXT LEVEL</Text>
      </View>
    );
  }

  return (
    <Image
      source={{ uri: imageUrl }}
      style={[styles.image, style]}
      resizeMode="cover"
      accessibilityLabel={accessibilityLabel}
      onError={() => setImageFailed(true)}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 145,
    borderRadius: RADIUS.medium,
  },
  fallback: {
    width: '100%',
    height: 145,
    borderRadius: RADIUS.medium,
    backgroundColor: COLORS.cyan,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fallbackText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: '900',
    letterSpacing: 1.5,
  },
});
