import { ShoppingBagIcon } from "lucide-react";
import React from "react";

const Quantity = () => {
    return (
        <button className="w-[229px] h-[60px] flex items-center justify-center gap-4 border-1 border-main-green rounded-4xl hover:bg-gray-100 cursor-pointer transition-colors duration-150">
            <ShoppingBagIcon size={20} color="#10B981" />
            <span className="font-medium">
                0 Items Added
            </span>
        </button>
    );
};

export default Quantity;