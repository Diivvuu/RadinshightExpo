// GlobalBackground.jsx
import React from "react";
import { View, Image, StyleSheet } from "react-native";

const GlobalBackground = ({ children }) => {
  return (
    <View style={styles.container}>
      {/* Background Image */}
      <Image
        source={require("../../assets/Wave Background.png")} // Your global background image
        style={styles.backgroundImage}
      />
      {/* Render children */}
      <View style={styles.content}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensure it takes up the full height
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1a1a1a", // Fallback background in case the image fails to load
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1, // Put the background behind all content
    // resizeMode: "cover", // Make sure the background image covers the entire screen
  },
  content: {
    // flex: 1, // Ensure child content also fills the parent container
    width: "100%",
    justifyContent: "center",
    alignItems: "center", // Center content
  },
});

export default GlobalBackground;
