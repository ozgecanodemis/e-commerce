import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch, faShoppingCart, faHeart, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Layout = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-white text-black md:bg-[#23856D] md:text-white">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <Link to="/" className="text-2xl font-bold">Bandage</Link>
                    <nav className="hidden md:flex space-x-6">
                        <Link to="/" className="hover:text-gray-300">Home</Link>
                        <Link to="/shop" className="hover:text-gray-300">Shop</Link>
                        <Link to="/about" className="hover:text-gray-300">About</Link>
                        <Link to="/blog" className="hover:text-gray-300">Blog</Link>
                        <Link to="/contact" className="hover:text-gray-300">Contact</Link>
                        <Link to="/pages" className="hover:text-gray-300">Pages</Link>
                        <Link to="/team" className="hover:text-gray-300">Team</Link>
                    </nav>
                    <div className="hidden md:flex items-center space-x-4">
                        <Link to="/signup">
                            <div className="flex items-center">
                                <FontAwesomeIcon icon={faUser} className="mr-2" />
                                <span>Login / Register</span>
                            </div>
                        </Link>
                        <FontAwesomeIcon icon={faSearch} />
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                            <span>1</span>
                        </div>
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faHeart} className="mr-2" />
                            <span>1</span>
                        </div>
                    </div>
                    <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
                    </button>
                </div>
            </header>

            {isMenuOpen && (
                <div className="md:hidden bg-white">
                    <nav className="flex flex-col items-center py-4">
                        <Link to="/" className="py-2">Home</Link>
                        <Link to="/shop" className="py-2">Shop</Link>
                        <Link to="/about" className="py-2">About</Link>
                        <Link to="/blog" className="py-2">Blog</Link>
                        <Link to="/contact" className="py-2">Contact</Link>
                        <Link to="/pages" className="py-2">Pages</Link>
                        <Link to="/team" className="py-2">Team</Link>
                    </nav>
                    <div className="flex flex-col items-center py-4">
                        <div className="flex items-center py-2">
                            <FontAwesomeIcon icon={faUser} className="mr-2" />
                            <span>Login / Register</span>
                        </div>
                        <FontAwesomeIcon icon={faSearch} className="py-2" />
                        <div className="flex items-center py-2">
                            <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                            <span>1</span>
                        </div>
                        <div className="flex items-center py-2">
                            <FontAwesomeIcon icon={faHeart} className="mr-2" />
                            <span>1</span>
                        </div>
                    </div>
                </div>
            )}

            <main className="flex-grow">
                {children}
            </main>

            <footer className="bg-[#FAFAFA] text-black">
                <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                        <h3 className="text-2xl font-bold mb-4 md:mb-0">Bandage</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-blue-500 hover:text-blue-700">
                                <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                            </a>
                            <a href="#" className="text-blue-500 hover:text-blue-700">
                                <FontAwesomeIcon icon={['fab', 'instagram']} />
                            </a>
                            <a href="#" className="text-blue-500 hover:text-blue-700">
                                <FontAwesomeIcon icon={['fab', 'twitter']} />
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                        <div>
                            <h4 className="font-bold mb-4">Company Info</h4>
                            <ul className="space-y-2">
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/carrier">Carrier</Link></li>
                                <li><Link to="/hiring">We are hiring</Link></li>
                                <li><Link to="/blog">Blog</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Legal</h4>
                            <ul className="space-y-2">
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/carrier">Carrier</Link></li>
                                <li><Link to="/hiring">We are hiring</Link></li>
                                <li><Link to="/blog">Blog</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Features</h4>
                            <ul className="space-y-2">
                                <li><Link to="/business">Business Marketing</Link></li>
                                <li><Link to="/analytics">User Analytics</Link></li>
                                <li><Link to="/chat">Live Chat</Link></li>
                                <li><Link to="/support">Unlimited Support</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Resources</h4>
                            <ul className="space-y-2">
                                <li><Link to="/ios">IOS & Android</Link></li>
                                <li><Link to="/demo">Watch a Demo</Link></li>
                                <li><Link to="/customers">Customers</Link></li>
                                <li><Link to="/api">API</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Get In Touch</h4>
                            <form className="flex flex-col space-y-2">
                                <input type="email" placeholder="Your Email" className="p-2 border rounded" />
                                <button type="submit" className="button-3">Subscribe</button>
                            </form>
                        </div>
                    </div>
                    <div className="mt-8 text-center">
                        <p>&copy; 2023 Bandage. All Rights Reserved</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
