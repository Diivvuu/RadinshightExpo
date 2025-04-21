import React from 'react';
import { View, Image, StyleSheet, StatusBar, Platform } from 'react-native';

const GlobalBackground = ({ children }) => {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />

      <Image
        source={require('../../assets/Wave Background.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      />

      <View style={styles.content}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, // <- this is key!
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  content: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2, // put content above image
  },
});

export default GlobalBackground;
