import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import React from "react";
import { modalStyles } from "./SearchStyles";
import { LinearGradient } from "expo-linear-gradient";
import { CalendarIcon } from "./Icons";

const ButtonOptions1 = ["RESTRUCT", "CT", "PT", "SEG", "MG"];
const ButtonOptions2 = ["Last Year", "Last 30 days", "Last week"];

const PatientSearch = ({ setOpenSearch }) => {
  return (
    <Modal animationType="fade" transparent={true} visible={true}>
      <View style={modalStyles.modalBackground}>
        <View style={modalStyles.modalContainer}>
          <Text
            style={{
              width: "100%",
              textAlign: "left",
              color: "white",
              fontSize: 18,
            }}
          >
            Patients Search
          </Text>
          <View style={{ width: "100%", gap: 10 }}>
            <TextInput
              placeholder="Parent Name"
              style={modalStyles.input}
              placeholderTextColor="#7C7C7C"
            />
            <TextInput
              placeholder="Patient ID"
              style={modalStyles.input}
              placeholderTextColor="#7C7C7C"
            />
            <View
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View style={modalStyles.smallInput}>
                <TextInput
                  placeholder="From Date"
                  placeholderTextColor="#7C7C7C"
                />
                <CalendarIcon />
              </View>
              <View style={modalStyles.smallInput}>
                <TextInput
                  placeholder="To Date"
                  placeholderTextColor="#7C7C7C"
                />
                <CalendarIcon />
              </View>
            </View>
          </View>
          <View style={{ width: "100%" }}>
            <Text
              style={{
                color: "white",
                fontSize: 15,
                textAlign: "left",
                width: "100%",
              }}
            >
              Modality
            </Text>
            <View style={modalStyles.buttonsRow}>
              {ButtonOptions1.map((button, index) => (
                <TouchableOpacity style={modalStyles.selectableButton}>
                  <Text style={{ color: "#7C7C7C" }} key={index}>
                    {button}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View style={{ width: "100%", marginVertical: 10 }}>
            <Text
              style={{
                color: "white",
                fontSize: 15,
                textAlign: "left",
                width: "100%",
              }}
            >
              Sort by Year
            </Text>
            <View style={modalStyles.buttonsRow}>
              {ButtonOptions2.map((button, index) => (
                <TouchableOpacity style={modalStyles.selectableButton}>
                  <Text style={{ color: "#7C7C7C" }} key={index}>
                    {button}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View style={{ width: "100%", gap: 5 }}>
            <TouchableOpacity
              onPress={() => setOpenSearch(false)}
              style={{
                width: "100%",
              }}
            >
              <LinearGradient
                colors={["#CF5510", "#B44A0E"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{
                  padding: 15,
                  backgroundColor: "#6B6562",
                  borderRadius: 10,
                }}
              >
                <Text style={modalStyles.searchButtonText}>Search</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setOpenSearch(false)}
              style={modalStyles.closeButton}
            >
              <Text style={modalStyles.closeButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default PatientSearch;
