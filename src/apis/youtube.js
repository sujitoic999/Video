import axios from 'axios';

const KEY = 'AIzaSyDSe5z-wtkA_Da-408UBWeeW-PqqLdRIp8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part:'snippet',
        maxResults: 5,
        key: KEY
    }
});