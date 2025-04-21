import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>© Copyright 2025, radInsightAI</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    paddingVertical: 12,
    paddingBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000', // optional
  },
  text: {
    fontSize: 12,
    color: '#aaa',
  },
});

export default Footer;
