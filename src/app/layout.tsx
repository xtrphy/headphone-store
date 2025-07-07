import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

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
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
