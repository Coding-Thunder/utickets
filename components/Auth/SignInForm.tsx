"use client"
import React, { FormEvent, useState } from 'react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { FaAirbnb } from 'react-icons/fa'; // Placeholder icon
import b777 from "@/public/jpg-jpeg/b777.jpg"
import { handleError, routings } from '@/lib/utils';
import apiService from '@/axios/api.service';
import { useToast } from '../ui/use-toast';
import { useRouter } from 'next/navigation';

const SignInForm: React.FC = () => {
    const { toast } = useToast()
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const router = useRouter()

    const handleSignIn = async (e: FormEvent) => {
        e.preventDefault()

        try {
            const { data } = await apiService.login({ email, password })
            if (data.token) {
                toast({
                    description: "Login Sucessfull",
                    duration: 2000
                })
                localStorage.setItem("user", JSON.stringify(data.user))
                localStorage.setItem("token", data.token)
                router.push(data.redirect)
            }
        } catch (error: any) {
            handleError(error, toast)
        }
    }

    return (
        <div
            className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center relative"
            style={{ backgroundImage: `url(${b777.src})` }}
        >
            <div className="absolute inset-0 bg-blue-900 opacity-60"></div>
            <div className="relative max-w-md w-full bg-white rounded-lg p-8 space-y-6 shadow-lg border border-gray-200">
                <div className="flex justify-center mb-6">
                    <FaAirbnb size={40} className="text-indigo-600" />
                </div>
                <h2 className="text-4xl font-extrabold text-gray-900 text-center">Sign In</h2>
                <form onSubmit={handleSignIn} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 ease-in-out"
                            placeholder="you@example.com"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <Input
                            id="password"
                            name="password"
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            autoComplete="current-password"
                            required
                            className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 ease-in-out"
                            placeholder="********"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <Checkbox id="remember_me" name="remember_me" className="h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                            <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                                Remember me
                            </label>
                        </div>
                        <div className="text-sm">
                            <Link href="/forgot-password" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Forgot your password?
                            </Link>
                        </div>
                    </div>
                    <div>
                        <Button
                            onSubmit={handleSignIn}
                            type="submit"
                            className="w-full py-3 px-4 border border-transparent rounded-md shadow-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out"
                        >
                            Sign In
                        </Button>
                    </div>
                </form>
                <div className="text-center text-sm text-gray-600">
                    Don{"'"}t have an account? <Link href={routings.sign_up} className="font-medium text-indigo-600 hover:text-indigo-500">Sign up</Link>
                </div>
            </div>
        </div>
    );
};

export default SignInForm;
