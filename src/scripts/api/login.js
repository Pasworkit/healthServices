import {setCookie} from "../utils/cookiehelpers.js";
import instance from "./instance.js"

const login = async (email, password) => {
    try {
        const {status, data} = await instance.post('/login', {email: email, password: password});
        if (status === 200) {
            setCookie('token', data);
            return status;
        }
    } catch (err) {
        console.error(err);
    }
}

export default login;