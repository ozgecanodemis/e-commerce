import React, { useState, useEffect } from 'react';
import { withRouter, Link, useParams } from 'react-router-dom'; // Link ve useParams'i içe aktar
import { User, Search, ShoppingCart, Heart, Eye } from 'react-feather';
import axios from 'axios';
import Brands from '../components/Brands.jsx';


const ProductDetails = () => {
    const { id } = useParams(); // URL'deki id parametresini al
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [otherProducts, setOtherProducts] = useState([]); // Diğer ürünler için state

    useEffect(() => {
        // Ürünü fake store API'sinden çek
        axios.get(`https://workintech-fe-ecommerce.onrender.com/products/${id}`) // Fixed string interpolation
            .then(response => {
                setProduct(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching product:', error);
                setLoading(false);
            });
    }, [id]);

    useEffect(() => {
        // Tüm ürünleri çek ve dört tanesini al
        axios.get('https://workintech-fe-ecommerce.onrender.com/products')
            .then(response => {
                const filteredProducts = response.data.filter(item => item.id !== parseInt(id)).slice(0, 4);
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
        <div className="flex-col min-h-screen bg-[#FFFFF] ">

            {/* Ürün Detayları */}
            <main className="flex-grow p-4">
                {product ? (
                    <div className="product-details">
                        {/* Ürün Resmi Carousel */}
                        <div className="carousel w-[332px] h-[300px] mx-auto bg-gray-100">
                            <img src={product.image} alt={product.title} className="w-full h-full object-contain" />
                        </div>

                        <h1 className="text-[24px] font-bold text-[#252B42] mt-4 text-center">{product.title}</h1>

                        {/* Yıldız Derecelendirmesi */}
                        <div className="flex justify-center gap-1 mt-2 text-[#FFCC00]">
                            <span>★</span><span>★</span><span>★</span><span>★</span><span>☆</span>
                        </div>

                        <p className="text-[#737373] text-[18px] text-center mt-2">${product.price}</p>

                        <p className="text-[#23856D] text-center mt-2">Availability: In Stock</p>

                        <p className="text-[#737373] text-center mt-4">{product.description}</p>

                        {/* Ürün Renk Seçenekleri */}
                        <div className="flex justify-center gap-2 mt-4">
                            <span className="w-4 h-4 rounded-full bg-[#23A6F0]"></span>
                            <span className="w-4 h-4 rounded-full bg-[#23856D]"></span>
                            <span className="w-4 h-4 rounded-full bg-[#E77C40]"></span>
                            <span className="w-4 h-4 rounded-full bg-[#252B42]"></span>
                        </div>

                        {/* Seçenek Butonu ve İkonlar */}
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

            {/* Diğer Ürünler */}
            <section className="w-[331px] h-auto mx-auto p-[48px_0] space-y-[24px]">
                <h2 className="text-[20px] font-bold text-center mb-4">Bestseller Products</h2>
                <div className="flex flex-wrap justify-center gap-4"> {/* flex-wrap ve justify-center ekledik */}
                    {otherProducts.map((product) => (
                        <Link key={product.id} to={`/product/${product.id}`}>
                            <div className="border p-4 text-center w-[328px] h-auto">
                                <img src={product.image} alt={product.title} className="h-[150px] w-full object-contain mb-2" />
                                <p className="text-sm font-medium">{product.title}</p>
                                <p className="text-xs text-[#737373]">${product.price}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <Brands />


        </div >
    );
};

export default withRouter(ProductDetails);