import { createContext, useEffect, useState } from "react";
import { myAxios } from "../api/axios";

export const AppContext = createContext();

export default function AppProvider({ children }) {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [user, setUser] = useState(null);

    async function getUser() {
        try {
            const res = await myAxios.get('/api/user');
            setUser(res.data);
        } catch (error) {
            console.error("Failed to fetch user:", error);
            logout();
        }
    }

    async function login(credentials) {
        try {
            const response = await myAxios.post('/api/login', credentials);
            localStorage.setItem('token', response.data.token);
            setToken(response.data.token);
            await getUser();
            return true;
        } catch (error) {
            console.error("Login failed:", error);
            return false;
        }
    }

    async function register(userData) {
        try {
            const response = await myAxios.post('/api/register', userData);
            localStorage.setItem('token', response.data.token);
            setToken(response.data.token);
            await getUser();
            return true;
        } catch (error) {
            console.error("Registration failed:", error);
            return false;
        }
    }

    async function logout() {
        try {
            await myAxios.post('/api/logout');
            localStorage.removeItem('token');
            setToken(null);
            setUser(null);
        } catch (error) {
            console.error("Logout failed:", error);
        }
    }

    useEffect(() => {
        if (token) {
            getUser();
        }
    }, [token]);

    return (
        <AppContext.Provider value={{ 
            token, 
            setToken, 
            user, 
            setUser,
            login,
            register,
            logout,
            getUser
        }}>
            {children}
        </AppContext.Provider>
    );
}