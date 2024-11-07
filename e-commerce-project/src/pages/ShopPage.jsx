import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchCategories, fetchProducts } from '../store/actions/productActions';
import ProductPage from '../components/ProductPage';
import Spinner from '../components/Spinner'; // You'll need to create this component
import CategoryList from '../components/CategoryList';

const ShopPage = () => {
    const dispatch = useDispatch();
    const { gender, category } = useParams();
    const categories = useSelector(state => state.product.categories);
    const products = useSelector(state => state.product.productList);
    const total = useSelector(state => state.product.total);
    const fetchState = useSelector(state => state.product.fetchState);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = window.innerWidth <= 414 ? 4 : 16;
    const totalPages = Math.ceil(total / itemsPerPage);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    useEffect(() => {
        if (gender && category) {
            dispatch(fetchProducts(`${gender}:${category}`, itemsPerPage, (currentPage - 1) * itemsPerPage));
        } else {
            dispatch(fetchProducts("", itemsPerPage, (currentPage - 1) * itemsPerPage));
        }
    }, [dispatch, gender, category, currentPage, itemsPerPage]);

    const handlePageChange = (page) => setCurrentPage(page);

    const handleFirstPage = () => setCurrentPage(1);

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const topCategories = categories
        .filter(category => category && category.title && category.rating)
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 5);

    if (fetchState === "loading") {
        return <Spinner />;
    }

    return (
        <div className="flex flex-col min-h-screen bg-white">

            <main className="flex-grow container mx-auto px-4 py-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center md:text-left">Shop</h2>
                <CategoryList />

                <div className="flex flex-col md:flex-row justify-between mb-8">
                    <div className="flex items-center justify-center md:justify-start space-x-4 mb-4 md:mb-0">
                        <span>Views:</span>
                        <button className="p-2 border rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-grid h-5 w-5">
                                <rect width="7" height="7" x="3" y="3" rx="1"></rect>
                                <rect width="7" height="7" x="14" y="3" rx="1"></rect>
                                <rect width="7" height="7" x="14" y="14" rx="1"></rect>
                                <rect width="7" height="7" x="3" y="14" rx="1"></rect>
                            </svg>
                        </button>
                        <button className="p-2 border rounded">
                            <i className="fa-solid fa-list text-muted-foreground"></i>
                        </button>
                    </div>
                    <div className="flex items-center justify-center md:justify-end space-x-4">
                        <select className="p-2 border rounded w-[141px]">
                            <option>Popularity</option>
                            <option>Price</option>
                        </select>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">Filter</button>
                    </div>
                </div>
                <div className="mt-6 w-full">
                    <ProductPage products={products} />
                </div>

                {/* Pagination */}
                <div className="button-group mt-20 flex flex-row justify-center items-center">
                    <button onClick={handleFirstPage} disabled={currentPage === 1} className="button-first-next">First</button>

                    {[...Array(Math.min(3, totalPages))].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handlePageChange(index + 1)}
                            className={`button-page-number ${currentPage === index + 1 ? 'active' : ''}`}
                        >
                            {index + 1}
                        </button>
                    ))}

                    <button onClick={handleNextPage} disabled={currentPage === totalPages} className="button-first-next">Next</button>
                </div>
            </main>

        </div >
    );
};

export default ShopPage;