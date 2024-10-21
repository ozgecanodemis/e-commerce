import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Slider2 from '../assets/Slider2.png';
import homepSlide2 from '../assets/homepSlide2.jpg';
import homepSlide3 from '../assets/homepSlide3.jpg';

const Slider = () => {
    return (
        <section className="flex flex-col items-center h-[1230px] justify-center relative mx-auto bg-[#23856D]">
            <Carousel
                showArrows={true}
                autoPlay={false}
                infiniteLoop={true}
                showThumbs={false}
                className="w-[414px] h-[753px] gap-[30px]"
                style={{
                    borderRadius: '5px 0px 0px 0px',
                    opacity: 0.9,
                }}
            >
                <div className="relative flex flex-col items-center justify-center h-full">
                    <img src={Slider2} className="w-[414px] h-[681px] object-cover" />
                    <div className="absolute top-1/4 w-[268px] text-center text-white flex flex-col items-center space-y-10">
                        <p className="text-lg">SUMMER 2020</p>
                        <h1 className="text-4xl font-bold">Vita Classic Product</h1>
                        <p className="text-sm mt-2">
                            We know how large objects will act, but things on a small scale.
                        </p>
                        <button className="custom-button">
                            ADD TO CART
                        </button>
                    </div>
                </div>
                <div className="relative flex flex-col items-center justify-center h-full">
                    <img src={homepSlide2} alt="Slide 2" className="w-[414px] h-[753px] object-cover" />
                    <div className="absolute top-1/4 w-[268px] text-center text-white flex flex-col items-center space-y-4">
                        <p className="text-lg">SUMMER 2020</p>
                        <h1 className="text-4xl font-bold">NEW COLLECTION</h1>
                        <p className="text-sm mt-2">
                            We know how large objects will act, but things on a small scale.
                        </p>
                        <button className="custom-button">
                            ADD TO CART
                        </button>
                    </div>
                </div>
                <div className="relative flex flex-col items-center justify-center h-full">
                    <img src={homepSlide3} alt="Slide 3" className="w-[414px] h-[753px] object-cover" />
                    <div className="absolute top-1/4 w-[268px] text-center text-white flex flex-col items-center space-y-4">
                        <p className="text-lg">SUMMER 2020</p>
                        <h1 className="text-4xl font-bold">NEW COLLECTION</h1>
                        <p className="text-sm mt-2">
                            We know how large objects will act, but things on a small scale.
                        </p>
                        <button className="custom-button">
                            SHOP NOW
                        </button>
                    </div>
                </div>
            </Carousel>
        </section>
    );
};

export default Slider;