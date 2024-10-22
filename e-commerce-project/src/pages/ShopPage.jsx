import React, { useState } from 'react';
import ProductPage from '../components/ProductPage';
import bransIcons from '../assets/bransIcons.png';

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
        <div className="p-4">
            {/* Sayfa Başlığı */}
            <h1 className="text-3xl font-bold mb-6">Shop</h1>

            {/* Navigasyon Yolu */}
            <p className="text-lg text-[#737373] mb-4">Home &gt; Shop</p>

            {/* Fotoğraflar */}
            <div className="flex flex-col w-full max-w-[700px] mx-auto gap-[15px]">
                <img src="https://picsum.photos/332/300?random=1" alt="Random Shop 1" className="w-[332px] h-[300px]" />
                <img src="https://picsum.photos/332/300?random=2" alt="Random Shop 2" className="w-[332px] h-[300px]" />
                <img src="https://picsum.photos/332/300?random=3" alt="Random Shop 3" className="w-[332px] h-[300px]" />
                <img src="https://picsum.photos/332/300?random=4" alt="Random Shop 4" className="w-[332px] h-[300px]" />
                <img src="https://picsum.photos/332/300?random=5" alt="Random Shop 5" className="w-[332px] h-[300px]" />
            </div>

            {/* Ürün Listesi için boşluk ve ayrı alan */}
            <div className="mt-6">
                <ProductPage limit={itemsPerPage} page={currentPage} />
            </div>

            {/* Sayfa Seçim Butonları */}
            <div className="button-group mt-6 flex flex-row justify-center items-center">
                <button
                    onClick={handleFirstPage}
                    disabled={currentPage === 1}
                    className="button"
                >
                    First
                </button>
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        className={`p-2 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                    >
                        {index + 1}
                    </button>
                ))}
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className="button"
                >
                    Next
                </button>
            </div>

            <img src={bransIcons} className='w-[149px] mt-4 mx-auto' />
        </div>
    );
};

export default ShopPage;
