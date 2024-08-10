"use client"
import { routings } from '@/lib/utils';
import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';

import UserAvatar from "@/components/UserAvatar/UserAvatar"
import { useRouter } from 'next/navigation';
// Define a type for the props if you need to pass any
type HeaderProps = {
  // Add any props you might need here
  // user?: Record<string, any>
};

const Header: React.FC<HeaderProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<Record<string, any> | any>(null)
  const router = useRouter();


  const getUser = useCallback(async () => {
    const userObject = await JSON.parse(localStorage.getItem("user") as string)
    setUser(userObject)
  }, [])

  const onLogout = () => {
    localStorage.clear()
    window.location.reload()
  }

  useEffect(() => {
    getUser()
  }, [getUser])

  return (
    <header className="bg-white text-black sticky top-0 left-0 z-40  shadow-lg ">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center">
          <span className="font-semibold text-2xl tracking-tight text-ble">Universal<span className='text-blue-900'>Ticketss</span></span>
        </div>
        <nav className="hidden md:flex space-x-8 items-center">
          <Link href={routings.home} className="block py-2 hover:text-gray-300 transition duration-300 ease-in-out">Home</Link>
          <Link href={routings.my_bookings} className="hover:text-gray-300 transition duration-300 ease-in-out">My Bookings</Link>
          <Link href={routings.about} className="hover:text-gray-300 transition duration-300 ease-in-out">About</Link>
          <Link href={routings.support} className="hover:text-gray-300 transition duration-300 ease-in-out">Support</Link>
          <div className="flex space-x-4">

            {user?.full_name ? (
              <UserAvatar onLogout={onLogout} full_name={user.full_name} />
            ) : (
              <>
                <Link href={routings.sign_in} className="bg-white text-blue-600 px-4 py-2 rounded-full shadow hover:bg-gray-100 transition duration-300 ease-in-out">
                  Log In
                </Link>
                <Link href={routings.sign_up} className="bg-blue-600 border border-white text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out">
                  Sign Up
                </Link>
              </>
            )}

          </div>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="px-6 pt-4 pb-2">
            <Link href={routings.home} className="block py-2 hover:text-gray-300 transition duration-300 ease-in-out">Home</Link>
            <Link href={routings.my_bookings} className="block py-2 hover:text-gray-300 transition duration-300 ease-in-out">My Bookings</Link>
            <Link href={routings.about} className="block py-2 hover:text-gray-300 transition duration-300 ease-in-out">About</Link>
            <Link href={routings.support} className="block py-2 hover:text-gray-300 transition duration-300 ease-in-out">Support</Link>
            <div className="mt-4">

              {user?.full_name ? (
                <UserAvatar onLogout={onLogout} full_name={user.full_name} />
              ) : (
                <>
                  <Link href={routings.sign_in} className="block w-full bg-white text-blue-600 px-4 py-2 rounded-full shadow hover:bg-gray-100 transition duration-300 ease-in-out mb-2">
                    Log In
                  </Link>
                  <Link href={routings.sign_up} className="block w-full bg-blue-600 border border-white text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out">
                    Sign Up
                  </Link>
                </>
              )}

            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

const mapStateToProps = ({ user }: any) => ({
  user,
})

export default Header;
