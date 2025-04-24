import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { UserProfileIcon } from "./Icons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "expo-router";
import { PatientCardStyles } from "./CardStyles";

const PatientCard = ({ data }) => {
  const navigation = useNavigation();
  return (
    <View style={PatientCardStyles.card}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("selectView", { patient: data });
        }}
      >
        <View style={PatientCardStyles.cardSub}>
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
                  {data.patientName}
                </Text>
                <Text style={{ color: "#B8B8B8", fontSize: 12 }}>
                  PID : {data.patientID}
                </Text>
              </View>
            </View>
            <View>
              <LinearGradient
                colors={["#CF5510", "#B44A0E"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{ borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }}
              >
                <Text style={{ paddingHorizontal: 5, color: "white" }}>
                  {data.modalitiesInStudy}
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
            <Text style={{ fontSize: 12, color: "white" }}>{data.studyDate}</Text>
            {/* <Text style={{ fontSize: 12, color: "white" }}>{data?.numberOfStudyRelatedInstances}</Text> */}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PatientCard;
