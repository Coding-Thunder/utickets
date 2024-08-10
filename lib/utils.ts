import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



export const routings = {
  home: "/",
  search_flights: "/search-flights",
  my_bookings: "/my-bookings",
  about: "/about",
  support: "/support",
  sign_in: "/sign-in",
  sign_up: "/sign-up",
  terms_and_conditons: "/terms-and-conditons",
  sign_in_success: "/sign-in-success"
}


export const handleError = (error: any, toast: any) => {
  const messageError = error.response.data.message
  if (Array.isArray(messageError)) {
    if (messageError.length > 1) {
      toast({ description: "Plese fill all the fields", duration: 2000 })

    }
  } else {
    toast({ description: messageError[0], duration: 2000 })
  }
}


export const config = {
  localServerUrl: "http://localhost:3002",
  productionServerUrl: "https://api.universalticketss.com"
}