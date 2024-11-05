import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductPage from '../components/ProductPage';

const ShopPage = () => {
    const { category } = useParams();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = window.innerWidth <= 414 ? 4 : 16;

    // Access products safely
    const products = useSelector(state => state.products?.products || []);

    const filteredProducts = category
        ? products.filter(product => product.category === category)
        : products;

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    const handlePageChange = (page) => setCurrentPage(page);
    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };
    const handleFirstPage = () => setCurrentPage(1);

    const displayProducts = filteredProducts.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <main className="flex-grow container mx-auto px-4 py-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center md:text-left">Shop</h2>
                <div className="mt-6 w-full">
                    <ProductPage products={displayProducts} />
                </div>

                {/* Pagination Buttons */}
                <div className="button-group mt-20 flex flex-row justify-center items-center">
                    <button onClick={handleFirstPage} disabled={currentPage === 1} className="button-first-next">First</button>
                    {[...Array(totalPages)].map((_, index) => (
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
        </div>
    );
};

export default ShopPage;
