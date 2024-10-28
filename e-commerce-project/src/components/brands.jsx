import React from 'react';
import dw1 from '../assets/dw-1.png';
import dw2 from '../assets/dw-2.png';
import dw3 from '../assets/dw-3.png';
import dw4 from '../assets/dw-4.png';
import dw5 from '../assets/dw-5.png';
import dw6 from '../assets/dw-6.png';

const brands = () => {
    return (
        <div className="flex flex-col justify-center items-center md:flex-row md:justify-evenly gap-10 bg-gray-200 py-12 w-full">
            {[dw1, dw2, dw3, dw4, dw5, dw6].map((src, index) => (
                <img
                    key={index}
                    src={src}
                    className="w-[153px] h-auto object-contain"
                    alt={⁠ Brand ${index + 1} ⁠}
                />
            ))}
        </div>
    );
};

export default brands;