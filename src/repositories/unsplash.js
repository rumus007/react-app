import axios from "axios";

let unsplashAPI = "https://api.unsplash.com";
let apiKey = "Client-ID __hAebXCnPDgV5PM-VMbxn11K4m212CTXfUU28RtL-U";

export default axios.create({
  baseURL: unsplashAPI,
  headers: {
    Authorization: apiKey,
  },
});
