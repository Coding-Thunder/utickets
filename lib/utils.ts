import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"



type AirlineCode = 'AA' | 'AC' | 'AD' | 'AE' | 'AF' | 'AG' | 'AH' | 'AK' | 'AM' | 'AS' | 'AT' | 'AV' | 'AY' | 'B6' | 'BA' | 'BD' | 'BF' | 'BG' | 'BR' | 'CA' | 'CI' | 'CL' | 'CM' | 'CX' | 'DA' | 'DL' | 'EI' | 'EK' | 'EY' | 'FJ' | 'FM' | 'FR' | 'GA' | 'GF' | 'GL' | 'GQ' | 'GY' | 'HA' | 'HX' | 'IB' | 'IC' | 'IL' | 'IR' | 'JL' | 'JM' | 'KL' | 'KM' | 'LA' | 'LH' | 'LX' | 'LY' | 'MA' | 'MH' | 'MU' | 'NZ' | 'OK' | 'OS' | 'OZ' | 'P2' | 'QF' | 'QR' | 'RA' | 'RJ' | 'SK' | 'SL' | 'SQ' | 'SU' | 'SV' | 'TG' | 'TK' | 'UA' | 'UL' | 'US' | 'VA' | 'VS' | 'WN' | 'WY' | 'YX';

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
  sign_in_success: "/sign-in-success",
  book_now:"book-now"
}


export const handleError = (error: any, toast: any) => {
  console.log(error, "error")
  const messageError = error.response.data.message
  if (Array.isArray(messageError)) {
    toast({ description: messageError[0], duration: 2000 })
  }
  toast({ description: messageError, duration: 2000 })
}


export const config = {
  localServerUrl: "http://localhost:3002",
  productionServerUrl: "https://api.universalticketss.com"
}




export const getAirlineName = (carrierCode: string) => {
  const airlines: { [key: string]: string } = {
    AA: "American Airlines",
    AC: "Air Canada",
    AD: "Azul Brazilian Airlines",
    AE: "Mandarin Airlines",
    AF: "Air France",
    AG: "Aloha Airlines",
    AH: "Air Algerie",
    AK: "Alaska Airlines",
    AM: "Aeromexico",
    AS: "Alaska Airlines",
    AT: "Royal Air Maroc",
    AV: "Avianca",
    AY: "Finnair",
    B6: "JetBlue Airways",
    BA: "British Airways",
    BD: "BMI",
    BF: "Air Burkina",
    BG: "Biman Bangladesh Airlines",
    BR: "EVA Air",
    CA: "Air China",
    CI: "China Airlines",
    CL: "Lufthansa CityLine",
    CM: "Copa Airlines",
    CX: "Cathay Pacific",
    DA: "Flybe",
    DL: "Delta Air Lines",
    EI: "Aer Lingus",
    EK: "Emirates",
    EY: "Etihad Airways",
    FJ: "Fiji Airways",
    FM: "Shanghai Airlines",
    FR: "Ryanair",
    GA: "Garuda Indonesia",
    GF: "Gulf Air",
    GL: "Air Greenland",
    GQ: "Air Guinea",
    GY: "Sky Airline",
    HA: "Hawaiian Airlines",
    HX: "Hong Kong Airlines",
    IB: "Iberia",
    IC: "Indian Airlines",
    IL: "Icelandair",
    IR: "Iran Air",
    JL: "Japan Airlines",
    JM: "Air Jamaica",
    KL: "KLM Royal Dutch Airlines",
    KM: "Air Malta",
    LA: "LATAM Airlines",
    LH: "Lufthansa",
    LX: "Swiss International Air Lines",
    LY: "El Al",
    MA: "Moroccan Airlines",
    MH: "Malaysia Airlines",
    MU: "China Eastern Airlines",
    NZ: "Air New Zealand",
    OK: "Czech Airlines",
    OS: "Austrian Airlines",
    OZ: "Asiana Airlines",
    P2: "PGA-Portugalia Airlines",
    QF: "Qantas Airways",
    QR: "Qatar Airways",
    RA: "Royal Nepal Airlines",
    RJ: "Royal Jordanian",
    SK: "Scandinavian Airlines",
    SL: "Thai Smile Airways",
    SQ: "Singapore Airlines",
    SU: "Aeroflot",
    SV: "Saudia",
    TG: "Thai Airways",
    TK: "Turkish Airlines",
    UA: "United Airlines",
    UL: "SriLankan Airlines",
    US: "US Airways",
    VA: "Virgin Australia",
    VS: "Virgin Atlantic Airways",
    WN: "Southwest Airlines",
    WY: "Oman Air",
    YX: "Republic Airways",
  };
  return airlines[carrierCode] || carrierCode; // Fallback to the carrier code if not found
};
