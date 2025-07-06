import { UserRoundIcon } from 'lucide-react';
import React from 'react';

const LoginSign = () => {
    return (
        <button className='w-[247px] h-[60px] flex items-center justify-center gap-4 bg-main-green hover:bg-hover-green transition-colors duration-150 text-white rounded-4xl cursor-pointer'>
            <UserRoundIcon size={24} />
            <span>Login or Sign Up</span>
        </button>
    );
};

export default LoginSign;