import axios from 'axios'

const baseurl = 'http://192.168.1.244:3000/api'
const AxiosInstance = axios.create({
    baseURL: baseurl, 
    timeout: 5000,
    headers: {
        'Cache-Control':'no-cache',
        "Content-Type": "application/json",
        accept: "application/json",
        
    }
});
export default AxiosInstance