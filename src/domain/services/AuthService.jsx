
import Api from "../../utils/Api";

class AuthServices {
    static async login(userData) {
        const response = await Api.post("/auth/login", userData);
        return response.data;
    }
    
    static async register(userData) {
        const response = await Api.post("/auth/register", userData);
        return response.data;
    }
}

export default AuthServices;
