import React from "react";
import { Platform, StyleSheet, View, Text ,ActivityIndicator} from "react-native";
import { WebView } from "react-native-webview";
 
export default function FileScreen({route}) {
  const { patient } = route.params;
 
  const patientData = {...patient,name:'Raja',uhid:'KABH.0000249017'}
 
    // Convert data to JSON format
    const NewpatientData = JSON.stringify(patientData);
 
    console.log("web data", NewpatientData);
 
    const sendDataToWeb = () => {
      const message = JSON.stringify({ name: "Rajkumar" });
      return `window.postMessage(${message}, "*");`;
    };
 
    // JavaScript code to send data to the web page
    const injectedJS = `
      window.postMessage(${patientData}, "*");
      true;
    `;
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
        source={{ uri: "https:radinsightai.com:3112/" }}
        style={styles.webview}
        startInLoadingState={true}
       injectedJavaScript={`window.postMessage('${NewpatientData}', "*");`}
 // Send data to the web page
        javaScriptEnabled={true}
        // renderLoading={() => <ActivityIndicator size="large" />}
        // onError={(syntheticEvent) => {
        //   const { nativeEvent } = syntheticEvent;
        //   console.warn("WebView error: ", nativeEvent);
        // }}
        // onLoad={(data) => console.log("WebView Loaded Successfully",data)}
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
 