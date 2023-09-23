import axios from 'axios';

export default axios.create({
    baseURL: 'https://backend.getlinked.ai/hackathon',
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: false,
});
