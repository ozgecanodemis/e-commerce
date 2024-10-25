
import React from 'react';
import Slider from './Slider';
import Slider2 from './Slider2';
import EditorsPicks from './EditorsPicks';
import ProductPage from './ProductPage';
import MobileBlog from './MobileBlog';
import Footer from './Footer';

const HomePage = () => {
    return (
        <>

            <Slider />
            <EditorsPicks />
            <ProductPage />
            <Slider2 />
            <MobileBlog />
            <Footer />
        </>
    );
};

export default HomePage;
