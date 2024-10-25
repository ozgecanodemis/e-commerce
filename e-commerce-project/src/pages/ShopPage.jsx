import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductPage from '../components/ProductPage';
import bransIcons from '../assets/bransIcons.png';
import photo1 from '../assets/shopcards/photo1.jpeg';
import photo2 from '../assets/shopcards/photo2.jpeg';
import photo3 from '../assets/shopcards/photo3.jpeg';
import photo4 from '../assets/shopcards/photo4.jpeg';
import photo5 from '../assets/shopcards/photo5.jpeg';

const ShopPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;
    const totalItems = 12;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handlePageChange = (page) => setCurrentPage(page);
    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };
    const handleFirstPage = () => setCurrentPage(1);

    return (
        <div className="p-4 flex flex-col items-center">
            {/* Sayfa Başlığı */}
            <h1 className="text-3xl font-bold mb-6">Shop</h1>
            <p className="text-lg text-muted-foreground mb-4">Home &gt; Shop</p>

            {/* "SHOP NOW" Butonu */}
            <Link to="/" className="btn btn-primary mb-4">
                SHOP NOW
            </Link>

            {/* Fotoğraflar */}
            <div className="flex flex-col items-center w-full max-w-[700px] mx-auto gap-4">
                {[photo1, photo2, photo3, photo4, photo5].map((photo, idx) => (
                    <Link key={idx} to={`/product/${idx + 1}`}>
                        <img src={photo} alt={`Shop Item ${idx + 1}`} className="rounded-md shadow-lg w-[332px] h-[300px]" />
                    </Link>
                ))}
            </div>

            <h6 className="text-muted-foreground font-semibold mt-4">Showing all results</h6>

            {/* Görünüm ve Filtreleme */}
            <div className="flex items-center gap-4 my-2">
                <span className="text-muted-foreground font-semibold">Views:</span>
                <button className="btn btn-outline p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-grid h-5 w-5">
                        <rect width="7" height="7" x="3" y="3" rx="1"></rect>
                        <rect width="7" height="7" x="14" y="3" rx="1"></rect>
                        <rect width="7" height="7" x="14" y="14" rx="1"></rect>
                        <rect width="7" height="7" x="3" y="14" rx="1"></rect>
                    </svg>
                </button>
                <button className="btn btn-outline p-2">
                    <i className="fa-solid fa-list text-muted-foreground"></i>
                </button>
            </div>

            <div className="flex items-center space-x-2">
                <select className="form-select w-[141px]">
                    {/* Dropdown seçenekleri */}
                </select>
                <button className="btn btn-primary h-10 px-6 py-2">Filter</button>
            </div>

            {/* Ürün Listesi */}
            <div className="mt-6">
                <ProductPage limit={itemsPerPage} page={currentPage} />
            </div>

            {/* Sayfa Seçim Butonları */}
            <div className="btn-group mt-6 flex justify-center items-center space-x-2">
                <button onClick={handleFirstPage} disabled={currentPage === 1} className="btn btn-secondary">First</button>
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        className={`btn ${currentPage === index + 1 ? 'btn-primary' : 'btn-secondary'}`}>
                        {index + 1}
                    </button>
                ))}
                <button onClick={handleNextPage} disabled={currentPage === totalPages} className="btn btn-secondary">Next</button>
            </div>

            <img src={bransIcons} className="w-[414px] mt-6" />
        </div>
    );
};

export default ShopPage;
