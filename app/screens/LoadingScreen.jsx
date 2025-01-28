// LoadingScreen.jsx
import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

const LoadingScreen = () => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color="#ffffff" />
      <Text style={styles.loadingText}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  loadingText: {
    color: "white",
    fontSize: 20,
    marginTop: 20,
  },
});

export default LoadingScreen;
