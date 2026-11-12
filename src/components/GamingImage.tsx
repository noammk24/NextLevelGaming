import React, { useState } from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  View,
  type StyleProp,
  type ViewStyle,
} from 'react-native';
import { COLORS, RADIUS } from '@/constants/theme';

type GamingImageProps = {
  imageUrl: string;
  accessibilityLabel: string;
  style?: StyleProp<ViewStyle>;
};

export function GamingImage({ imageUrl, accessibilityLabel, style }: GamingImageProps) {
  const [loadedUrl, setLoadedUrl] = useState<string | null>(null);
  const [failedUrl, setFailedUrl] = useState<string | null>(null);
  const imageFailed = failedUrl === imageUrl;
  const imageLoading = loadedUrl !== imageUrl && !imageFailed;

  if (imageFailed) {
    return (
      <View
        accessible
        accessibilityLabel={`${accessibilityLabel} image unavailable`}
        style={[styles.wrapper, styles.fallback, style]}>
        <Text style={styles.fallbackText}>Image unavailable</Text>
      </View>
    );
  }

  return (
    <View style={[styles.wrapper, style]}>
      <Image
        source={{ uri: imageUrl }}
        style={styles.image}
        resizeMode="cover"
        accessibilityLabel={accessibilityLabel}
        onLoad={() => setLoadedUrl(imageUrl)}
        onError={() => setFailedUrl(imageUrl)}
      />
      {imageLoading && (
        <View
          accessibilityElementsHidden
          importantForAccessibility="no-hide-descendants"
          style={styles.loading}>
          <ActivityIndicator color={COLORS.blue} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: 145,
    borderRadius: RADIUS.medium,
    overflow: 'hidden',
  },
  image: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: COLORS.paleBlue,
  },
  fallback: {
    backgroundColor: COLORS.paleBlue,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  fallbackText: {
    color: COLORS.mutedText,
    fontSize: 13,
    fontWeight: '600',
  },
  loading: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: COLORS.paleBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
