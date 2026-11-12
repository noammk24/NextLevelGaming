import React, { createElement } from 'react';
import { StyleSheet, View } from 'react-native';

type ContactMapProps = {
  title: string;
  uri: string;
};

export function ContactMap({ title, uri }: ContactMapProps) {
  return (
    <View style={styles.container}>
      {createElement('iframe', {
        title,
        src: uri,
        loading: 'lazy',
        allowFullScreen: true,
        referrerPolicy: 'no-referrer-when-downgrade',
        style: { width: '100%', height: '100%', border: 'none' },
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 240,
    marginTop: 12,
    borderRadius: 14,
    overflow: 'hidden',
    backgroundColor: '#F5FAFD',
  },
});
