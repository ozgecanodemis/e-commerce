import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faHeart, faUser, faTimes, faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { fetchCategories } from '../store/reducers/categoriesSlice';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categories.items);
    const categoriesStatus = useSelector((state) => state.categories.status);

    useEffect(() => {
        if (categoriesStatus === 'idle') {
            dispatch(fetchCategories());
        }
    }, [categoriesStatus, dispatch]);

    const womenCategories = categories.filter((cat) => cat.gender === 'k');
    const menCategories = categories.filter((cat) => cat.gender === 'e');

    const renderCategoryDropdown = () => {
        if (categoriesStatus === 'loading') {
            return <div className="p-4">Loading categories...</div>;
        }

        return (
            <div className="absolute left-0 mt-2 w-96 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                <div className="flex gap-4">
                    <div className="w-1/2 py-1 px-2">
                        <p className="px-2 py-2 text-sm font-bold text-gray-700 mb-4">Women</p>
                        {womenCategories.map((category) => (
                            <Link
                                key={category.id}
                                to={`/shop/k/${category.slug}`}
                                className="block px-2 mb-4 text-sm font-semibold text-[#737373] hover:bg-gray-100"
                                onClick={() => setIsCategoryDropdownOpen(false)}
                            >
                                {category.name}
                            </Link>
                        ))}
                    </div>
                    <div className="w-1/2 py-1 px-2 border-l border-gray-200">
                        <p className="px-2 py-2 text-sm font-bold text-gray-700 mb-4">Men</p>
                        {menCategories.map((category) => (
                            <Link
                                key={category.id}
                                to={`/shop/e/${category.slug}`}
                                className="block px-2 mb-4 text-sm font-semibold text-[#737373] hover:bg-gray-100"
                                onClick={() => setIsCategoryDropdownOpen(false)}
                            >
                                {category.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <header className="bg-white text-black md:bg-[#23856D] md:text-white">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold">Bandage</Link>
                <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:flex space-x-6`}>
                    <Link to="/" className="hover:text-gray-300">Home</Link>
                    <Link to="/shop" className="hover:text-gray-300">Shop</Link>
                    <div className="relative group">
                        <button
                            className="hover:text-gray-300 flex items-center"
                            onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
                            aria-haspopup="true"
                            aria-expanded={isCategoryDropdownOpen}
                        >
                            Categories <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
                        </button>
                        {isCategoryDropdownOpen && renderCategoryDropdown()}
                    </div>
                    <Link to="/about" className="hover:text-gray-300">About</Link>
                    <Link to="/blog" className="hover:text-gray-300">Blog</Link>
                    <Link to="/contact" className="hover:text-gray-300">Contact</Link>
                    <Link to="/pages" className="hover:text-gray-300">Pages</Link>
                </nav>
                <div className={`${isMenuOpen ? 'block' : 'hidden'} md:flex items-center space-x-4`}>
                    <span className="flex items-center hover:text-gray-300">
                        <FontAwesomeIcon icon={faUser} className="mr-2" />
                        <Link to="/login" className="hover:text-gray-300">Login</Link>
                        /
                        <Link to="/signup" className="hover:text-gray-300">Register</Link>
                    </span>
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
                <button
                    className="md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
                </button>
            </div>
        </header>
    );
};

export default Header;
