// LoadingScreen.jsx
import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import styles from "./LoadingStyles";

const LoadingScreen = () => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color="#ffffff" />
      <Text style={styles.loadingText}>Loading...</Text>
    </View>
  );
};

export default LoadingScreen;
