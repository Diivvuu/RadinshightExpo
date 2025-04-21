import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    zIndex: 10,
  },
  header: {
    paddingVertical: 20,
    width: "100%",
    marginHorizontal: "auto",
  },
  searchContainer: {
    width: "90%",
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: "#2A2A2A",
    borderWidth: 1,
    borderColor: "#3C3C3C",
    borderRadius: 15,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchInput: {
    color: "white",
  },
  searchSubContainer1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 5,
  },
  patientList: {
    width: "90%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    zIndex: 20,
    marginTop: 20,
  },
});
export default styles;
