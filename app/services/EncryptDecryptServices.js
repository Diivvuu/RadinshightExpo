
import CryptoJS from "react-native-crypto-js";
import { APPCONFIG } from '../config/AppConfig';

export const encryptFieldUsingAES = (value)=>{
    return CryptoJS.AES.encrypt(value, APPCONFIG.AUTH.SECRETKEY).toString();
}


export const decryptFieldUsingAES = (value)=>{
  return CryptoJS.decrypt(value, APPCONFIG.AUTH.SECRETKEY).toString(CryptoJS.enc.Utf8);
}

export const getEncryptedShaValue = (value)=>{
  return CryptoJS.SHA256(value).toString();
}

export const getEncrayptedMD5Value = (value)=>{
  return CryptoJS.MD5(value).toString();
}

export const encryptJson = (data) =>{
    return CryptoJS.AES.encrypt(JSON.stringify(data), APPCONFIG.AUTH.SECRETKEY,
     {
        keySize: 128 / 8,
        iv: APPCONFIG.AUTH.SECRETKEY,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      }).toString();
    };

    // export const decryptJson = (data) => {
    //     try {
    //       // Convert SECRETKEY to WordArray
    //       const secretKey = CryptoJS.enc.Utf8.parse(APPCONFIG.AUTH.SECRETKEY);
      
    //       // Decrypt the data
    //       const decrypted = CryptoJS.AES.decrypt(data, secretKey, {
    //         keySize: 128 / 8,
    //         iv: secretKey, // IV must also be a WordArray
    //         mode: CryptoJS.mode.CBC,
    //         padding: CryptoJS.pad.Pkcs7,
    //       });
      
    //       // Convert decrypted data to a UTF-8 string
    //       const decryptedText = decrypted.toString(CryptoJS.enc.Utf8);
      
    //       if (!decryptedText) {
    //         throw new Error("Decryption resulted in an empty string.");
    //       }
      
    //       // Parse decrypted string to JSON
    //       return JSON.parse(decryptedText);
    //     } catch (error) {
    //       console.error("Decryption failed:", error);
    //       return null; // Return null if decryption fails
    //     }
    //   };    
    
    // export const  decryptJson = (data) => {
    // return JSON.parse(CryptoJS.enc.Utf8.stringify(CryptoJS.AES.decrypt(data,  APPCONFIG.AUTH.SECRETKEY, 
    // {
    //     keySize: 128 / 8,
    //     iv: APPCONFIG.AUTH.SECRETKEY,
    //     mode: CryptoJS.mode.CBC,
    //     padding: CryptoJS.pad.Pkcs7
    //   })));
    // }