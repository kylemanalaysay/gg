import React, {useState, createContext} from 'react';

export const AuthContext = createContext({});

export const AuthUserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};