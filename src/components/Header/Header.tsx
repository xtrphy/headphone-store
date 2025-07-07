import React from "react";
import Input from "../SearchInput/SearchInput";
import Quantity from "../Cart/Quantity";
import Link from "next/link";
import LoginSign from "../LoginSign/LoginSign";

const Header = () => {
    return (
        <header className="flex items-center justify-between px-[85px] py-[50px]">

            <h2 className="text-4xl italic">
                <Link href="/">
                    <span className="text-main-green">Shop</span>
                    <span>per</span>
                </Link>
            </h2>

            <div className="flex gap-[38px]">

                <Input />

                <div className="flex gap-[23px]">
                    <Quantity />

                    <LoginSign />
                </div>
                
            </div>

        </header>
    );
};

export default Header;