import axios from "axios";
import params from "@/app/params"; // API URL from params.js


//const DICOMWEB_SERVER_URL = 'https://dicomweb-server.com/qido-rs/1.2.840.113619.2.290.3.2831157764.250.1535507756.909';
const DICOMWEB_HEADERS = {
  Accept: 'application/json',
};

const DICOMWEB_SERVER_URL = 'https://radinsightai.com:3113/studies';
const STUDY_INSTANCE_UID = '1.2.840.113619.2.290.3.2831157764.250.1535507756.909';

export const validateDicomServer = async () => {
  debugger;
    //setDicomProgressFlag(true);
    // const url = params.hostAddress + 'other/patients';
    // try {
    //   let data = await axios.get(url);
    //   //setDicomProgressFlag(false);
    //   if (data.status == "200") {
    //     //setDicomApiFlag(true);
    //   } else {
    //     //setDicomApiFlag(false);
    //   }
    // } catch (e) {
    //   //setDicomProgressFlag(false);
    //   console.log(e);
    // }
    try {
       return fetchStudyMetadata();
      // const response = await axios.get(DICOMWEB_SERVER_URL, {
      //   headers: DICOMWEB_HEADERS,
      // });
  
      // console.log('DICOM Studies:', response.data);
      // return response.data;
    } catch (error) {
      console.error('Error fetching DICOM studies:', error);
      return null;
    }
  }


//const httpsAgent = new https.Agent({ rejectUnauthorized: false });


const fetchStudyMetadata = async () => {
  try {
    const response = await axios.get(`${DICOMWEB_SERVER_URL}?StudyInstanceUID=${STUDY_INSTANCE_UID}`, {
      //httpsAgent, // Use custom agent
      headers: { Accept: 'application/json' },
    });

    console.log('Study Metadata:', JSON.stringify(response.data, null, 2));
    return response.data;
  } catch (error) {
    console.error('Error fetching study metadata:', error.message);
    return null;
  }
};

// Execute function
//fetchStudyMetadata();