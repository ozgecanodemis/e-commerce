import React, { useState, useEffect } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch, faShoppingCart, faHeart, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';

const Layout = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const user = useSelector(state => state.client.user);
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);


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
                        {user.name && user.avatar &&
                            <div className='flex items-center gap-2'>
                                <img
                                    src={user.avatar}
                                    alt={user.name}
                                    className="w-8 h-8 rounded-full object-cover border-2 border-gray-200"
                                />
                                <span className="text-white text-sm font-medium">
                                    {user.name}
                                </span>
                            </div>}
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
            <Footer />

        </div>
    );
};

export default Layout;
