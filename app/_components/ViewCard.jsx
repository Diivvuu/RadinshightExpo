import { View, Text, TouchableOpacity } from "react-native";
import { ViewCardStyles } from "./CardStyles";
import React from "react";
import { AIIcon, GalleryIcon, NoteIcon } from "./Icons";
import { useNavigation } from "expo-router";

const ViewCard = ({ data }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={ViewCardStyles.card}
      onPress={() => {
        navigation.navigate("webview", { patient: data });
      }}
    >
      <View style={ViewCardStyles.cardContainer1}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
          }}
        >
          <NoteIcon />
          <Text style={{ color: "white" }}>{data.type}</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#3C3C3CCC",
            borderRadius: 10,
            paddingHorizontal: 15,
            paddingVertical: 8,
            gap: 3,
          }}
        >
          <AIIcon />
          <Text
            style={{
              fontSize: 17,
              color: "white",
            }}
          >
            {data.tag}c
          </Text>
        </View>
      </View>
      <View style={ViewCardStyles.cardContainer1}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
          }}
        >
          <GalleryIcon />
          <Text style={{ color: "white" }}>{data.imgQuantity}</Text>
        </View>
      </View>
      <View style={ViewCardStyles.cardContainer1}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            justifyContent: "flex-end",
          }}
        >
          <Text style={{ color: "white" }}>{data.date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ViewCard;
