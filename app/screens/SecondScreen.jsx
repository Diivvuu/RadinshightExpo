import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
import React from "react";
import GlobalBackground from "@/app/_components/GlobalBackground";
import Header from "@/app/_components/Header";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";

// import * as cornerStoneTools from "@cornerstonejs/tools";

// const { PanTool, WindowLevelTool } = cornerStoneTools;

const SecondScreen = ({ navigation }) => {
  //   const htmlContent = `
  //   <!DOCTYPE html>
  //   <html lang="en">
  //   <head>nop
  //     <meta charset="UTF-8">
  //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
  //     <script src="https://unpkg.com/cornerstone-core"></script>
  //     <script src="https://rawgit.com/cornerstonejs/cornerstone/master/example/exampleImageIdLoader.js"></script>
  //     <style>
  //       .image-canvas-wrapper {
  //         width: 100%;
  //         height: 100%;
  //         background: black;
  //       }
  //       .cornerstone-element {
  //         width: 100%;
  //         height: 100%;
  //       }
  //       body {
  //         margin: 0;
  //         padding: 0;
  //         display: flex;
  //         justify-content: center;
  //         align-items: center;
  //         background: white;
  //         height: 100vh;
  //       }
  //     </style>
  //   </head>
  //   <body>
  //     <div class="image-canvas-wrapper">
  //       <div id="element" class="cornerstone-element"></div>
  //     </div>
  //     <script>
  //       var exampleImageId = 'example://1';
  //       var element = document.getElementById('element');

  //       cornerstone.enable(element);

  //       cornerstone.loadImage(exampleImageId).then(function (image) {
  //         cornerstone.displayImage(element, image);
  //         var viewport = {
  //           invert: false,
  //           pixelReplication: false,
  //           voi: {
  //             windowWidth: 500,
  //             windowCenter: 100
  //           },
  //           scale: 1.4,
  //           translation: { x: 0, y: 0 }
  //         };
  //         cornerstone.setViewport(element, viewport);
  //         cornerstone.updateImage(element);
  //       });
  //     </script>
  //   </body>
  //   </html>
  // `;

  return (
    <GlobalBackground>
      {/* <View style={styles.Header}> */}
      <Header
        onBackPress={() => {
          navigation.goBack();
          console.log("clicked");
        }}
        title="Home"
      />
      {/* </View> */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search by name id or description..."
          placeholderTextColor="#aaa"
        />
        <Ionicons name="filter-outline" size={20} color="#fff" />
      </View>

      <Text></Text>
    </GlobalBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  searchContainer: {
    width: "90%",
    backgroundColor: "#2A2A2A",
    borderRadius: 15,
    display: "flex",
    flexDirection: "row",
  },
  // searchInput: {
  //   backgroundColor: "#2A2A2A",
  // },
  // Header: {
  // position: "absolute",
  // top: 1,
  // },
});

export default SecondScreen;
