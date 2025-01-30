const { StyleSheet } = require("react-native");


//login screen
const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    width: "100%",
    zIndex: 1,
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: -100,
    zIndex: 20,
    width: "100%",
  },
  loginText: {
    color: "white",
    textAlign: "center",
    marginTop: 20,
    fontSize: 20,
    zIndex: 20,
  },
  UserNameInput: {
    position: "relative",
    width: "85%",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 25,
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: "#2c2c2c",
    paddingVertical: 10,
    paddingHorizontal: 15,
    zIndex: 20,
    borderColor: "#7C7C7C",
  },
  PasswordInput: {
    position: "relative",
    width: "85%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 25,
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: "#2c2c2c",
    paddingVertical: 10,
    paddingHorizontal: 15,
    zIndex: 20,
    borderColor: "#7C7C7C",
  },
  UserNameIcon: {
    padding: 0,
    position: "absolute",
    left: 5,
    zIndex: 20,
  },
  input: {
    fontSize: 16,
    color: "white",
    paddingLeft: 15,
    zIndex: 20,
  },
  button: {
    width: "85%",
    marginTop: 25,
    zIndex: 20,
  },
  buttonText: {
    color: "white",
    padding: 15,
    fontSize: 20,
    textAlign: "center",
  },
});

export default styles;


