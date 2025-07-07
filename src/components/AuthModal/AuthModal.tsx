"use client";

import { X } from "lucide-react";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
}

const Modal = ({ isOpen, onClose }: ModalProps) => {
    const [isLogin, setIsLogin] = useState(true);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    key="modal-overlay"
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >

                    <motion.div
                        key="modal-content"
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                        exit={{ y: -20 }}
                        transition={{ duration: 0.25 }}
                        className="bg-white p-6 rounded-lg shadow-md relative w-full max-w-md mx-4"
                    >
                        <button
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 cursor-pointer"
                            onClick={onClose}
                        >
                            <X />
                        </button>

                        <h2 className="text-2xl font-bold mb-4 text-center">
                            {isLogin ? "Login" : "Registration"}
                        </h2>

                        <form className="flex flex-col gap-4">
                            <input
                                type="email"
                                placeholder="Email"
                                className="border p-2 rounded"
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                className="border p-2 rounded"
                            />
                            {!isLogin && (
                                <input
                                    type="password"
                                    placeholder="Confirm password"
                                    className="border p-2 rounded"
                                />
                            )}
                            <button className="bg-main-green text-white py-2 rounded hover:bg-hover-green transition cursor-pointer">
                                {isLogin ? "Login" : "Register"}
                            </button>
                        </form>

                        <p className="mt-4 text-sm text-center">
                            {isLogin ? (
                                <>
                                    Don&apos;t have an account?{" "}
                                    <button
                                        onClick={() => setIsLogin(false)}
                                        className="text-main-green hover:underline cursor-pointer"
                                    >
                                        Register
                                    </button>
                                </>
                            ) : (
                                <>
                                    Already have an account?{" "}
                                    <button
                                        onClick={() => setIsLogin(true)}
                                        className="text-main-green hover:underline cursor-pointer"
                                    >
                                        Login
                                    </button>
                                </>
                            )}
                        </p>
                    </motion.div>

                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Modal;