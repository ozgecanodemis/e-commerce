import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchCategories, fetchProducts } from '../store/actions/productActions';
import ProductPage from '../components/ProductPage';
import Brands from '../components/Brands';
import Spinner from '../components/Spinner'; // You'll need to create this component

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
            <div className="flex flex-wrap justify-center gap-4 m-10">
                {topCategories.map((category) => (
                    <div key={category.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
                        <div className="relative pb-[100%]">
                            <div className="absolute inset-0 bg-gray-200 overflow-hidden shadow-md">
                                <img src={category.img} alt={category.title} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center">
                                    <Link to={`/shop/${category.gender}/${category.title.toLowerCase()}`}>
                                        <h2 className="text-white text-lg font-bold text-center">{category.title}</h2>
                                    </Link>
                                    <p className="text-white text-sm text-center">Rating: {category.rating.toFixed(1)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <main className="flex-grow container mx-auto px-4 py-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center md:text-left">Shop</h2>
                <p className="text-gray-600 mb-8 text-center md:text-left">Showing {products.length} of {total} results</p>

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
            <Brands />
        </div>
    );
};

export default ShopPage;