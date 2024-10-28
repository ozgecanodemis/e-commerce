import React from 'react';
import dw1 from '../assets/dw-1.png';
import dw2 from '../assets/dw-2.png';
import dw3 from '../assets/dw-3.png';
import dw4 from '../assets/dw-4.png';
import dw5 from '../assets/dw-5.png';
import dw6 from '../assets/dw-6.png';

const Brands = () => {
    return (
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
    );
};

export default Brands;
