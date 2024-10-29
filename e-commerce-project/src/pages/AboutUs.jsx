import React from 'react';
import aboutUs from '../assets/aboutUs.png';
import TeamPage from './TeamPage.jsx';
import AboutSep from '../components/AboutSep.jsx';
import { Brands } from '../components/Brands.jsx'

const AboutUs = () => {
    return (
        <div className="flex flex-col mt-10 items-center justify-center md:pl-24 bg-white py-[80px] lg:py-[112px]">
            {/* About Company Section */}
            <div className="flex flex-col items-center gap-6 mt-8 w-[90%] md:w-[418px] lg:w-[599px]">
                <h5 className="text-sm lg:text-base text-[#252B42] font-bold">ABOUT COMPANY</h5>
                <h1 className="text-4xl lg:text-6xl text-[#252B42] font-bold lg:mt-4">ABOUT US</h1>
                <h4 className="text-xl text-[#737373] font-semibold w-2/3 md:w-7/12 text-center mt-4">
                    We know how large objects will act, but things on a small scale.
                </h4>
                <button className="bg-[#23A6F0] text-white py-3 px-6 rounded-sm hover:bg-[#1c8ed9] transition mt-4">
                    Get Quote Now
                </button>
            </div>

            {/* About Us Image */}
            <div className="mt-8 flex justify-center w-[90%] md:w-auto">
                <img
                    src={aboutUs}
                    alt="About Us"
                    className="w-full md:w-[475px] lg:w-[1050px] h-auto object-cover rounded-lg"
                />
            </div>

            {/* Additional Content */}
            <div className="flex flex-col items-center justify-center py-16 lg:py-20 lg:w-[80%]">
                <div className="flex flex-col items-center text-center gap-2 px-4">
                    <p className="text-sm lg:text-base mt-16">Problems trying</p>
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#252B42] lg:mt-2">
                        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                    </h2>
                    <p className="text-[#737373] text-base lg:text-lg mt-4 lg:mt-6 max-w-3xl">
                        Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
                    </p>
                </div>
            </div>

            {/* About Separator and Team Section */}
            <AboutSep />
            <TeamPage />
            <Brands />
        </div>
    );
};

export default AboutUs;
