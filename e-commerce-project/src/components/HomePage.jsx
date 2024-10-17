import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUser as regularUser } from '@fortawesome/free-regular-svg-icons'; // Boş kullanıcı ikonu


const HomePage = () => {
    return (
        <div className="min-h-screen bg[#FFFFF]" style={{ width: '414px' }}>

            {/* Header */}
            <header className="flex justify-between items-center p-4  text-[#252B42];
">
                <h1 className='font-bold'>Brand Name</h1>
                <div className="flex-col items-center space-x-4">
                    <FontAwesomeIcon icon={faUser} />

                    <i className="fas fa-search"></i>
                    <i className="fas fa-shopping-cart"></i>
                    <i className="fas fa-bars"></i>
                </div>
            </header>

            {/* Navigation Menu */}
            <nav className="flex flex-col justify-center items-center ;
 p-4">
                <a href="#home" className="text-[#737373] text-3xl block py-2 hover:font-extralight">Home</a>
                <a href="#product" className="text-[#737373] text-3xl block py-2 hover:font-extralight">Product</a>
                <a href="#pricing" className="text-[#737373] text-3xl block py-2 hover:font-extralight">Pricing</a>
                <a href="#contact" className="text-[#737373] text-3xl block py-2 hover:font-extralight">Contact</a>
            </nav>

            {/* New Collection Slider */}
            <section className="bg-cover bg-center h-64 flex items-center justify-center relative" style={{ backgroundImage: "url('/path/to/image.jpg')" }}>
                <button className="bg-white text-black py-2 px-6 text-lg font-semibold absolute bottom-6">
                    SHOP NOW
                </button>
            </section>

        </div>
    );
};

export default HomePage;
