import axios from "axios";
import params from "@/app/params"; // API URL from params.js
import { APPCONFIG } from "../config/AppConfig";
// import * as Crypto from "expo-crypto";
// import CryptoJS from "crypto-js";
import AES from "crypto-js/aes";
import CryptoJS from "react-native-crypto-js";
import  api from "./ApiServer";


export const encryptFieldUsingAES = (value) => {
  debugger;
  return CryptoJS.AES.encrypt(value, APPCONFIG.AUTH.SECRETKEY).toString();
  //return AES.encrypt(value, SECRET_KEY).toString();
};

export const login = async (username, password) => {
  console.log("Original username:", username);

  try {
    // Encrypt the username
    const encryptedUsername = encryptFieldUsingAES(username);
    const encryptedPassword = encryptFieldUsingAES(password);

    const body = {
      login_username: encryptedUsername, // Send the encrypted username
      password: encryptedPassword, // Send plain password or encrypt it as well
    };

    console.log(
      "Encrypted Username:",
      encryptedUsername,
      "Password:",
      encryptedPassword
    );

    //const response = await api.post(`${APPConfig.HOST}auth/login`, body);
    //api.get('patientlist/635d8fc9-db56-406b-8df6-f6cb2eade6ec')
    const response = await api.post(`/auth/login`, body);
    console.log(response);
    return response.data; // Return the response data to be used in the screen
  } catch (error) {
    console.error("Login Error: ", error);
    throw error; // Throw error to be caught in the screen
  }
};
