"use client"

import { useAccountAbstraction } from '@/app/store/accountAbstractionContext';
import React from 'react';

const AuthKit = () => {

    console.log("Env", process.env.NEXT_PUBLIC__WEB3AUTH_CLIENT_ID)
    console.log("Env", process.env.NEXT_APP_PUBLIC_PASSWORD)

    const { loginWeb3Auth, logoutWeb3Auth, isAuthenticated, chain, chainId } = useAccountAbstraction();

    console.log("IsAuthenticated", isAuthenticated, chain, chainId);

    const handleLoginIn = () => {
        console.log("Run")
        loginWeb3Auth();
    }

    return (
        <div>
            hello

            <br />

            <button onClick={handleLoginIn}>
                Connect button
            </button>

            <br />

            <button onClick={logoutWeb3Auth}>
                Disconnect
            </button>
        </div>
    );
};

export default AuthKit;