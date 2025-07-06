import { SearchIcon } from "lucide-react";
import React from "react";

const Input = () => {
    return (
        <div className="w-[322px] h-[60px] px-[24px] py-[12px] flex items-center gap-3 shadow-md rounded-lg">

            <input
                type="text"
                className="w-full h-full placeholder:text-[#292930] placeholder:opacity-20 outline-none"
                placeholder="Поиск"
            />

            <button className="bg-main-green p-[9px] rounded-md text-white cursor-pointer">
                <SearchIcon size={17.5} strokeWidth={2.5} />
            </button>

        </div>
    );
};

export default Input;