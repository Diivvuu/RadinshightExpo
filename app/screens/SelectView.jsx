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
import React, { useState, useEffect } from "react";
import GlobalBackground from "@/app/_components/GlobalBackground";
import Header from "@/app/_components/Header";
import styles from "./SecondStyles";
import { FilterIcon, SearchIcon, UserProfileIcon } from "../_components/Icons";
import PatientCard from "@/app/_components/PatientCard";
import PatientSearch from "@/app/_components/PatientSearch";
import { useRoute } from "@react-navigation/native";
import SelectViewStyle from "./SelectViewStyles";
import ViewCard from "@/app/_components/ViewCard";
import ObjectsManager from "@/app/api/objectManager";
import Series from "../api/dicom/parser/series";
import mapParams from "../api/dicom/qido/mapParams";
import api from "../api/ApiServer";

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
  debugger;
  const route = useRoute();
  const { patient } = route.params || {};
  const [openSearch, setOpenSearch] = useState(false);
  const [ series, setSeries ] = useState([]);

  useEffect(() => {
    debugger;
    if (patient) {
      fetchSeriesData(patient.studyInstanceUID);
    }
  }, [patient]); // Runs when instanceID changes


  function fetchSeriesData(InstanceID) {
    const seriesoptions = {
      studyInstanceUID: InstanceID,
      queryParams: {
        includefield: "00081030%2C00080060",
      },
    };
    api.get(`https://radinsightai.com:3020/series/aphcor/${InstanceID}`)
    //api.get(`series/aphcor/${InstanceID}`)
    // api.get('http://13.201.159.251:8001/series/aphcor/1.2.840.113619.2.290.3.2831157764.250.1535507756.909')
    .then(response => {
      if (response.ok) {
        console.log("seriesoutput", response.data);
        const seriesData = response.data?.series_details;
        console.log("seriesData", seriesData);
        setSeries(seriesData);
        //setTotalRows(seriesData.length);
      } else {
        console.error("API call failed with status:", response.problem);
      }
      })
      .catch((error) => {
        console.error("Error :", error);
      });
  }
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
                {patient.patientName}
              </Text>
              <Text style={{ color: "#7C7C7C" }}>PID: {patient.patientID}</Text>
            </View>
          </View>
          <View>
            <Text style={{ color: "#7C7C7C" }}>{patient.studyDate}</Text>
          </View>
        </View>
        <View>
          {series.map((data, index) => (
            <View key={index}>
               <ViewCard data={{...data,...patient}} />
            </View>
          ))}
        </View>
      </SafeAreaView>
      {openSearch && <PatientSearch />}
    </GlobalBackground>
  );
};

export default SelectView;
