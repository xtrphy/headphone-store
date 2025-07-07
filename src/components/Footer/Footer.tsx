import React from 'react';
import { FaGithub, FaTelegram, FaVk } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';

const Footer = () => {
    return (
        <footer className='px-[186px] py-[129px] w-full flex flex-col'>

            <div className='flex flex-col items-end gap-10 mb-[40px]'>
                <div className='flex items-center gap-10'>
                    <p className='text-[22px] font-medium -tracking-[0.3px]'>Ready to get started?</p>
                    <button className='bg-main-green text-white font-semibold px-[41px] py-[14px] cursor-pointer hover:bg-hover-green transition-colors duration-150'>Get started</button>
                </div>
                <hr className='w-full border-b-1 bg-[#111]' />
            </div>

            <div className='flex justify-around mb-[70px]'>

                <div className='flex flex-col gap-[30px]'>
                    <p className='text-[22px] w-46 -tracking-[0.3px] font-medium'>Subscribe to our Website</p>

                    <form className="flex items-center rounded-lg">

                        <input
                            id='email'
                            name='email'
                            autoComplete='email'
                            type="text"
                            className="w-72 placeholder:text-[#111] p-4 rounded-lg placeholder:text-[15px] placeholder:opacity-50 outline-none"
                            placeholder="Email address"
                        />

                        <button type='submit' className="flex items-center justify-center bg-main-green hover:bg-hover-green transition-colors duration-150 p-[9px] h-[50px] w-[50px] rounded-md text-white cursor-pointer">
                            <IoIosArrowForward size={20} color='#fff' />
                        </button>

                    </form>

                </div>

                <div className='flex flex-col gap-[20px] justify-start text-[15px]'>
                    <p className='text-main-green text-[17px] font-medium'>Services</p>
                    <a href='#'>Email Marketing</a>
                    <a href='#'>Campaigns</a>
                    <a href='#'>Branding</a>
                    <a href='#'>Offline</a>
                </div>
                <div className='flex flex-col gap-[20px] justify-start'>
                    <p className='text-main-green text-[17px] font-medium'>About</p>
                    <a href='#'>Our Story</a>
                    <a href='#'>Benefits</a>
                    <a href='#'>Team</a>
                    <a href='#'>Careers</a>
                </div>
                <div className='flex flex-col gap-[20px] justify-start'>
                    <p className='text-main-green text-[17px] font-medium'>Help</p>
                    <a href='#'>FAQs</a>
                    <a href='#'>Contact Us</a>
                </div>
            </div>

            <div className='flex justify-between items-center'>
                <div className='flex gap-10'>
                    <a href="#">Terms & Conditions</a>
                    <a href="#">Privacy Policy</a>
                </div>
                <div className='flex items-center gap-8'>
                    <a href="https://github.com/xtrphy" target='_blank'><FaGithub size={25} /></a>
                    <a href="https://t.me/xtrphy1" target='_blank'><FaTelegram size={25} /></a>
                    <a href="https://vk.com/xtrphyo" target='_blank'><FaVk size={25} /></a>
                </div>
            </div>

        </footer>
    );
};

export default Footer;