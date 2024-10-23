import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { User, Search, ShoppingCart, Menu, Heart } from 'react-feather';
import Footer from './Footer';

const Layout = ({ children, location }) => {
    const isShopPage = location.pathname === '/shop';

    return (
        <div className="flex-col min-h-screen bg-[#FFFFF]" style={{ width: '414px' }}>
            {/* Header */}
            <header className="flex justify-between items-center p-4 text-[#252B42]">
                <h3 className='font-bold text-[16px]'>Brand Name</h3>
                <div className="flex space-x-4">
                    <Menu className="text-[#252B42]" />
                    {/* Sadece ana sayfada ikonlar yanyana */}
                    {location.pathname === '/' && (
                        <>
                            <User className="text-[#252B42]" />
                            <Search className="text-[#252B42]" />
                            <ShoppingCart className="text-[#252B42]" />
                        </>
                    )}
                </div>
            </header>

            {/* Navigation Menu */}
            <nav className="flex flex-col justify-center items-center h-[410px] p-2">
                <Link to="/" className="text-[#737373] text-3xl block py-2 hover:font-extralight">Home</Link>
                <Link to="/shop" className="text-[#737373] text-3xl block py-2 hover:font-extralight">Shop</Link>
                <Link to="#pricing" className="text-[#737373] text-3xl block py-2 hover:font-extralight">Pricing</Link>
                <Link to="#contact" className="text-[#737373] text-3xl block py-2 hover:font-extralight">Contact</Link>
            </nav>

            {/* ShopPage ikonu */}
            {isShopPage && (
                <div className="flex flex-col items-center space-y-4 py-4">
                    <div className="flex items-center space-x-2">
                        <User className="text-[#252B42]" />
                        <span className="text-[#252B42] text-xl">Login/Register</span>
                    </div>
                    <Search className="text-[#252B42]" />
                    <ShoppingCart className="text-[#252B42]" />
                    <Heart className="text-[#252B42]" />
                </div>
            )}

            {/* Ana İçerik */}
            <main className="flex-grow">
                {children}
            </main>

            {/* Footer */}
            {isShopPage && <Footer />}
        </div>
    );
};

export default withRouter(Layout);
