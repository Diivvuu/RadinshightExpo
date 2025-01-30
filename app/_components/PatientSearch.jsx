import { View, Text, Modal, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const PatientSearch = ({ setOpenSearch }) => {
  return (
    <Modal animationType="fade" transparent={true} visible={true}>
      <View style={modalStyles.modalBackground}>
        <View style={modalStyles.modalContainer}>
          <TouchableOpacity
            onPress={() => setOpenSearch(false)}
            style={modalStyles.closeButton}
          >
            <Text style={modalStyles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const modalStyles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)", // Dark overlay
  },
  modalContainer: {
    width: "90%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    elevation: 5, // Shadow for Android
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#ff5c5c",
    borderRadius: 5,
  },
  closeButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default PatientSearch;
