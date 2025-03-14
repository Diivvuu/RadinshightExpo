
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { logout } from '../appRedux/actions/User.Actions';
import { encryptJson, encryptFieldUsingAES, decryptFieldUsingAES } from './EncryptDecryptServices';

async function _setToken(prefix, tokenObj) {
    AsyncStorage.setItem("TokenTime", moment().toString());
    AsyncStorage.setItem(prefix, tokenObj);
}

async function _setDicomToken(dicomToken) {
    AsyncStorage.setItem("dicomLoginSecret", dicomToken);
}

function _setHospitalDomain(data) {
    AsyncStorage.setItem("Hospital Domain", data);
}

function _setPatientData(data) {
    let data1 = AsyncStorage.getItem("Patient");
    let tmpData = data1 !== null || data1 !== undefined ? JSON.parse(data1) : {};
    tmpData = { ...tmpData, ...data }
    //  console.log(tmpData, "tmpData 1")
    AsyncStorage.setItem("Patient", JSON.stringify(tmpData));
}

function _setProcedureData(procedureCode, categoryId, data, patientId = undefined) {
    let existData = localStorage.getItem("draft");
    existData = existData !== null ? JSON.parse(existData) : {}
    if (Object.keys(existData).length) {
        if (patientId === undefined) {
            if (existData[categoryId]) {
                existData[categoryId][procedureCode] = data
                // let tmpObj = {...existData[categoryId]}
                // console.log(tmpObj)
                // if(Object.keys(tmpObj).length){
                //     let filteredData = Object.keys(tmpObj).filter((index) => tmpObj[index] !== procedureCode)
                //     console.log(filteredData)
                // }
                // tmpObj[procedureCode] = data
                // existData[categoryId] = [...tmpObj]
            }
            else {
                existData[categoryId] = { [procedureCode]: data }
            }
        }
        else {
            if (existData[patientId]) {
                if (existData[patientId][categoryId]) {
                    existData[patientId][categoryId][procedureCode] = data
                    // let tmpObj = {...existData[categoryId]}
                    // console.log(tmpObj)
                    // if(Object.keys(tmpObj).length){
                    //     let filteredData = Object.keys(tmpObj).filter((index) => tmpObj[index] !== procedureCode)
                    //     console.log(filteredData)
                    // }
                    // tmpObj[procedureCode] = data
                    // existData[categoryId] = [...tmpObj]
                }
                else {
                    existData[patientId][categoryId] = { [procedureCode]: data }
                }
            }
            else {
                existData[patientId] = { [categoryId]: { [procedureCode]: data } }
            }
        }
    }
    else {
        // existData[categoryId][procedureCode] = dataS
        if (patientId === undefined) {
            existData = { [categoryId]: { [procedureCode]: data } }
        }
        else {
            existData = { [patientId]: { [categoryId]: { [procedureCode]: data } } }
        }
    }
    AsyncStorage.setItem("draft", JSON.stringify(existData));
}


function _getPatientData() {
    let data = AsyncStorage.getItem("Patient");
    let tmpData = data !== null || data !== undefined ? JSON.parse(data) : {};
    return tmpData;
}

function _getPatientHeaderData() {
    let data = AsyncStorage.getItem("patientDataRtno");
    let tmpData = data !== null || data !== undefined ? JSON.parse(data) : {};
    return tmpData;
}

function _deletePatientHeaderData() {
    let data = AsyncStorage.removeItem("patientDataRtno");
   
}

function _getProcedureData() {
    let data = AsyncStorage.getItem("draft");
    let tmpData = data !== null || data !== undefined ? JSON.parse(data) : {};
    return tmpData;
}

function _deleteProcedureData(categoryId, patientId = undefined) {
    let data = AsyncStorage.getItem("draft");
    let tmpData = data !== null && data !== undefined ? JSON.parse(data) : {};
    if (Object.keys(tmpData).length) {
        if (patientId === undefined && tmpData[categoryId]) {
            delete tmpData[categoryId]
        }
        else if (tmpData[patientId] && tmpData[patientId][categoryId]) {
            delete tmpData[patientId][categoryId]
        }
    }
    AsyncStorage.setItem("draft", JSON.stringify(tmpData));
    // return  tmpData;
}

function _deletePatinetData(categoryId, patientId = undefined) {
    AsyncStorage.setItem("Patient", "{}");
    // return  tmpData;
}

function _getFromTokenObj(prefix, part) {
    let tokenObj = localStorage.getItem(prefix);
    tokenObj = tokenObj ? decryptFieldUsingAES(tokenObj) : null;
    return tokenObj ? tokenObj[part] : null;
}

function _getHospitalDomain() {
    return AsyncStorage.getItem("Hospital Domain");
}

function _getAccessToken(prefix) {
    let currentTime = AsyncStorage.getItem("TokenTime")
    let validTime = moment(currentTime).add(12, "hours")
    if (moment().isBefore(validTime)) {
        return AsyncStorage.getItem(prefix);
    }
    else {
        LocalStorageService.clear()
        // localStorage.removeItem("N_API");  
        // localStorage.removeItem("TokenTime");
    }
}
function _getRefreshToken(prefix) {
    return _getFromTokenObj(prefix, "refresh_token");
}
function _clearToken(prefix) {
    AsyncStorage.removeItem(prefix);
}
function _clearAll() {
    AsyncStorage.clear();
}
function _getExpiresIn(prefix = "") {
    return _getFromTokenObj(prefix, "expires_in");
}

function _setUserInfo(userInfo) {
    //let { image, ...userDetails } = userInfo;
    console.log('localstorgaeusrinfo', JSON.stringify(userInfo))
    AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
}
function _setLicense(licInfo) {
    AsyncStorage.setItem("licInfo", JSON.stringify(licInfo));
}

function _setPrivilege(privilegeInfo) {
    AsyncStorage.setItem("privilegeInfo", JSON.stringify(privilegeInfo));
}

function _setLicenseStatus(licInfo) {
    AsyncStorage.setItem("licStatus", licInfo);
}

function _setHospitalType(licInfo) {
    AsyncStorage.setItem("hospitalType", licInfo);
}

function _setHospitalLimit(limit) {
    AsyncStorage.setItem("hospitalLimit", limit);
}

function _setHospitalName(licInfo) {
    AsyncStorage.setItem("hospitalName", licInfo);
}

function _setGlobalSetting(globalsetting) {
    AsyncStorage.setItem("globalSetting", JSON.stringify(globalsetting));
}

function _setLoader(loaderState) {
    AsyncStorage.setItem("loader", loaderState);
}

function _setdepartmentDisplay(departmentDisplay) {
    AsyncStorage.setItem("departmentDisplay", departmentDisplay);
}

function _getdepartmentDisplay() {
    let departmentDisplay = AsyncStorage.getItem("departmentDisplay");
    return departmentDisplay;
}

function _getLoader() {
    let loader = AsyncStorage.getItem("loader");
    return loader;
}

function _getUserInfo() {
    let userInfo = AsyncStorage.getItem("userInfo");
    return userInfo ? userInfo : null;
}

function _getLicense() {
    let licInfo = AsyncStorage.getItem("licInfo");
    return licInfo ? licInfo : [];
}

function _getPrivilege() {
    let privilegeInfo = AsyncStorage.getItem("privilegeInfo");
    return privilegeInfo ? privilegeInfo : null;
}

function _getLicenseStatus() {
    let licInfo = AsyncStorage.getItem("licStatus");
    return licInfo ? (licInfo == "true" ? true : false) : null;
}

function _getGlobalSetting(label) {
    let globalSetting = AsyncStorage.getItem("globalSetting");
    let returnData = JSON.parse(globalSetting)
    if (returnData === null) {
        return null
    }
    let filter = returnData.filter((value) => value.label === label)
    return filter;
}

function _getHospitalType() {
    let licInfo = AsyncStorage.getItem("hospitalType");
    return licInfo ? licInfo : null;
}

function _getHospitalLimit() {
    let limit = AsyncStorage.getItem("hospitalLimit");
    return limit ? limit : null;
}

function _getHospitalName() {
    let licInfo = AsyncStorage.getItem("hospitalName");
    return licInfo ? licInfo : null;
}

function _setHospitalId(hospitalId){
    AsyncStorage.setItem('hospitalId',hospitalId)
}

function _getHospitalId(){
    return AsyncStorage.getItem('hospitalId')
}

export const LocalStorageService = {
    setToken: _setToken,
    setDicomToken: _setDicomToken,
    getAccessToken: _getAccessToken,
    getRefreshToken: _getRefreshToken,
    getExpires: _getExpiresIn,
    clearToken: _clearToken,
    clear: _clearAll,
    setUserInfo: _setUserInfo,
    getUserInfo: _getUserInfo,
    getLicense: _getLicense,
    setLicense: _setLicense,
    getLicenseStatus: _getLicenseStatus,
    setLicenseStatus: _setLicenseStatus,
    setPrivilege: _setPrivilege,
    getPrivilege: _getPrivilege,
    setHospitalType: _setHospitalType,
    getHospitalType: _getHospitalType,
    setHospitalName: _setHospitalName,
    getHospitalName: _getHospitalName,
    setHospitalLimit: _setHospitalLimit,
    getHospitalLimit: _getHospitalLimit,
    setGlobalSetting: _setGlobalSetting,
    getGlobalSetting: _getGlobalSetting,
    setLoader: _setLoader,
    getLoader: _getLoader,
    setHospitalDomain: _setHospitalDomain,
    getHospitalDomain: _getHospitalDomain,
    setProcedureData: _setProcedureData,
    getProcedureData: _getProcedureData,
    setPatientData: _setPatientData,
    getPatientData: _getPatientData,
    deleteProcedureData: _deleteProcedureData,
    deletePatientData: _deletePatinetData,
    setdepartmentDisplay: _setdepartmentDisplay,
    getdepartmentDisplay: _getdepartmentDisplay,
    getPatientHeaderData:_getPatientHeaderData,
    deletePatientHeaderData:_deletePatientHeaderData,
    getHopsitalId :_getHospitalId,
    setHospitalId :_setHospitalId
}

export default LocalStorageService;