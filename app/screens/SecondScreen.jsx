import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { WebView } from "react-native-webview";
import React, { useState } from "react";
import GlobalBackground from "@/app/_components/GlobalBackground";
import Header from "@/app/_components/Header";
import styles from "./SecondStyles";
import { FilterIcon, SearchIcon } from "../_components/Icons";
import PatientCard from "@/app/_components/PatientCard";
import PatientSearch from "@/app/_components/PatientSearch";

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
  const [openSearch, setOpenSearch] = useState(false);
  return (
    <GlobalBackground>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Header
            onBackPress={() => {
              navigation.goBack();
            }}
            title="Home"
          />
        </View>
        <TouchableOpacity
          onPress={() => setOpenSearch(true)}
          style={styles.searchContainer}
        >
          <View style={styles.searchSubContainer1}>
            <SearchIcon width={20} height={20} />

            <View style={styles.searchInput} placeholderTextColor="#aaa">
              <Text style={{ marginLeft: 5, color: "#7C7C7C" }}>
                Search by name id or description...
              </Text>
            </View>
          </View>
          <FilterIcon width={25} height={25} />
        </TouchableOpacity>
        <View style={styles.patientList}>
          <ScrollView style={{ width: "100%" }}>
            {patients.map((patient, index) => (
              <PatientCard data={patient} key={index} />
            ))}
          </ScrollView>
        </View>
      </SafeAreaView>
      {openSearch && <PatientSearch setOpenSearch = {setOpenSearch}/>}
    </GlobalBackground>
  );
};

export default SecondScreen;
