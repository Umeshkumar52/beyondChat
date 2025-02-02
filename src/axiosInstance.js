import axios from "axios";
const url="http://localhost:5000"
//  const url="https://beyondchatserver.onrender.com/send-otp"
 const axiosInstance= axios.create({
    baseURL:url,
    // 'withCredentials':true,
  headers:{
        "Content-Type":"application/json"
    }
})
export const multiPartInstance= axios.create({
    baseURL:url,
//    'withCredentials':true,
 headers:{
        "Content-Type":"multipart/form-data"
    }
})
export default axiosInstance