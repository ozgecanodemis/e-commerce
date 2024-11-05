import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faHeart, faUser, faTimes, faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { fetchCategories } from '../store/reducers/categoriesSlice';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categories.items);
    const categoriesStatus = useSelector((state) => state.categories.status);
    const user = useSelector(state => state.client.user);
    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
        if (categoriesStatus === 'idle') {
            dispatch(fetchCategories());
        }
    }, [categoriesStatus, dispatch]);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    const renderCategoryDropdown = () => {
        if (categoriesStatus === 'loading') {
            return <div className="p-4">Loading categories...</div>;
        }

        return (
            <div className="absolute left-0 mt-2 w-96 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                <div className="flex gap-4">
                    <div className="w-full py-1 px-2">
                        <p className="px-2 py-2 text-sm font-bold text-gray-700 mb-4">Categories</p>
                        {categories.map((category) => (
                            <Link
                                key={category}
                                to={`/shop/${category}`} // Kategorinin slug'ını kullan
                                className="block px-2 mb-4 text-sm font-semibold text-[#737373] hover:bg-gray-100"
                                onClick={() => setIsCategoryDropdownOpen(false)}
                            >
                                {category}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        );
    };

    /* <div className="relative group ">
                        <button
                            className="hover:text-gray-300 flex items-center"
                            onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
                            aria-haspopup="true"
                            aria-expanded={isCategoryDropdownOpen}
                        >
                            <FontAwesomeIcon icon={faChevronDown} className="m-1" />
                        </button>
                        {isCategoryDropdownOpen && renderCategoryDropdown()}
                    </div>*/

    return (
        <header className="bg-white text-black md:bg-[#23856D] md:text-white">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold">Bandage</Link>
                <nav className="hidden md:flex space-x-6">
                    <Link to="/" className="hover:text-gray-300">Home</Link>
                    <Link to="/shop" className="hover:text-gray-300">Shop</Link>
                    <div className="relative group ">
                        <button
                            className="hover:text-gray-300 flex items-center"
                            onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
                            aria-haspopup="true"
                            aria-expanded={isCategoryDropdownOpen}
                        >
                            <FontAwesomeIcon icon={faChevronDown} className="m-1" />
                        </button>
                        {isCategoryDropdownOpen && renderCategoryDropdown()}
                    </div>
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
    );
};

export default Header;
