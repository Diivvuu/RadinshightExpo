import { StyleSheet } from "react-native";

const SelectViewStyles = StyleSheet.create({
  screenHeader: {
    width: "95%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  screenHeader1: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  screenHeader2: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
});

export default SelectViewStyles;
