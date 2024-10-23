

import React from 'react';
import { Facebook, Instagram, Twitter } from 'react-feather'; // Feather Icons'dan sosyal medya ikonları

const Footer = () => {
    return (
        <footer className="w-[414px] h-[1342px] flex flex-col items-center gap-[40px]">

            {/* Brand Name */}

            <div className='bg-[#FAFAFA] w-[414px]  flex flex-col items-center gap-[20px]  p-4'>
                <h3 className="text-[24px] font-bold text-[#252B42]">Brand Name</h3>

                {/* Social Media Icons */}
                <div className="flex space-x-4">
                    <a href="#" className="flex items-center">
                        <Facebook className="text-[#1da1f2]" size={24} />
                    </a>
                    <a href="#" className="flex items-center">
                        <Instagram className="text-[#1da1f2]" size={24} />
                    </a>
                    <a href="#" className="flex items-center">
                        <Twitter className="text-[#1da1f2]" size={24} />
                    </a>
                </div>
            </div>
            {/* Links Section */}
            <div className="flex flex-col gap-4">
                {/* Başlıklar ve alt başlıklar */}
                {['Company Info', 'Legal', 'Features', 'Resources'].map((title) => (
                    <div key={title} className="flex flex-col">
                        <h4 className="text-[18px] font-bold text-[#252B42]">{title}</h4>
                        <div className="flex flex-col space-y-2">
                            {['Business and Marketing ', 'About Us ', 'We are hiring', 'Customers'].map((link) => (
                                <a key={link} href="#" className="text-[14px] text-[#737373] hover:text-[#23A6F0]">
                                    {link}
                                </a>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Get In Touch Section */}
            <div className="flex flex-col items-center">
                <h4 className="text-[18px] font-bold text-[#252B42]">Get In Touch</h4>
                <div className="flex items-center mt-2">
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="border border-gray-300 rounded-l-md p-2"
                    />
                    <button className="button-3">Subscribe</button>
                </div>
                <p className='text-[14px] text-[#737373]'> All rights reserved.</p>
            </div>

            <div className='bg-[#FAFAFA] w-[414px]  flex flex-col items-center gap-[20px]  p-4'>
                <h6 className="w-[193px] text-[14px] text-[#737373] text-center">Made With Love By Figmaland All Right Reserved</h6>
            </div>
        </footer>
    );
};

export default Footer;
