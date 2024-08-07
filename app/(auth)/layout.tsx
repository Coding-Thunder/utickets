import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import SupportHeader from "@/components/Home/SupportHeader";
import Header from "@/components/Commmon/Header";
import Footer from "@/components/Commmon/Footer";
import { cn } from "@/lib/utils";
import Disclaimer from "@/components/Commmon/Disclaimer";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
})

export const metadata: Metadata = {
    title: "Registes Ticketss",
    description: "Book cheap flight tickets",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
                {children}
            </body>
        </html>
    );
}
