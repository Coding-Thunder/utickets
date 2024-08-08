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
  terms_and_conditons: "/terms-and-conditons"
}