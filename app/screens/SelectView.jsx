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
import { FilterIcon, SearchIcon, UserProfileIcon } from "../_components/Icons";
import PatientCard from "@/app/_components/PatientCard";
import PatientSearch from "@/app/_components/PatientSearch";
import { useRoute } from "@react-navigation/native";
import SelectViewStyle from "./SelectViewStyles";
import ViewCard from "@/app/_components/ViewCard";

const CardData = [
  {
    type: "2.5MM-PLAIN",
    imgQuantity: 44,
    date: "06-Nov-2024",
    tag: "AI",
  },
  {
    type: "3.5MM-PLAIN",
    imgQuantity: 28,
    date: "10-Nov-2024",
    tag: "AI",
  },
];

const SelectView = ({ navigation }) => {
  const route = useRoute();
  const { patient } = route.params || {};
  const [openSearch, setOpenSearch] = useState(false);
  return (
    <GlobalBackground>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Header
            onBackPress={() => {
              navigation.goBack();
            }}
            title="Select Data"
          />
        </View>
        <View style={SelectViewStyle.screenHeader}>
          <View style={SelectViewStyle.screenHeader1}>
            <UserProfileIcon height={30} width={30} />
            <View>
              <Text style={{ color: "white", fontSize: 18 }}>
                {patient.name}
              </Text>
              <Text style={{ color: "#7C7C7C" }}>PID: {patient.PID}</Text>
            </View>
          </View>
          <View>
            <Text style={{ color: "#7C7C7C" }}>{patient.date}</Text>
          </View>
        </View>
        <View>
          {CardData.map((data, index) => (
            <View key={index}>
              <ViewCard data={data} />
            </View>
          ))}
        </View>
      </SafeAreaView>
      {openSearch && <PatientSearch />}
    </GlobalBackground>
  );
};

export default SelectView;
