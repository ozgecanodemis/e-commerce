import React from 'react';
import aboutUs from '../assets/aboutUs.png';
import TeamPage from './TeamPage.jsx';

const AboutUs = () => {
    return (
        <div className="flex flex-col mt-10 lg:flex-row items-center md:items-start justify-center md:pl-24 bg-white py-[80px] lg:py-[112px]">
            <div className="flex flex-col items-center md:items-start gap-10 md:gap-8 mt-8 md:mt-24 w-[418px] h-[590px] lg:w-[599px] lg:h-auto">
                <h5 className="text-sm md:text-base text-[#252B42] font-bold">ABOUT COMPANY</h5>
                <h1 className="text-4xl md:text-6xl text-[#252B42] font-bold md:mt-8">ABOUT US</h1>
                <h4 className="text-xl text-[#737373] font-semibold w-2/3 md:w-7/12 text-center md:text-left mt-6">
                    We know how large objects will act, but things on a small scale.
                </h4>
                <button className="bg-[#23A6F0] text-white py-3 px-6 rounded-sm hover:bg-[#1c8ed9] transition mt-6">
                    Get Quote Now
                </button>
            </div>
            <div className="mt-8 md:mt-0 flex justify-center">
                <img
                    src={aboutUs}
                    alt="About Us"
                    className="w-[475px] h-[439px] md:w-[1050px] md:max-h-[545px] object-cover"
                />
            </div>
            <div className="flex flex-col items-center md:items-start justify-center bg-white py-16 lg:py-16 ">
                <div className="flex flex-col items-center md:items-start justify-center gap-0 py-20 w-[381px] h-[500px] lg:w-[1440px] lg:h-[236px]">
                    <p className="text-center md:text-left mt-16">
                        Problems trying
                    </p>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#252B42] m-2">
                        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                    </h2>
                    <p className="text-[#737373] text-base md:text-lg m-20">
                        Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
                    </p>
                </div>
            </div>
            <TeamPage />
        </div>
    );
};

export default AboutUs;