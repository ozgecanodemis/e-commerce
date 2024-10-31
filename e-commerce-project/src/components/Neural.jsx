
import React from 'react';
import neural from '../assets/neural.png';

const Neural = () => {
    return (
        <div className="flex flex-col justify-center items-center mb-8 md:flex-row md:gap-4">
            <div className="order-2 md:order-1 md:w-1/2 flex justify-center md:justify-start">
                <img src={neural} alt="Neural Universe" className="w-[85%] h-[320px] object-cover md:w-full md:h-auto" />
            </div>
            <div className="order-1 md:order-2 md:w-1/2 flex flex-col items-center md:items-start p-6">
                <h3 className="font-[400] text-[40px] w-[263px] leading-[30px] text-center font-montserrat mb-4 mobile:text-[32px] mobile:w-[90%] md:text-left">
                    Part of the Neural Universe
                </h3>

                <p className="text-[14px] w-[263px] font-[400] text-[#737373] text-center font-montserrat mb-4 mobile:text-[12px] mobile:w-[90%] md:text-left">
                    Problems trying to resolve the conflict between
                </p>
                <div className="flex flex-col justify-center items-center gap-[25px] mobile:gap-[15px] md:flex-row md:gap-4">
                    <button className="button-4">BUY NOW</button>
                    <button className="button-4">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Neural;