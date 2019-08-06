// Not in use anymore, left it here for historic reasons

import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

export default instance;
