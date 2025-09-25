import {Navigate} from "react-router-dom";
import {jwtDecode} from "jwt-decode";
import api from "../api.js"
import { REFRESH_TOKEN, ACCESS_TOKEN } from "../constants";
import { useState, useEffect } from "react";

// Wrapper component to protect routes that require authentication
//TODO: Understand why this is needed

function ProtectedRoute({children}) {
    const [isAuthorized, setIsAuthorized] = useState(false);

    useEffect(() => { // On component mount, check authentication status
        auth().catch(console.error);
    }, []);

    const refreshToken = async () => {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN);
        try {
            const response = await api.post("/api/token/refresh/", { refresh: refreshToken }); // Retrieves new access token
            if (response.status === 200) {
                localStorage.setItem(ACCESS_TOKEN, response.data.access);
                setIsAuthorized(true);
            } else {
                setIsAuthorized(false);
                console.error("Failed to refresh token:", response);
            }
        }
        catch (error) {
            console.error("Token refresh failed:", error);
            setIsAuthorized(false);
        }
    }

    const auth = async () => {
        const refresh = localStorage.getItem(REFRESH_TOKEN);
        if (!refresh) {
            setIsAuthorized(false);
            return;
        }
        
        const decoded = jwtDecode(refresh);
        const refreshExp = decoded.exp
        const currentTime = Date.now() / 1000; // Convert to seconds

        if (refreshExp < currentTime) {
            await refreshToken();
        } else {
            setIsAuthorized(true); 
        }
    }

    if (!isAuthorized) {
        return <div>Loading...</div>; 
    }

    return isAuthorized ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;