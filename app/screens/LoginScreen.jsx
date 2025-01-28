import React, { useState, useEffect } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  Animated,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Logo, UserProfileIcon } from "../_components/Icons";
import { PasswordIcon } from "../_components/Icons";
import GlobalBackground from "@/app/_components/GlobalBackground";
import Icon from "react-native-vector-icons/Feather";
import Svg, { Text as SvgText } from "react-native-svg";
import { useNavigation } from "expo-router";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const logoPosition = useState(new Animated.Value(0))[0];
  const fadeIn = useState(new Animated.Value(0))[0];
  const textFadeOut = useState(new Animated.Value(1))[0];

  useEffect(() => {
    //  throw new Error("Test error in LoginScreen!");
    Animated.sequence([
      Animated.timing(logoPosition, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(textFadeOut, {
        toValue: 0,
        duration: 1000,
        delay: 600,
        useNativeDriver: true,
      }),
      Animated.timing(fadeIn, {
        toValue: 1,
        duration: 1000,
        // delay: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, [logoPosition, fadeIn, textFadeOut]);

  return (
    <GlobalBackground>
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.logoContainer,
            {
              transform: [
                {
                  translateY: logoPosition.interpolate({
                    inputRange: [0, 1],
                    outputRange: [100, 0], // Move logo from -100 to its final position
                  }),
                },
              ],
            },
          ]}
        >
          <Image
            source={require("../../assets/logo-design-1 1.png")}
            style={styles.image}
          />
        </Animated.View>
        <Animated.View
          style={{
            opacity: textFadeOut,
            zIndex: 40,
            position: "absolute",
            top: 400,
          }}
        >
          <Logo />
        </Animated.View>
        <Animated.Text style={[styles.loginText, { opacity: fadeIn }]}>
          Enter your login information
        </Animated.Text>
        <Animated.View style={[styles.UserNameInput, { opacity: fadeIn }]}>
          <UserProfileIcon style={styles.UserNameIcon} />
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={setUsername}
            placeholder="Username"
            placeholderTextColor="#7c7c7c"
          />
        </Animated.View>
        <Animated.View style={[styles.PasswordInput, { opacity: fadeIn }]}>
          <Animated.View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <PasswordIcon style={styles.UserNameIcon} />
            <TextInput
              placeholder="Password"
              style={styles.input}
              placeholderTextColor="#7C7C7C"
              secureTextEntry={!passwordVisible}
              onChangeText={setPassword}
              value={password}
            />
          </Animated.View>
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}
          >
            <Icon
              name={passwordVisible ? "eye-off" : "eye"} // Toggle eye icon
              size={20}
              color="#7C7C7C"
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        </Animated.View>
        <Animated.View
          style={{
            opacity: fadeIn,
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Animated.View style={styles.button}>
            <TouchableOpacity onPress={() => navigation.navigate("home")}>
              <LinearGradient
                colors={["#CF5510", "#B44A0E"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                // style={styles.button}
                style={{ borderRadius: 15 }}
              >
                <Text style={styles.buttonText}>Login</Text>
              </LinearGradient>
            </TouchableOpacity>
          </Animated.View>
        </Animated.View>
      </View>
    </GlobalBackground>
  );
};

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

export default LoginScreen;
