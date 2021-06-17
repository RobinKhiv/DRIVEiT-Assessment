import axios from 'axios';
import backend from '../backend/backend.php';

const ApiService = {
    async getData() {
        try {
            let res = await axios.get(backend)
            return res.data;
        } catch (error) {
            console.log(error.response);
        }
    }
}

export default ApiService;