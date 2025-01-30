import { StyleSheet } from "react-native";

export const ViewCardStyles = StyleSheet.create({
  card: {
    backgroundColor: "#232323",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 15,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#3C3C3C",
    borderRadius: 10,
    color: "white",
    marginVertical: 10,
    paddingHorizontal: 6,
    paddingVertical: 10,
  },
  cardContainer1: {
    width: "95%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export const PatientCardStyles = StyleSheet.create({
  card: {
    zIndex: 20,
    backgroundColor: "#232323",
    width: "100%",
    borderWidth: 2,
    borderColor: "#3C3C3C",
    borderRadius: 10,
    color: "white",
    marginVertical: 10,
    // padding: 6,
    paddingLeft: 6,
    paddingVertical: 15,
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
