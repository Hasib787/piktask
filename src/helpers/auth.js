import axios from 'axios';

export const createOrUpdateUser = async (authToken) => {
    return axios.post("", {}, {
        headers: {authToken}
    });
}