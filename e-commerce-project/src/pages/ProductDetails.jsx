import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Heart, ShoppingCart, Eye } from 'react-feather';
import axios from 'axios';
import Brands from '../components/Brands.jsx';

const ProductDetails = () => {
    const { id } = useParams(); // Get product ID from URL params
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [otherProducts, setOtherProducts] = useState([]); // For related products

    useEffect(() => {
        // Fetch the product details by ID from the new API
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
        // Fetch the products from the API for related products (excluding the current product)
        axios.get('https://workintech-fe-ecommerce.onrender.com/products')
            .then(response => {
                const filteredProducts = response.data.products.filter(item => item.id !== parseInt(id)).slice(0, 8); // Exclude current product and get top 8
                setOtherProducts(filteredProducts);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, [id]);

    if (loading) {
        return <p>Loading product details...</p>;
    }

    return (
        <div className="flex-col min-h-screen bg-[#FFFFF]">
            {/* Product Details Section */}
            <main className="flex-grow p-4">
                {product ? (
                    <div className="product-details">
                        {/* Product Image Carousel */}
                        <div className="carousel w-[332px] h-[300px] mx-auto bg-gray-100">
                            <img
                                src={product.images[0].url}
                                alt={product.name}
                                className="w-full h-full object-contain"
                            />
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

            {/* Related Products Section */}
            <section className="w-full mx-auto py-12 space-y-6 md:w-[1124px] md:h-[1086px] md:left-[195px] ">
                <h2 className="text-2xl font-bold text-center mb-4">Bestseller Products</h2>
                <div className="flex flex-wrap justify-center gap-6 md:flex-row md:gap-6">
                    {otherProducts.map((product) => (
                        <Link key={product.id} to={`/product/${product.id}`}>
                            <div className="border p-4 text-center w-[328px] h-auto">
                                <img
                                    src={product.images[0].url}
                                    alt={product.name}
                                    className="h-[150px] w-full object-contain mb-2"
                                />
                                <p className="text-sm font-medium">{product.name}</p>
                                <p className="text-xs text-[#737373]">${product.price}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <Brands />
        </div>
    );
};

export default ProductDetails;
