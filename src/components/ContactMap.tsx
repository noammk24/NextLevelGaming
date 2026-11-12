import React, { useEffect, useMemo, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { COLORS, FONT_FAMILY } from '@/constants/theme';

type ContactMapProps = {
  title: string;
  uri: string;
};

const HTML_ATTRIBUTE_ESCAPES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

function escapeHtmlAttribute(value: string) {
  return value.replace(/[&<>"']/g, (character) => HTML_ATTRIBUTE_ESCAPES[character]);
}

export function ContactMap({ title, uri }: ContactMapProps) {
  const [loadState, setLoadState] = useState<'loading' | 'ready' | 'error' | 'timeout'>('loading');
  useEffect(() => {
    if (loadState !== 'loading') {
      return;
    }

    const timeout = setTimeout(() => setLoadState('timeout'), 12000);
    return () => clearTimeout(timeout);
  }, [loadState]);

  const source = useMemo(
    () => ({
      html: `<!doctype html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      html, body, iframe { width: 100%; height: 100%; margin: 0; padding: 0; }
      iframe { display: block; border: 0; }
    </style>
  </head>
  <body>
    <iframe
      title="${escapeHtmlAttribute(title)}"
      src="${escapeHtmlAttribute(uri)}"
      allowfullscreen
      loading="eager"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </body>
      </html>`,
      baseUrl: 'https://www.google.com/',
    }),
    [title, uri],
  );

  return (
    <View style={styles.container}>
      <WebView
        accessibilityLabel={title}
        source={source}
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
      {(loadState === 'loading' || loadState === 'error' || loadState === 'timeout') && (
        <View pointerEvents="none" style={styles.status}>
          {loadState === 'loading' && <ActivityIndicator size="small" color={COLORS.blue} />}
          <Text style={styles.statusText}>
            {loadState === 'loading'
              ? 'Loading Google Maps...'
              : loadState === 'timeout'
                ? 'The map is taking longer than expected.'
                : 'The map could not load.'}
          </Text>
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
    right: 8,
    bottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.94)',
  },
  statusText: {
    color: COLORS.mutedText,
    maxWidth: 240,
    fontSize: 11,
    lineHeight: 16,
    textAlign: 'center',
    fontFamily: FONT_FAMILY.regular,
  },
});
