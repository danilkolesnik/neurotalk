'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";

const PrivateRoute = ({ children }) => {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    
    const checkAuth = () => {
        if (!isAuthenticated) {
            router.push('/auth');
        } else {
            console.log('logged in!');
        }
    };
    return <>{children}</>;
};