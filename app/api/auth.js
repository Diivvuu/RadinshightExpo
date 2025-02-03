import axios from "axios";
import params from "@/app/params"; // API URL from params.js
import * as Crypto from "expo-crypto";

export const login = async (username, password) => {
  console.log("Original username:", username);

  try {
    // Encrypt the username
    const encryptedUsername = await Crypto.digestStringAsync(
      Crypto.CryptoDigestAlgorithm.SHA256,
      username
    );
    const encryptedPassword = await Crypto.digestStringAsync(
      Crypto.CryptoDigestAlgorithm.SHA256,
      password
    );
    const body = {
      login_username: encryptedUsername, // Send the encrypted username
      password: encryptedPassword, // Send plain password or encrypt it as well
    };

    console.log(
      "Encrypted Username:",
      encryptedUsername,
      encryptedPassword,
      "Password:",
      password
    );

    const response = await axios.post(`${params.hostAddress}/auth/login`, body);
    console.log(response);
    return response.data; // Return the response data to be used in the screen
  } catch (error) {
    console.error("Login Error: ", error);
    throw error; // Throw error to be caught in the screen
  }
};
