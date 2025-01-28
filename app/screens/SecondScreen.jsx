import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
} from "react-native";
import { WebView } from "react-native-webview";
import React from "react";
import GlobalBackground from "@/app/_components/GlobalBackground";
import Header from "@/app/_components/Header";
// import { Ionicons } from "@expo/vector-icons";
// import { TextInput } from "react-native-gesture-handler";
import { FilterIcon, SearchIcon } from "../_components/Icons";
import PatientCard from "@/app/_components/PatientCard";

const patients = [
  {
    id: 1,
    name: "Sai Krishna",
    PID: 20003330,
    description: "Mild cortical atrophy consistent with age-related changes...",
    date: "06-Nov-2024",
    tag: "CT&RT",
    size: "44MB",
  },
  {
    id: 2,
    name: "Manjunath",
    PID: 20003331,
    description: "Mild cortical atrophy consistent with age-related changes...",
    date: "08-Nov-2024",
    tag: "CT",
    size: "14MB",
  },
  {
    id: 3,
    name: "TamilVanan",
    PID: 20003332,
    description: "Mild cortical atrophy consistent with age-related changes...",
    date: "08-Nov-2024",
    tag: "CT&RT",
    size: "34.2MB",
  },
  {
    id: 4,
    name: "Vignesh Kumar",
    PID: 20003333,
    description: "Mild cortical atrophy consistent with age-related changes...",
    date: "12-Nov-2024",
    tag: "CT&RT",
    size: "12.3MB",
  },
  {
    id: 5,
    name: "Muralitharan",
    PID: 20003334,
    description: "Mild cortical atrophy consistent with age-related changes...",
    date: "12-Nov-2024",
    tag: "RT",
    size: "37MB",
  },
  {
    id: 6,
    name: "Muralitharan",
    PID: 20003335,
    description: "Mild cortical atrophy consistent with age-related changes...",
    date: "12-Nov-2024",
    tag: "RT",
    size: "37MB",
  },
];

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
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Header
            onBackPress={() => {
              navigation.goBack();
              console.log("clicked");
            }}
            title="Home"
          />
        </View>
        <View style={styles.searchContainer}>
          <View style={styles.searchSubContainer1}>
            <SearchIcon width={20} height={20} />

            <TextInput
              style={styles.searchInput}
              placeholder="Search by name id or description..."
              placeholderTextColor="#aaa"
            />
          </View>
          <FilterIcon width={25} height={25} />
        </View>
        <View style={styles.patientList}>
          <ScrollView style={{ width: "100%" }}>
            {patients.map((patient, index) => (
              <PatientCard data={patient} key={index} />
            ))}
          </ScrollView>
        </View>
      </SafeAreaView>
    </GlobalBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    zIndex: 10,
  },
  header: {
    paddingVertical: 20,
    width: "100%",
    marginHorizontal: "auto",
  },
  searchContainer: {
    width: "90%",
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: "#2A2A2A",
    borderWidth: 1,
    borderColor: "#3C3C3C",
    borderRadius: 15,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchSubContainer1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  patientList: {
    width: "90%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    zIndex: 20,
    // height: "100%",
    // overflowY: "auto",
  },
});

export default SecondScreen;
