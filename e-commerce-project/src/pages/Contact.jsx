import React from 'react';
import { Twitter, Facebook, Instagram, Linkedin } from 'react-feather';

export default function Contact() {
    return (
        <div className="flex flex-col items-center justify-center bg-white text-black p-4 max-w-md mx-auto md:w-[607px] md:h-[352px] md:gap-[30px] mt-8">
            <h1 className="text-3xl font-bold mb-4 text-center">
                Get answers to all your questions.
            </h1>
            <p className="text-center mb-8 text-gray-600">
                Problems trying to resolve the conflict between the two major realms of Classical physics:
            </p>
            <button className="custom-button mb-4">
                CONTACT OUR COMPANY
            </button>
            <div className="flex space-x-4">
                <Twitter className="text-gray-500 hover:text-blue-400 cursor-pointer" size={24} />
                <Facebook className="text-gray-500 hover:text-blue-600 cursor-pointer" size={24} />
                <Instagram className="text-gray-500 hover:text-pink-500 cursor-pointer" size={24} />
                <Linkedin className="text-gray-500 hover:text-blue-700 cursor-pointer" size={24} />
            </div>
        </div>
    );
}
