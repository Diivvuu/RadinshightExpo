import { create } from 'apisauce';
import LocalStorageService from '../services/LocalStorageServices';

// Define the API base URL
const api = create({
  baseURL: 'http://13.201.159.251:8001/api', // Replace with your API endpoint
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  timeout: 20000000, // Set a timeout (20 seconds)
});


const SECRET_KEY = "ZVJhZEFkbWluU2VjcmV0";


// Function to set Authorization token and Client-ID dynamically
 const setAuthHeaders = (token, clientId) => {
  api.setHeaders({
    Authorization: `Bearer ${token}`,  // Adding Bearer token
    'clientid': clientId,  // Adding custom Client-ID header
  });
};

setAuthHeaders(`${LocalStorageService.getUserInfo("userInfo")?.access_token}`, 'aphcor');

// Example GET request
export const getData = async (endpoint) => {
  const response = await api.get(endpoint);
  if (response.ok) {
    return response.data;
  } else {
    throw new Error(response.problem);
  }
};

// Example POST request
export const postData = async (endpoint, data) => {
  const response = await api.post(endpoint, data);
  if (response.ok) {
    return response.data;
  } else {
    throw new Error(response.problem);
  }
};

export default api;


// Example GET request
// api.get('/path/to/resource')
//   .then(response => {
//     if (response.ok) {
//       console.log('Data:', response.data);
//     } else {
//       console.error('API Error:', response.problem);
//     }
//   })
//   .catch(error => {
//     console.error('Network Error:', error);
//   });

// Example POST request
// api.post('/path/to/resource', { key: 'value' })
//   .then(response => {
//     if (response.ok) {
//       console.log('Data:', response.data);
//     } else {
//       console.error('API Error:', response.problem);
//     }
//   })
//   .catch(error => {
//     console.error('Network Error:', error);
//   });