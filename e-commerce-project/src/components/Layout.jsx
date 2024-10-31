import React, { useState, useEffect } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch, faShoppingCart, faHeart, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { logoutUser } from '../store/actions/authActions';
import md5 from 'md5';

const Layout = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const user = useSelector(state => state.user?.user);
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    const handleLogout = () => {
        dispatch(logoutUser());
        history.push('/');
    };

    const getGravatarUrl = (email) => {
        const hash = md5(email.trim().toLowerCase());
        return `https://www.gravatar.com/avatar/${hash}?d=mp`;
    };

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
                        {user ? (
                            <div className="flex items-center">
                                <img
                                    src={getGravatarUrl(user.email)}
                                    alt={user.name}
                                    className="w-8 h-8 rounded-full mr-2"
                                />
                                <span>{user.name}</span>
                                <button onClick={handleLogout} className="ml-2 text-sm">Logout</button>
                            </div>
                        ) : (
                            <div className="flex items-center">
                                <FontAwesomeIcon icon={faUser} className="mr-2" />
                                <Link to="/login"><span>Login</span></Link>
                                /
                                <Link to="/signup"><span>Register</span></Link>
                            </div>
                        )}
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
                        {user ? (
                            <div className="flex items-center py-2">
                                <img
                                    src={getGravatarUrl(user.email)}
                                    alt={user.name}
                                    className="w-8 h-8 rounded-full mr-2"
                                />
                                <span>{user.name}</span>
                                <button onClick={handleLogout} className="ml-2 text-sm">Logout</button>
                            </div>
                        ) : (
                            <div className="flex items-center py-2">
                                <FontAwesomeIcon icon={faUser} className="mr-2" />
                                <Link to="/login"><span>Login</span></Link>
                                /
                                <Link to="/signup"><span>Register</span></Link>
                            </div>
                        )}
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
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                            <a href="#" className="text-blue-500 hover:text-blue-700">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="#" className="text-blue-500 hover:text-blue-700">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                        {/* Footer Links Here */}
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
