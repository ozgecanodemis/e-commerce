import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom'; // Link bileşenini import ettik
import homepSlide1 from '../assets/homepSlide1.jpeg';
import homepSlide2 from '../assets/homepSlide2.jpg';
import homepSlide3 from '../assets/homepSlide3.jpg';

const Slider = () => {
    return (
        <section className="flex flex-col items-center justify-center relative">
            <Carousel
                showArrows={true}
                autoPlay={false}
                infiniteLoop={true}
                showThumbs={false}
                className="w-[414px] h-[753px] gap-[30px] border-t-[1px]"
                style={{
                    borderRadius: '5px 0px 0px 0px',
                    opacity: 0.9,
                }}
            >
                <div className="relative flex flex-col items-center justify-center h-full">
                    <img src={homepSlide1} alt="Slide 1" className="w-full h-[753px] object-cover" />
                    <div className="absolute top-1/4 w-[268px] text-center text-white flex flex-col items-center space-y-10">
                        <p className="text-lg">SUMMER 2020</p>
                        <h1 className="text-4xl font-bold">NEW COLLECTION</h1>
                        <p className="text-sm mt-2">
                            We know how large objects will act, but things on a small scale.
                        </p>
                        <Link to="/shop" className="custom-button">
                            SHOP NOW
                        </Link>
                    </div>
                </div>
                <div className="relative flex flex-col items-center justify-center h-full">
                    <img src={homepSlide2} alt="Slide 2" className="w-full h-[753px] object-cover" />
                    <div className="absolute top-1/4 w-full text-center text-white flex flex-col items-center space-y-4">
                        <h4 className="text-lg">SUMMER 2020</h4>
                        <h1 className="text-4xl font-bold text-center">NEW COLLECTION</h1>
                        <h4 className="text-[20px] mt-2">
                            We know how large objects will act, but things on a small scale.
                        </h4>
                        <Link to="/shop" className="custom-button">
                            SHOP NOW
                        </Link>
                    </div>
                </div>
                <div className="relative flex flex-col items-center justify-center h-full">
                    <img src={homepSlide3} alt="Slide 3" className="w-full h-[753px] object-cover" />
                    <div className="absolute top-1/4 w-full text-center text-white flex flex-col items-center space-y-4">
                        <p className="text-lg">SUMMER 2020</p>
                        <h1 className="text-4xl font-bold w-full">NEW COLLECTION</h1>
                        <p className="text-sm mt-2">
                            We know how large objects will act, but things on a small scale.
                        </p>
                        <Link to="/shop" className="custom-button">
                            SHOP NOW
                        </Link>
                    </div>
                </div>
            </Carousel>
        </section>
    );
};

export default Slider;