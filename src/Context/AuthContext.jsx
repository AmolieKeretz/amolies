import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext(null);

const AuthProvider = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Simulate checking auth status from local storage or initial load
        const authStatus = localStorage.getItem('auth-token') ? true : false;
        setIsAuthenticated(authStatus);
    }, []);

    const login = () => {
        localStorage.setItem('auth-token', 'your-token');
        setIsAuthenticated(true);
    };

    const logout = () => {
        localStorage.removeItem('auth-token');
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
