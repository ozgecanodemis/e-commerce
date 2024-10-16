import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faHeart, faSearch, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const HomePage = () => {
    return (
        <div>
            {/* Üst Header */}
            <header className=" ">
                <div className=" ">

                    <div className="">
                        <div className="">
                            <FontAwesomeIcon icon={faPhone} className="mr-2" />
                            <span>(225) 555-0118</span>
                        </div>
                        <div className="">
                            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                            <span>info@bandage.com</span>
                        </div>
                    </div>



                    <div className="">
                        <p>Follow us and get a chance to win 80% off</p>
                        <FontAwesomeIcon icon={faFacebook} className="ml-2" />
                        <FontAwesomeIcon icon={faTwitter} className="ml-2" />
                        <FontAwesomeIcon icon={faInstagram} className="ml-2" />
                    </div>
                </div>
            </header>

            {/* Alt Header */}
            <header className="bg-white py-4 shadow-md">
                <div className="">
                    {/* Sol Kısım - Logo */}
                    <div className="text-2xl font-bold">
                        Bandage
                    </div>

                    {/* Orta Kısım - Menü Nav */}
                    <nav className="flex space-x-8 text-lg">
                        <a href="/" >Home</a>
                        <a href="/shop" >Shop</a>
                        <a href="/about" >About</a>
                        <a href="/blog" >Blog</a>
                        <a href="/contact" >Contact</a>
                        <a href="/pages" >Pages</a>
                    </nav>

                    <div className="">
                        <a href="/login" className="">
                            <FontAwesomeIcon icon={faUser} className="mr-1" /> Login
                        </a>
                        <a href="/search" >
                            <FontAwesomeIcon icon={faSearch} />
                        </a>
                        <a href="/cart" >
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </a>
                        <a href="/wishlist" >
                            <FontAwesomeIcon icon={faHeart} />
                        </a>
                    </div>
                </div>
            </header>


            <main>

            </main>
        </div>
    );
};

export default HomePage;
