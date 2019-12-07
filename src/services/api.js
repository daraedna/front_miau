 import axios from 'axios';

 const api = axios.create ({
     baseURL: ' http://10.0.0.103:3331',
 });

 export default api;