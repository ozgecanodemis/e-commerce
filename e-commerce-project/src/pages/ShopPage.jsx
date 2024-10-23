import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Link'i içe aktar
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
    const totalItems = 12; // Bu değeri gerçek ürün sayınıza göre güncelleyin
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handleFirstPage = () => {
        setCurrentPage(1);
    };

    return (
        <div className="p-4 flex flex-col items-center">
            {/* Sayfa Başlığı */}
            <h1 className="text-3xl font-bold mb-6">Shop</h1>

            {/* Navigasyon Yolu */}
            <p className="text-lg text-[#737373] mb-4">Home &gt; Shop</p>

            {/* Fotoğraflar */}
            <div className="flex flex-col items-center w-full max-w-[700px] mx-auto gap-[15px]">
                <Link to="/product/1"><img src={photo1} alt="Shop Item 1" className="w-[332px] h-[300px]" /></Link>
                <Link to="/product/2"><img src={photo2} alt="Shop Item 2" className="w-[332px] h-[300px]" /></Link>
                <Link to="/product/3"><img src={photo3} alt="Shop Item 3" className="w-[332px] h-[300px]" /></Link>
                <Link to="/product/4"><img src={photo4} alt="Shop Item 4" className="w-[332px] h-[300px]" /></Link>
                <Link to="/product/5"><img src={photo5} alt="Shop Item 5" className="w-[332px] h-[300px]" /></Link>
            </div>

            <div>
                <h6 className="text-[#737373] font-semibold">Showing all results</h6>
            </div>
            <div className="flex items-center gap-4 my-2">
                <span className="text-[#737373] font-semibold">Views:</span>
                <button className="p-2 bg-gray-200 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layout-grid h-5 w-5">
                        <rect width="7" height="7" x="3" y="3" rx="1"></rect>
                        <rect width="7" height="7" x="14" y="3" rx="1"></rect>
                        <rect width="7" height="7" x="14" y="14" rx="1"></rect>
                        <rect width="7" height="7" x="3" y="14" rx="1"></rect>
                    </svg>
                </button>

                <button className="p-2 bg-gray-200 rounded">
                    <i className="fa-solid fa-list fa-md text-[#737373] font-semibold"></i>
                </button>
            </div>

            <div className="flex items-center space-x-2">
                <select className="p-2 border w-[141px] border-[#DDDDDD] text-[#737373] bg-[#F9F9F9] rounded focus:border-[#DDDDDD] focus:outline-none cursor-pointer">
                    {/* Dropdown options */}
                </select>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-6 py-2 bg-[#23A6F0] text-white">
                    Filter
                </button>
            </div>
            {/* Diğer içerikler ve ürün listesi */}
            <div className="mt-6">
                <ProductPage limit={itemsPerPage} page={currentPage} />
            </div>

            {/* Sayfa Seçim Butonları */}
            <div className="button-group mt-6 flex flex-row justify-center items-center">
                <button onClick={handleFirstPage} disabled={currentPage === 1} className="button-first-next">First</button>
                {[...Array(totalPages)].map((_, index) => (
                    <button key={index + 1} onClick={() => handlePageChange(index + 1)} className={`button-page-number ${currentPage === index + 1 ? 'active' : ''}`}>
                        {index + 1}
                    </button>
                ))}
                <button onClick={handleNextPage} disabled={currentPage === totalPages} className="button-first-next">Next</button>
            </div>

            <img src={bransIcons} className='w-[414px]' />
        </div>
    );
};

export default ShopPage;
