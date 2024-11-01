import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const items = [
    {
        altText: 'Slide 1',
        caption: 'Slide 1',
        key: 1,
        season: 'Summer 2020',
        title: 'Vita Classic Product',
        description: 'We know how large objects will act, but things on a small scale.',
        buttonText: 'ADD TO CART',
        bgColor: '#2DC071', // First item's background color
    },
    {
        altText: 'Slide 2',
        caption: 'Slide 2',
        key: 2,
        season: 'Summer 2020',
        title: 'Vita Classic Product',
        description: 'We know how large objects will act, but things on a small scale.',
        buttonText: 'ADD TO CART',
        bgColor: '#2DC071',
    },
];

function Slider({ startIndex = 0 }) {
    const [activeIndex, setActiveIndex] = useState(startIndex);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const slides = items.map((item, index) => (
        <div
            key={item.key}
            className={`absolute inset-0 transition-opacity duration-1000 ${activeIndex === index ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundColor: index === 0 ? item.bgColor : 'transparent' }}
            onTransitionEnd={() => setAnimating(false)}
        >
            {/* Slide content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-40">
                <h2 className="text-3xl font-bold mb-2">{item.title}</h2>
                <p className="text-lg mb-4">{item.description}</p>
                {item.buttonText && (
                    <Link
                        to="/shop"
                        className="custom-button px-6 py-2 mt-2 bg-[#2DC071] text-white rounded-md"
                    >
                        {item.buttonText}
                    </Link>
                )}
            </div>
        </div>
    ));

    return (
        <div className="relative w-full h-[1300px] lg:h-[709px] overflow-hidden">
            <div className="relative h-full">
                {slides}
            </div>

            {/* Previous/Next Arrows */}
            <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-transparent text-white text-4xl font-thin"
                onClick={previous}
            >
                &#8249;
            </button>
            <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-transparent text-white text-4xl font-thin"
                onClick={next}
            >
                &#8250;
            </button>


        </div>
    );
}

export default Slider;
