import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Heart, ShoppingCart, Eye, ChevronLeft, ChevronRight } from 'react-feather';
import axios from 'axios';
import Brands from '../components/Brands.jsx';

const ProductDetails = () => {
    const { id } = useParams(); // Get product ID from URL params
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [otherProducts, setOtherProducts] = useState([]); // For related products
    const [currentImage, setCurrentImage] = useState(0); // Initialize current image state

    useEffect(() => {
        // Fetch the product details by ID from the API
        axios.get(`https://workintech-fe-ecommerce.onrender.com/products/${id}`)
            .then(response => {
                setProduct(response.data); // Set the fetched product data
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching product:', error);
                setLoading(false);
            });
    }, [id]);

    useEffect(() => {
        // Fetch other products for related products (excluding the current product)
        axios.get('https://workintech-fe-ecommerce.onrender.com/products')
            .then(response => {
                const filteredProducts = response.data.products.filter(item => item.id !== parseInt(id)).slice(0, 8);
                setOtherProducts(filteredProducts);
            })
            .catch(error => {
                console.error('Error fetching related products:', error);
            });
    }, [id]);

    if (loading) {
        return <p>Loading product details...</p>;
    }

    const handlePrevImage = () => {
        setCurrentImage((prev) => (prev > 0 ? prev - 1 : allImages.length - 1));
    };

    const handleNextImage = () => {
        setCurrentImage((prev) => (prev < allImages.length - 1 ? prev + 1 : 0));
    };

    // Sample random image URLs for placeholders
    const randomImages = [
        'https://picsum.photos/200/300',
        'https://picsum.photos/id/237/200/300',
    ];

    // Combine product images with random images (if available)
    const allImages = [
        product.images[0]?.url, // The first image from the product images
        randomImages[0],         // Random image for the second slot
        randomImages[1],         // Random image for the third slot
        product.images[1]?.url,  // The second image from the product images
        product.images[2]?.url,  // The third image from the product images
    ].filter(Boolean); // Filter out any null or undefined values

    return (
        <div className="flex-col min-h-screen bg-[#FFFFF]">
            <main className="flex-grow p-4">
                {product ? (
                    <div className="product-details">
                        {/* Product Image Carousel */}
                        <div className="relative w-[332px] h-[300px] mx-auto bg-gray-100">
                            <img
                                src={allImages[currentImage]}
                                alt={product.name}
                                className="w-full h-full object-contain"
                            />
                            <button
                                onClick={handlePrevImage}
                                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg"
                            >
                                <ChevronLeft className="h-4 w-4" />
                            </button>
                            <button
                                onClick={handleNextImage}
                                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg"
                            >
                                <ChevronRight className="h-4 w-4" />
                            </button>
                        </div>

                        <div className="flex gap-4  overflow-auto m-8 pb-2 ">
                            {/* Combine the first image, random images, and the remaining product images */}
                            {[product.images[0]?.url, ...randomImages, ...product.images.slice(1).map((img) => img.url)].map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentImage(index)}
                                    className={`relative shrink-0 overflow-hidden rounded-lg border ${currentImage === index ? 'ring-2 ring-primary' : ''}`}
                                >
                                    <img
                                        src={image} // Correctly use the image URL here
                                        alt={`Thumbnail ${index + 1}`}
                                        className="h-20 w-20 object-cover"
                                    />
                                </button>
                            ))}
                        </div>





                        <h1 className="text-[24px] font-bold text-[#252B42] mt-4 text-center">{product.name}</h1>

                        {/* Rating */}
                        <div className="flex justify-center gap-1 mt-2 text-[#FFCC00]">
                            {Array.from({ length: 5 }, (_, index) => (
                                <span key={index}>
                                    {index < Math.round(product.rating) ? '★' : '☆'}
                                </span>
                            ))}
                        </div>

                        {/* Price Section */}
                        <div className="text-center mt-4">
                            {product.discountedPrice ? (
                                <>
                                    <span className="text-[#BDBDBD] text-[16px] font-[700] leading-[24px] tracking-[0.1px] line-through mr-2">
                                        ${product.originalPrice}
                                    </span>
                                    <span className="text-[#FF5733] text-[18px] font-[700] leading-[24px] tracking-[0.1px]">
                                        ${product.discountedPrice}
                                    </span>
                                </>
                            ) : (
                                <span className="text-[#737373] text-[18px] font-[700] leading-[24px] tracking-[0.1px]">
                                    ${product.price}
                                </span>
                            )}
                        </div>

                        <p className="text-[#23856D] text-center mt-2">Availability: In Stock</p>

                        <p className="text-[#737373] text-center mt-4">{product.description}</p>

                        {/* Product Color Options */}
                        <div className="flex justify-center gap-2 mt-4">
                            {/* Sample color options, replace with real options if available */}
                            <span className="w-4 h-4 rounded-full bg-[#23A6F0]"></span>
                            <span className="w-4 h-4 rounded-full bg-[#23856D]"></span>
                            <span className="w-4 h-4 rounded-full bg-[#E77C40]"></span>
                            <span className="w-4 h-4 rounded-full bg-[#252B42]"></span>
                        </div>

                        {/* Options and Icons */}
                        <div className="flex items-center justify-center mt-6 space-x-4">
                            <button className="bg-[#23A6F0] text-white py-2 px-4 rounded">Select Options</button>
                            <Heart className="text-[#252B42]" />
                            <ShoppingCart className="text-[#252B42]" />
                            <Eye className="text-[#252B42]" />
                        </div>
                    </div>
                ) : (
                    <p>Product not found.</p>
                )}
            </main>

            <section className="mt-20 p-4">
                <div className="w-full max-w-md flex flex-col justify-center items-center text-center mx-auto mb-6">
                    <h6 className="text-[20px] font-[400] text-[#737373] leading-[30px] tracking-[0.2px] font-montserrat mb-4">Featured Products</h6>
                    <h1 className="text-[24px] font-[700] text-[#252B42] leading-[32px] tracking-[0.1px] font-montserrat mb-4">BESTSELLER PRODUCTS</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto">
                    {otherProducts.map((product) => (
                        <div key={product.id} className="product-card p-4 rounded-lg transition-transform duration-200 hover:scale-105">
                            <Link to={`/product/${product.id}`}>
                                <img
                                    src={product.images[0].url}
                                    alt={product.name}
                                    className="w-full h-auto mb-4"
                                />
                            </Link>
                            <div className="product-info">
                                <h2 className="text-[16px] font-[700] text-[#252B42] leading-[24px] tracking-[0.1px] text-center font-montserrat">{product.name}</h2>
                                <p className="text-[14px] font-[700] text-[#737373] leading-[24px] tracking-[0.2px] text-center font-montserrat">
                                    <span className="text-[#BDBDBD] text-[16px] font-[700] leading-[24px] tracking-[0.1px] text-center line-through">
                                        ${product.price}
                                    </span>
                                    <span className="ml-2 text-[#23856D] text-[16px] font-[700] leading-[24px] tracking-[0.1px] text-center">${(product.price * 0.8).toFixed(2)}</span>
                                </p>
                                <div className="flex justify-center gap-2 mt-2">
                                    <span className="w-4 h-4 rounded-full bg-[#23A6F0]"></span>
                                    <span className="w-4 h-4 rounded-full bg-[#23856D]"></span>
                                    <span className="w-4 h-4 rounded-full bg-[#E77C40]"></span>
                                    <span className="w-4 h-4 rounded-full bg-[#252B42]"></span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            <Brands />
        </div>
    );
};

export default ProductDetails;
