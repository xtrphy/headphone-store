import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import LayoutClient from "@/components/LayoutClient/LayoutClient";
import "./globals.css";

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["cyrillic", "cyrillic-ext"],
    weight: ["600", "500", "400"]
});

export const metadata: Metadata = {
    title: "Shopper",
    description: "Headphones Store",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="en">
            <body className={`${montserrat.variable} antialiased`}>
                <LayoutClient>
                    {children}
                </LayoutClient>
            </body>
        </html>
    );
}
