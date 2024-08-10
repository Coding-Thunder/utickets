"use client"
import React, { FormEvent, useState } from 'react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { FaAirbnb } from 'react-icons/fa'; // Placeholder icon
import b777 from "@/public/jpg-jpeg/b777.jpg"
import { handleError, routings } from '@/lib/utils';
import { useToast } from '../ui/use-toast';
import apiService from '@/axios/api.service';
import { useRouter } from 'next/navigation';
import { loginAction } from '@/redux/user/actions';
import { connect } from 'react-redux';

interface Props {
    // setUser: (payload: any) => void
}
const SignUpForm: React.FC<Props> = () => {

    const { toast } = useToast()
    const [fullName, setFullName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [termsAndConditionsChecked, setTermsAndConditionsChecked] = useState<boolean>(false);
    const router = useRouter()

    const handleSignUp = async (e: FormEvent) => {
        e.preventDefault()
        const toastMessage = {
            description: "ALl fields are necessory",
            duration: 3000
        }

        const compliment = fullName && email && password && confirmPassword
        if (compliment && !termsAndConditionsChecked) {
            toastMessage.description = "Please check terms & conditions"
            toast(toastMessage)
        }

        if (compliment && (password !== confirmPassword)) {
            toastMessage.description = "Passwords do not match"
            toast(toastMessage)
        }

        const payload = {
            full_name: fullName,
            email,
            password,
            confirm_password: confirmPassword
        }
        try {
            const { data } = await apiService.signup(payload)

            if (data) {
                if (data.user) {
                    localStorage.setItem("user", JSON.stringify(data.user))
                    localStorage.setItem("token", data.token)
                    return
                }
                setTimeout(() => {
                    router.push(data.redirect)

                }, 3000)
                toastMessage.description = data.message
                toast(toastMessage)
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
                <h2 className="text-4xl font-extrabold text-gray-900 text-center">Create an Account</h2>
                <form onSubmit={handleSignUp} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                        <Input
                            id="name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            required
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 ease-in-out"
                            placeholder="John Doe"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
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
                            autoComplete="new-password"
                            required
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 ease-in-out"
                            placeholder="********"
                        />
                    </div>
                    <div>
                        <label htmlFor="confirm_password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                        <Input
                            id="confirm_password"
                            name="confirm_password"
                            type="password"
                            autoComplete="new-password"
                            required
                            value={confirmPassword}
                            onChange={e => setConfirmPassword(e.target.value)}
                            className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 ease-in-out"
                            placeholder="********"
                        />
                    </div>
                    <div className="flex items-center">
                        <Checkbox id="terms" checked={termsAndConditionsChecked} onClick={() => setTermsAndConditionsChecked(!termsAndConditionsChecked)} name="terms" required className="h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                        <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                            I agree to the <Link href={routings.terms_and_conditons} className="font-medium text-indigo-600 hover:text-indigo-500">terms and conditions</Link>
                        </label>
                    </div>
                    <div>
                        <Button
                            onClick={handleSignUp}
                            type="submit"
                            className="w-full py-3 px-4 border border-transparent rounded-md shadow-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out"
                        >
                            Sign Up
                        </Button>
                    </div>
                </form>
                <div className="text-center text-sm text-gray-600">
                    Already have an account? <Link href={routings.sign_in} className="font-medium text-indigo-600 hover:text-indigo-500">Sign in</Link>
                </div>
            </div>
        </div>
    );
};

// const mapDispatchToProps = (dispatch: any) => {
//     setUser: (payload: any) => dispatch(loginAction(payload))
// }
export default SignUpForm;
