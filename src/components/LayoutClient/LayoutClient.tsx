"use client";

import { useState } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import AuthModal from "@/components/AuthModal/AuthModal";

const LayoutClient = ({ children }: { children: React.ReactNode }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <Header onLoginClick={() => setIsModalOpen(true)} />
            <main>
                {children}
            </main>
            <AuthModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            <Footer />
        </>
    );
}

export default LayoutClient;