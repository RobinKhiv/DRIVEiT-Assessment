import config from '../config';
import axios from 'axios';

const ApiService = {
    async getData() {
        try {
            let res = await axios.get(config.API_ENDPOINT)
            return JSON.parse(res.data);
        } catch (error) {
            console.log(error.response);
        }
    }
}

export default ApiService;