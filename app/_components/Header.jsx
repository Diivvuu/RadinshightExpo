import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { BackButton, UserProfileIcon2 } from "./Icons";

const Header = ({ title, onBackPress }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => {
          onBackPress();
          console.log("clicked");
        }}
        style={{ zIndex: 20, padding: 10 }}
      >
        <BackButton />
        {/* <Ionicons name="arrow-back" size={24} color="#fff" /> */}
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{title}</Text>
      {/* <Ionicons name="person-circle-outline" size={24} color="#fff" /> */}
      <TouchableOpacity style={styles.profileIcon}>
        <UserProfileIcon2 />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  profileIcon: {
    padding: 7,
    backgroundColor: "#333",
    borderRadius: 25,
    color: "white",
  },
});

export default Header;
