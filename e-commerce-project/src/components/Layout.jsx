// src/components/Layout.jsx

import React from 'react';
import { User, Search, ShoppingCart, Menu } from 'react-feather'; // Feather ikonlarını import ediyoruz

const Layout = ({ children }) => {
    return (
        <div className="flex-col min-h-screen bg-[#FFFFF]" style={{ width: '414px' }}>
            {/* Header */}
            <header className="flex justify-between items-center p-4 text-[#252B42]">
                <h3 className='font-bold text-[16px]'>Brand Name</h3>
                <div className="flex space-x-4"> {/* İkonlar için flex ve space-x-4 */}
                    <User className="text-[#252B42]" />
                    <Search className="text-[#252B42]" />
                    <ShoppingCart className="text-[#252B42]" />
                    <Menu className="text-[#252B42]" />
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

        </div>
    );
};

export default Layout;
