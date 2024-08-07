import { Metadata } from 'next';
import React, { ReactNode } from 'react'

export const metadata: Metadata = {
    title: "Register",
    description: "Login and Signup",
};

const AuthLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main>
            {children}
        </main>
    )
}

export default AuthLayout