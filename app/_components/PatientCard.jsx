import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { UserProfileIcon } from "./Icons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "expo-router";

const PatientCard = ({ data }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.card}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("webview");
        }}
      >
        <View style={styles.cardSub}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <UserProfileIcon height={23} width={23} color={"white"} />
              <View>
                <Text style={{ color: "white", fontSize: 15 }}>
                  {data.name}
                </Text>
                <Text style={{ color: "#B8B8B8", fontSize: 12 }}>
                  PID : {data.PID}
                </Text>
              </View>
            </View>
            <View>
              <LinearGradient
                colors={["#CF5510", "#B44A0E"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                // style={styles.button}
                style={{ borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }}
              >
                <Text style={{ paddingHorizontal: 5, color: "white" }}>
                  {data.tag}
                </Text>
              </LinearGradient>
            </View>
          </View>
          <Text style={{ fontSize: 10, color: "white", marginVertical: 10 }}>
            {data.description}
          </Text>
          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 14,
            }}
          >
            <Text style={{ fontSize: 12, color: "white" }}>{data.date}</Text>
            <Text style={{ fontSize: 12, color: "white" }}>{data.size}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    zIndex: 20,
    backgroundColor: "#2A2A2A",
    width: "100%",
    borderWidth: 2,
    borderColor: "#3C3C3C",
    borderRadius: 10,
    color: "white",
    marginVertical: 15,
    // padding: 6,
    paddingLeft: 6,
    paddingtop: 10,
    paddingBottom: 6,
  },
  cardSub: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    flex: 1,
  },
});

export default PatientCard;
