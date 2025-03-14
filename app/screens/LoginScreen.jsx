import React, { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  Animated,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Logo, UserProfileIcon } from "../_components/Icons";
import { PasswordIcon } from "../_components/Icons";
import GlobalBackground from "@/app/_components/GlobalBackground";
import Icon from "react-native-vector-icons/Feather";
import Svg, { Text as SvgText } from "react-native-svg";
import { useNavigation } from "expo-router";
import styles from "./LoginStyles";
import { login } from "../api/auth";
import { validateDicomServer } from "../api/dicomValidation";
import LocalStorageService from "../services/LocalStorageServices";
import  api from "../api/ApiServer";

const isNotEmpty = (obj) => obj && Object.keys(obj).length

const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("pass");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const logoPosition = useState(new Animated.Value(0))[0];
  const fadeIn = useState(new Animated.Value(0))[0];
  const textFadeOut = useState(new Animated.Value(1))[0];
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    console.log("clicked", username, password);

    if (username && password) {
      setLoading(true);
      setError(null);

      try {
        debugger;
        //navigation.navigate("home");
        // const dicomTest = await validateDicomServer();
        //console.log(dicomTest);
        const data = await login(username, password);
        console.log('logininfo', data)
        let userData = data.data;
        console.log(userData, "look");
       if (userData.status === "error") {
           console.error("login failed1", error);
           setError("invalid username or password");
         }
       else if (userData.status === "pending" ){
           console.error("login failed2", error);
         setError("invalid username or password");
         }
         else {
          await LocalStorageService.setUserInfo(userData);
          if (
            isNotEmpty(userData) &&
            isNotEmpty(userData.user) &&
            userData.access_token !== ""
          ) {
            // let licdata = await axios.get(APPCONFIG.HOST + "findall", {
            //   headers: headers,
            // });
            console.log('findallapi', 'started')
            let licdata = await api.get("/findall");
            let licenseDatas = licdata.data.data;
            console.log('findallresponse', licenseDatas)
            let newDate = new Date();
            let lic_date = new Date(licenseDatas[0].licenseTo);
            LocalStorageService.setHospitalLimit(licenseDatas[0].hospitalLimit);
            if (lic_date.getTime() < newDate.getTime()) {
              // nextState.status = false
              LocalStorageService.setLicenseStatus(false);
            } else {
              // nextState.status = true
              LocalStorageService.setLicenseStatus(true);
            }
            // nextState.data = action.payload
            // nextState.module = action.payload[0].moduleIds
            LocalStorageService.setLicense(licenseDatas);
            // let privilagedata = await axios.get(
            //   APPCONFIG.HOST + "roles/" + userData.user.roleId + "/privileges",
            //   { headers: headers }
            // );
            
            let privilagedata = await api.get("/roles/" + userData.user.roleId + "/privileges")
            let privilageDatas = privilagedata.data.data;
            LocalStorageService.setPrivilege(privilageDatas);
            LocalStorageService.setHospitalId(userData.user.hospital.hospitalId)
            navigation.navigate("home");
          }
         }
        
      } catch (error) {
        console.error("login failed3", error);
        setError("invalid username or password");
      } finally {
        setLoading(false);
      }
    } else {
      setError("please enter both username and password");
    }
  };

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
      <SafeAreaView style={styles.container}>
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
              opacity: fadeIn ,
            }}
          >
            <PasswordIcon style={styles.UserNameIcon} />
            <TextInput
              placeholder="Password"
              style={styles.input}
              placeholderTextColor="#7C7C7C"
              secureTextEntry={!passwordVisible}
              onChangeText={setPassword}
              value="pass"
            />
          </Animated.View>
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}
          >
            <Icon
              name={passwordVisible ? "eye-off" : "eye"} // Toggle eye icon
              size={20}
              color="#7C7C7C"
              style={{ paddingHorizontal: 0 }}
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
            <TouchableOpacity onPress={handleLogin}>
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
      </SafeAreaView>
    </GlobalBackground>
  );
};

export default LoginScreen;
