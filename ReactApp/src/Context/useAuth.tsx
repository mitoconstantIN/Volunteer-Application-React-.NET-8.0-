import { createContext, useEffect, useState } from "react";
import { UserProfile } from "../Models/User";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginAPI, registerAPI } from "../Services/AuthService";
import React from 'react';
import axios from "axios";

type UserContextType = {
    user: UserProfile | null;
    token: string | null;
    registerUser: (
        email: string, 
        username: string,
        password: string,
        usertype: number,
        firstName?: string,
        lastName?: string,
        city?: string,
        points?: number,
        organizationName?: string,
        organizationEmail?: string,
        phoneNumber?: string,
        id? : string
    ) => void;
    loginUser: (username: string, password: string) => void;
    logout: () => void;
    isLoggedIn: () => boolean;
};

type Props = { children: React.ReactNode };

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children }: Props) => {
    const navigate = useNavigate();
    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<UserProfile | null>(null);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const user = localStorage.getItem("user");
        const token = localStorage.getItem("token");
        if (user && token) {
            setUser(JSON.parse(user));
            setToken(token);
            axios.defaults.headers.common["Authorization"] = "Bearer " + token;
            axios.defaults.headers.common['ApiKey'] = "app key";
        }
        setIsReady(true);
    }, []);

    const registerUser = async (
        email: string,
        username: string,
        password: string,
        usertype: number,
        firstName?: string,
        lastName?: string,
        city?: string,
        points?: number,
        organizationName?: string,
        organizationEmail?: string,
        phoneNumber?: string,
        id?: string
    ) => {
        try {
            const res = await registerAPI(email, username, password, usertype, firstName, lastName, city, points, organizationName, organizationEmail, phoneNumber, id);
            if (res) {
                console.log("API response:", res.data); // Debugging

                const userObj = {
                    userName: res.data.userName,
                    email: res.data.email,
                    firstName: res.data.firstName,
                    lastName: res.data.lastName,
                    usertype: usertype, // Use the passed in usertype
                    city: res.data.city,
                    points: res.data.points,
                    organizationName: res.data.organizationName,
                    organizationEmail: res.data.organizationEmail,
                    phoneNumber: res.data.phoneNumber,
                    id: res.data.id
                };
                console.log("User object to be stored:", userObj); // Debugging

                localStorage.setItem("token", res.data.token);
                localStorage.setItem("user", JSON.stringify(userObj));
                setToken(res.data.token);
                setUser(userObj);
                toast.success("Registration Success!");
                

                // Debugging navigation
                console.log("Navigating to the respective page based on usertype...");
                
                if (userObj.usertype === 1) {
                    navigate("/VFeed");
                } else if (userObj.usertype === 2) {
                    navigate("/OFeed");
                } else if (userObj.usertype === 3) {
                    navigate("/CollaboratorShop");
                }
            }
        } catch (e) {
            toast.warning("Server error occurred");
            console.error("Registration error:", e); // Debugging
        }
    };

    const loginUser = async (

        username: string,
        password: string,

    ) => {
        try {
            const res = await loginAPI( username, password);
            if (res) {
                console.log("API response:", res.data); // Debugging
                console.log("Res data: " + res.data.userType)
                const userObj = {
                    userName: res.data.userName,
                    email: res.data.email,
                    firstName: res.data.firstName,
                    lastName: res.data.lastName,
                    usertype: res.data.userType, // Use the passed in usertype
                    city: res.data.city,
                    points: res.data.points,
                    organizationName: res.data.organizationName,
                    organizationEmail: res.data.organizationEmail,
                    phoneNumber: res.data.phoneNumber,
                    id: res.data.id
                };
                console.log("User object to be stored:", userObj); // Debugging

                localStorage.setItem("token", res.data.token);
                localStorage.setItem("user", JSON.stringify(userObj));
                setToken(res.data.token);
                setUser(userObj);
                toast.success("Login Success!");
                

                // Debugging navigation
                console.log("Navigating to the respective page based on usertype...");
                
                if (res.data.userType === 1) {
                    navigate("/VFeed");
                } else if (res.data.userType === 2) {
                    navigate("/OFeed");
                } else if (res.data.userType === 3) {
                    navigate("/CollaboratorShop");
                }
            }
        } catch (e) {
            toast.warning("Server error occurred");
            console.error("Registration error:", e); // Debugging
        }
    };

   

    const isLoggedIn = () => {
        return !!user;
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
        setToken(null);
        navigate("/");
    };

    return (
        <UserContext.Provider 
            value={{ loginUser, user, token, logout, isLoggedIn, registerUser }}
        >
            {isReady ? children : null}
        </UserContext.Provider>
    );
};

export const useAuth = () => React.useContext(UserContext);
