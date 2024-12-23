import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faTimes, faBars, faSearch, faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import { fetchCategories } from '../store/actions/authActions';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.product.categories);
    const user = useSelector(state => state.client.user);
    const location = useLocation();

    useEffect(() => {
        dispatch(fetchCategories());

    }, [dispatch]);

    useEffect(() => {
        setIsMenuOpen(false);
        setIsCategoryDropdownOpen(false);
    }, [location]);

    const renderCategoryDropdown = () => {
        if ("load" === 'loading') {
            return <div className="p-4">Loading categories...</div>;
        }

        // Filter categories by gender
        const womenCategories = categories.filter(cat => cat.code.split(":")[0] === 'k');
        const menCategories = categories.filter(cat => cat.code.split(":")[0] === 'e');

        return (
            <div className="absolute left-0 mt-2 w-[200px] bg-white border border-gray-200 shadow-lg z-50">
                <div className="py-2">
                    <div className="px-4 py-2 font-semibold text-gray-900 bg-gray-50">Kadın</div>
                    {womenCategories.map((category) => (
                        <Link
                            key={category.id}
                            to={`/shop/kadin/${category.code.split(":")[1].toLowerCase()}/${category.id}`}  // Ensure this matches the desired route format
                            className="block px-4 py-2 text-sm text-gray-400 hover:bg-gray-100"
                            onClick={() => setIsCategoryDropdownOpen(false)}
                        >
                            {category.title}
                        </Link>
                    ))}
                    <div className="px-4 py-2 font-semibold text-gray-900 bg-gray-50 mt-2">Erkek</div>
                    {menCategories.map((category) => (
                        <Link
                            key={`men-${category.id}`}
                            to={`/shop/erkek/${category.code.split(":")[1].toLowerCase()}/${category.id}`}
                            className="block px-4 py-2 text-sm text-gray-400 hover:bg-gray-100"
                            onClick={() => setIsCategoryDropdownOpen(false)}
                        >
                            {category.title}
                        </Link>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <header className="bg-white text-black md:bg-[#23856D] md:text-white">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold">Bandage</Link>
                <nav className="hidden md:flex space-x-6">
                    <Link to="/" className="hover:text-[#252B42]">Home</Link>
                    <Link to="/shop" className="hover:text-[#252B42]">Shop</Link>
                    <div className="relative">
                        <button
                            className="hover:text-[#252B42] flex items-center gap-1"
                            onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
                            aria-haspopup="true"
                            aria-expanded={isCategoryDropdownOpen}
                        >
                            Categories
                            <FontAwesomeIcon icon={faChevronDown} className="text-xs" />
                        </button>
                        {isCategoryDropdownOpen && renderCategoryDropdown()}
                    </div>
                    <Link to="/about" className="hover:text-[#252B42]">About</Link>
                    <Link to="/blog" className="hover:text-[#252B42]">Blog</Link>
                    <Link to="/contact" className="hover:text-[#252B42]">Contact</Link>
                    <Link to="/team" className="hover:text-[#252B42]">Team</Link>


                </nav>

                <div className=" hidden md:flex space-x-0 flex items-center py-2">
                    <div className="hidden md:flex items-center space-x-4 px-2">
                        {user.name ? (
                            <div className='flex items-center gap-2'>
                                <img
                                    src={user.avatar}
                                    alt={user.name}
                                    className="w-8 h-8 rounded-full object-cover border-2 border-gray-200"
                                />
                                <span className=" text-sm font-medium">
                                    {user.name}
                                </span>
                            </div>
                        ) : (
                            <Link to="/login" className=" hover:text-[#252B42]">Login</Link>
                        )}
                    </div>
                    <span className=" p-2 hover:text-[#252B42]"> / </span>
                    <Link to="/signup" className="hover:text-[#252B42]">Register</Link>

                    <FontAwesomeIcon icon={faSearch} className="py-2 px-2" />
                    <div className="flex items-center py-2 px-2">
                        <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                        <span>1</span>
                    </div>
                    <div className="flex items-center py-2 px-2">
                        <FontAwesomeIcon icon={faHeart} className="mr-2" />
                        <span>1</span>
                    </div>
                </div>


                <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
                </button>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-white">
                    <nav className="flex flex-col items-center py-4">
                        <Link to="/" className="py-2">Home</Link>
                        <Link to="/shop" className="py-2">Shop</Link>
                        <Link to="/about" className="py-2">About</Link>
                        <Link to="/blog" className="py-2">Blog</Link>
                        <Link to="/contact" className="py-2">Contact</Link>
                        <Link to="/team" className="py-2">Team</Link>
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
                    </nav>

                </div>
            )}
        </header>
    );
}