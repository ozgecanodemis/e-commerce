import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ProductPage from '../components/ProductPage';
import dw1 from '../assets/dw-1.png';
import dw2 from '../assets/dw-2.png';
import dw3 from '../assets/dw-3.png';
import dw4 from '../assets/dw-4.png';
import dw5 from '../assets/dw-5.png';
import dw6 from '../assets/dw-6.png';

const products = [
    { id: 1, name: 'Graphic Design', price: '$16.48', colors: ['sky', 'green', 'orange'], category: 'design' },
    { id: 2, name: 'Web Development', price: '$22.99', colors: ['blue', 'purple', 'red'], category: 'development' },
    // Add more products with categories as needed
];

const ShopPage = () => {
    const { category } = useParams(); // Get the category from the URL
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = window.innerWidth <= 414 ? 4 : 16;

    // Filter products based on the selected category
    const filteredProducts = category ?
        products.filter(product => product.category === category) :
        products;

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    const handlePageChange = (page) => setCurrentPage(page);
    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };
    const handleFirstPage = () => setCurrentPage(1);

    const displayProducts = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <main className="flex-grow container mx-auto px-4 py-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center md:text-left">Shop</h2>
                <p className="text-gray-600 mb-8 text-center md:text-left">Showing {displayProducts.length} of {filteredProducts.length} results</p>

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

            <div className="flex flex-col items-center gap-6 bg-gray-200 py-12 w-full lg:px-12 md:flex-row md:flex-wrap md:justify-center">
                {[dw1, dw2, dw3, dw4, dw5, dw6].map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        className="w-[120px] md:w-[153px] h-auto object-contain"
                        alt={`Brand ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ShopPage;
