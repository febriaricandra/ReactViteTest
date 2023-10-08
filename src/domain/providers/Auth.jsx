import * as React from 'react';
import AuthServices from '../services/AuthService'

const AuthContext = React.createContext({
    user: null,
    login: () => {},
});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = React.useState(null);
    const [token, setToken] = React.useState(null);

    const login = async (userData) => {
        try {
            const user = await AuthServices.login(userData);
            setUser(user);
            console.log(user);
            localStorage.setItem('token', user.token);
            setToken(user.token);
        } catch (error) {
            console.error(error);
            throw new Error(error);
        }
    };

    const registration = async (userData) => {
        try {
            const user = await AuthServices.register(userData);
            setUser(user);
            console.log(user);
            localStorage.setItem('token', user.token);
            setToken(user.token);
        } catch (error) {
            console.error(error);
            throw new Error(error);
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('token');
        setToken(null);
    }

    return (
        <AuthContext.Provider
            value={{ user, login, logout, registration, token }}
            children={children}
        />
    );
};

export const useAuth = () => React.useContext(AuthContext);