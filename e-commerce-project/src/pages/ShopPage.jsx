import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams, useHistory, useLocation } from 'react-router-dom';
import { fetchCategories, fetchProducts } from '../store/actions/authActions';
import ProductPage from '../components/ProductPage';
import Brands from '../components/Brands';
import Spinner from '../components/Spinner';

const ShopPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const { gender, category, categoryId } = useParams();

    // Redux state selectors
    const categories = useSelector((state) => state.product.categories);
    const products = useSelector((state) => state.product.productList);
    const total = useSelector((state) => state.product.total);
    const fetchState = useSelector((state) => state.product.fetchState);

    // Local states
    const [currentPage, setCurrentPage] = useState(1);
    const [sort, setSort] = useState('');
    const [filter, setFilter] = useState('');
    const [filterInput, setFilterInput] = useState('');
    const itemsPerPage = window.innerWidth <= 414 ? 4 : 16;
    const totalPages = Math.ceil(total / itemsPerPage);

    // Function to fetch products
    const loadProducts = useCallback(() => {
        const queryParams = new URLSearchParams(location.search);
        const categoryParam = queryParams.get('category') || categoryId || '';
        const sortParam = queryParams.get('sort') || '';
        const filterParam = queryParams.get('filter') || '';
        const limit = itemsPerPage;
        const offset = (currentPage - 1) * limit;

        setSort(sortParam);
        setFilter(filterParam);
        setFilterInput(filterParam);

        let queryString = `limit=${limit}&offset=${offset}`;
        if (categoryParam) queryString += `&category=${categoryParam}`;
        if (sortParam) queryString += `&sort=${sortParam}`;
        if (filterParam) queryString += `&filter=${filterParam}`;

        dispatch(fetchProducts(queryString));
    }, [dispatch, location.search, currentPage, itemsPerPage, categoryId]);

    // Fetch categories on mount
    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    // Fetch products when dependencies change
    useEffect(() => {
        loadProducts();
    }, [loadProducts]);

    // Update URL with query parameters
    const updateUrl = useCallback(
        (params) => {
            const queryParams = new URLSearchParams(location.search);
            Object.entries(params).forEach(([key, value]) => {
                if (value) {
                    queryParams.set(key, value);
                } else {
                    queryParams.delete(key);
                }
            });
            history.push(`${location.pathname}?${queryParams.toString()}`);
        },
        [history, location.search]
    );

    // Handle page changes
    const handlePageChange = (page) => {
        setCurrentPage(page);
        updateUrl({ page });
    };

    const handleSortChange = (e) => {
        const newSort = e.target.value;
        setSort(newSort);
        updateUrl({ sort: newSort, page: 1 });
    };

    const handleFilterInputChange = (e) => {
        setFilterInput(e.target.value);
    };

    const handleFilterApply = () => {
        setFilter(filterInput);
        updateUrl({ filter: filterInput, page: 1 });
    };

    const handleCategoryClick = (categoryGender, categoryTitle, clickedCategoryId) => {
        const formattedTitle = categoryTitle.toLowerCase().replace(/\s+/g, '-');
        updateUrl({ category: clickedCategoryId });
        history.push(`/shop/${categoryGender}/${formattedTitle}/${clickedCategoryId}`);
    };

    const topCategories = categories
        .filter((category) => category && category.title && category.rating)
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 5);

    if (fetchState === 'loading') {
        return <Spinner />;
    }

    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Categories Section */}
            <div className="flex flex-col md:flex-row md:flex-wrap lg:grid lg:grid-cols-5 gap-4 m-10">
                {topCategories.map((category) => (
                    <div key={category.id} className="w-full lg:w-auto mb-4">
                        <div className="relative pb-[100%]">
                            <div className="absolute inset-0 bg-gray-200 overflow-hidden shadow-md">
                                <img src={category.img} alt={category.title} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center">
                                    <button
                                        onClick={() => handleCategoryClick(category.gender, category.title, category.id)}
                                        className="text-white text-lg font-bold text-center hover:underline"
                                    >
                                        {category.title}
                                    </button>
                                    <p className="text-white text-sm text-center">
                                        Rating: {category.rating.toFixed(1)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Main Section */}
            <main className="flex-grow container mx-auto px-4 py-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center md:text-left">
                    {gender && category
                        ? `${gender.charAt(0).toUpperCase() + gender.slice(1)} ${category}`
                        : 'Shop'}
                </h2>
                <p className="text-gray-600 mb-8 text-center md:text-left">
                    Showing {products.length} of {total} results
                </p>

                {/* Sort and Filter Controls */}
                <div className="flex flex-col md:flex-row justify-between mb-8">
                    <div className="flex items-center space-x-4">
                        <input
                            type="text"
                            placeholder="Filter products..."
                            value={filterInput}
                            onChange={handleFilterInputChange}
                            className="p-2 border rounded"
                        />
                        <button
                            onClick={handleFilterApply}
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                        >
                            Filter
                        </button>
                        <select
                            className="p-2 border rounded"
                            onChange={handleSortChange}
                            value={sort}
                        >
                            <option value="">Sort by Popularity</option>
                            <option value="price:asc">Price: Low to High</option>
                            <option value="price:desc">Price: High to Low</option>
                            <option value="rating:asc">Rating: Low to High</option>
                            <option value="rating:desc">Rating: High to Low</option>
                        </select>
                    </div>
                </div>

                {/* Products Section */}
                <ProductPage />

                {/* Pagination */}
                <div className="button-group mt-20 flex flex-row justify-center items-center">
                    {/* First Page Button */}
                    <button
                        onClick={() => handlePageChange(1)}
                        disabled={currentPage === 1}
                        className={`button-first-next ${currentPage === 1 ? 'disabled' : ''}`}
                    >
                        First
                    </button>

                    {/* Previous Page */}
                    {currentPage > 1 && (
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            className="button-page-number"
                        >
                            {currentPage - 1}
                        </button>
                    )}

                    {/* Current Page */}
                    <button className="button-page-number active">{currentPage}</button>

                    {/* Next Page */}
                    {currentPage < totalPages && (
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            className="button-page-number"
                        >
                            {currentPage + 1}
                        </button>
                    )}

                    {/* Last Page Button */}
                    <button
                        onClick={() => handlePageChange(totalPages)}
                        disabled={currentPage === totalPages}
                        className={`button-first-next ${currentPage === totalPages ? 'disabled' : ''}`}
                    >
                        Last
                    </button>
                </div>


            </main>
            <Brands />
        </div>
    );
};

export default ShopPage;
