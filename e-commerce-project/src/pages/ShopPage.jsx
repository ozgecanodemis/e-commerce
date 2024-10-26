import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductPage from '../components/ProductPage';
import dw1 from '../assets/dw-1.png';
import dw2 from '../assets/dw-2.png';
import dw3 from '../assets/dw-3.png';
import dw4 from '../assets/dw-4.png';
import dw5 from '../assets/dw-5.png';
import dw6 from '../assets/dw-6.png';

const products = [
    { id: 1, name: 'Graphic Design', price: '$16.48', colors: ['sky', 'green', 'orange'] },
    { id: 2, name: 'Graphic Design', price: '$16.48', colors: ['sky', 'green', 'orange'] },

];

const ShopPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = window.innerWidth <= 414 ? 4 : 16;
    const totalPages = Math.ceil(products.length / itemsPerPage);

    const handlePageChange = (page) => setCurrentPage(page);
    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };
    const handleFirstPage = () => setCurrentPage(1);

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center limited-width">
                {[...Array(5)].map((_, index) => (
                    <div key={index} className="w-full md:w-1/3 lg:w-1/4 xl:w-1/5 md:px-1 mb-4">
                        <div className="relative w-4/5 md:w-10/12 mx-auto pb-[80%] md:pb-[70%]">
                            <div className="absolute inset-0 bg-gray-200 overflow-hidden shadow-md m-4">
                                <img
                                    src={`https://picsum.photos/400/300?random=${Math.floor(Math.random() * 1000)}`}
                                    className="w-full h-full object-cover"
                                    alt="Product"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center">
                                    <Link to="/shop/k/ayakkabi">
                                        <h2 className="text-white text-lg font-bold text-center">Cloth</h2>
                                    </Link>
                                    <p className="text-white text-sm text-center">
                                        "Rating: "4.9" $0
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                <main className="flex-grow container mx-auto px-4 py-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center md:text-left">Shop</h2>
                    <p className="text-gray-600 mb-8 text-center md:text-left">Showing all {products.length} results</p>

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
                        <ProductPage limit={itemsPerPage} page={currentPage} />
                    </div>

                    {/* Sayfa Seçim Butonları */}
                    <div className="button-group mt-20 flex flex-row justify-center items-center">
                        <button onClick={handleFirstPage} disabled={currentPage === 1} className="button-first-next">First</button>

                        {/* 1, 2, 3 butonları */}
                        {[1, 2, 3].map((pageNumber) => (
                            <button
                                key={pageNumber}
                                onClick={() => handlePageChange(pageNumber)}
                                className={`button-page-number ${currentPage === pageNumber ? 'active' : ''}`}
                            >
                                {pageNumber}
                            </button>
                        ))}

                        <button onClick={handleNextPage} disabled={currentPage === totalPages} className="button-first-next">Next</button>
                    </div>
                </main>
                <div className="flex flex-col justify-center items-center md:flex-row md:justify-evenly gap-10 bg-gray-200 py-12 w-auto">
                    {[dw1, dw2, dw3, dw4, dw5, dw6].map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            className="w-[153px] h-auto object-contain"
                            alt={`Brand ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ShopPage;
