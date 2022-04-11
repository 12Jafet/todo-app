import axios from "axios";

const useApi = (request) => {
    const BASE_URL = 'https://624a33cefd7e30c51c0b458d.mockapi.io/api/v1/';

    const handleRequest = async () => {
        try {
            const response = await axios({
                method: request.method ? request.method : 'GET',
                url: `${BASE_URL}${request.url}`,
                data: request.data ? request.data : null
            });
            
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    return {
        handleRequest
    };
}

export default useApi;