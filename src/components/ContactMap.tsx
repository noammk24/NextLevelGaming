import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { COLORS, FONT_FAMILY } from '@/constants/theme';

type ContactMapProps = {
  title: string;
  uri: string;
};

export function ContactMap({ title, uri }: ContactMapProps) {
  const [loadState, setLoadState] = useState<'loading' | 'ready' | 'error'>('loading');

  return (
    <View style={styles.container}>
      <WebView
        accessibilityLabel={title}
        source={{ uri }}
        javaScriptEnabled
        onLoadStart={() => setLoadState('loading')}
        onLoadEnd={() => setLoadState((current) => (current === 'error' ? 'error' : 'ready'))}
        onError={() => setLoadState('error')}
        onHttpError={(event) => {
          if (event.nativeEvent.statusCode >= 400) {
            setLoadState('error');
          }
        }}
        style={styles.webView}
      />
      {loadState === 'loading' && (
        <View pointerEvents="none" style={styles.status}>
          <ActivityIndicator color={COLORS.blue} />
          <Text style={styles.statusText}>Loading Google Maps...</Text>
        </View>
      )}
      {loadState === 'error' && (
        <View pointerEvents="none" style={styles.status}>
          <Text style={styles.statusText}>The map could not load. Check your connection.</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 240,
    marginTop: 12,
    borderRadius: 14,
    overflow: 'hidden',
    backgroundColor: COLORS.paleBlue,
  },
  webView: {
    flex: 1,
    backgroundColor: COLORS.paleBlue,
  },
  status: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    padding: 16,
    backgroundColor: COLORS.paleBlue,
  },
  statusText: {
    color: COLORS.mutedText,
    fontSize: 13,
    lineHeight: 19,
    textAlign: 'center',
    fontFamily: FONT_FAMILY.regular,
  },
});
