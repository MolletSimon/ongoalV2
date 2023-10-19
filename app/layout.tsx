import {Header} from "@/components/Header/Header";
import AuthProvider from "./AuthProvider";
import "./globals.css";
import type {Metadata} from "next";
import Footer from "@/components/Footer";
import React, {ReactNode} from "react";

export const metadata: Metadata = {
    title: "Ongoal",
    description: "L'application des tournois qui est bien normalement",
};

export default function RootLayout({children}: { children: ReactNode; }) {
    return (
        <AuthProvider>
            <html lang="en">
              <body className="h-[90vh]">
                <Header/>
                {children}
                <Footer/>
            </body>
            </html>
        </AuthProvider>
    );
}
