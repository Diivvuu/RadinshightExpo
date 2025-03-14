import React from "react";
import { Platform, StyleSheet, View, Text } from "react-native";
import { WebView } from "react-native-webview";

export default function FileScreen() {
  if (Platform.OS === "web") {
    return (
      <View style={styles.container}>
        <iframe
          src="https://radinsightai.com:3112/"
          style={styles.iframe}
          title="WebView Fallback"
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: "https://www.wikipedia.org" }}
        style={styles.webview}
        startInLoadingState={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
  iframe: {
    width: "100%",
    height: "100%",
    borderWidth: 0,
  },
});
