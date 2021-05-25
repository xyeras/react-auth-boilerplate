import axios from 'axios';

// FUNCTION TO GRAB TOKEN FROM 
const authToken = () => {
    try {
      const token = localStorage.getItem("token");
      return token;
    } catch (err) {
      console.log(err.message);
    }
  };

//   AXIOS INSTANCE TO API ENDPOINT
const instance = axios.create({
    baseURL: "http://localhost:3003/api/v1",
    headers: {
        "Content-type": "application/json",
    }
});

// INTERCEPTOR TO PASS TOKEN INTO HEADERS FOR ACCESS TO API BEFORE GETTING TO API
instance.interceptors.request.use(
    async (config) => {
      const token = authToken();
      if (token) {
        config.headers["auth-token"] = token;
      }
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );

export default instance;