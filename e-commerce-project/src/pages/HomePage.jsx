import React from 'react';
import Slider from '../components/Slider';
import Slider2 from '../components/Slider2';
import EditorsPicks from '../components/EditorsPicks';
import ProductPage from '../components/ProductPage';
import MobileBlog from '../components/MobileBlog';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <>

            <Slider />
            <EditorsPicks />
            <ProductPage />
            <Slider2 />
            <MobileBlog />

        </>
    );
};

export default HomePage;