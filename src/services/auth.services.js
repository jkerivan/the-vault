import axios from "axios";

const API_URL = "https://localhost:9000/api/auth";

const register = (username, email, password) => {
    return axios.post(API_URL + "signup", {
        username,
        email,
        password
    });
};

const login = (username, password) => {
    return axios.post(API_URL + "signin", {
        username,
        password
    }).then((resp) => {
        if (resp.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(resp.data));
        }

        return resp.data;
    });
};

const logout = () => {
    localStorage.removeItem("user");
};

export default {
    register,
    login,
    logout
};