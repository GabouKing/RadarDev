import axios from 'axios';
const api = axios.create({
    baseURL:'http://172.23.230.69:3333'
    //'http://6x-ryi.anonymous.mobile.exp.direct:80',
});
export default api;