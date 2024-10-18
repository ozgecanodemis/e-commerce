// src/components/Layout.jsx

import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className="flex-col min-h-screen bg-[#FFFFF]" style={{ width: '414px' }}>
            {/* Header */}
            <header className="flex justify-between items-center p-4 text-[#252B42]">
                <h3 className='font-bold text-[16px]'>Brand Name</h3>
                <div className="flex-col items-center space-x-4">
                    <i className="fas fa-user"></i>
                    <i className="fas fa-search"></i>
                    <i className="fas fa-shopping-cart"></i>
                    <i className="fas fa-bars"></i>
                </div>
            </header>

            {/* Navigation Menu */}
            <nav className="flex flex-col justify-center items-center h-[410px] p-4">
                <a href="#home" className="text-[#737373] text-3xl block py-2 hover:font-extralight">Home</a>
                <a href="#product" className="text-[#737373] text-3xl block py-2 hover:font-extralight">Product</a>
                <a href="#pricing" className="text-[#737373] text-3xl block py-2 hover:font-extralight">Pricing</a>
                <a href="#contact" className="text-[#737373] text-3xl block py-2 hover:font-extralight">Contact</a>
            </nav>

            {/* Ana İçerik */}
            <main className="flex-grow">
                {children}
            </main>

            {/* Footer */}
            <footer className="text-white p-4 text-center bg-gray-800">
                Footer Content
            </footer>
        </div>
    );
};

export default Layout;
