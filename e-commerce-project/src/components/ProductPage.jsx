import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'; // Ensure Link is imported from react-router-dom
import axios from 'axios';
import '../index.css';

const ProductPage = ({ limit, page }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { gender, category } = useParams();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`https://workintech-fe-ecommerce.onrender.com/products`, {
                    params: { gender, category },
                });
                setProducts(response.data.products);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data: ', error);
                setLoading(false);
            }
        };
        fetchProducts();
    }, [gender, category]);

    if (loading) {
        return <p>Loading products...</p>;
    }

    const startIndex = limit ? (page - 1) * limit : 0;
    const limitedProducts = limit ? products.slice(startIndex, startIndex + limit) : products;

    const displayProducts = window.innerWidth < 414 ? limitedProducts.slice(0, 4) : limitedProducts;

    return (
        <div className="p-4 mt-20">
            <div className="w-full max-w-md flex flex-col justify-center items-center text-center mx-auto mb-6">
                <h6 className="text-[20px] font-[400] text-[#737373] leading-[30px] tracking-[0.2px] font-montserrat mb-4">Featured Products</h6>
                <h1 className="text-[24px] font-[700] text-[#252B42] leading-[32px] tracking-[0.1px] font-montserrat mb-4">BESTSELLER PRODUCTS</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto">
                {displayProducts.map(product => (
                    <div key={product.id} className="product-card p-4 rounded-lg transition-transform duration-200 hover:scale-105">
                        <Link to={`/product/${product.id}`}> {/* Link to the ProductDetails page */}
                            <img src={product.images[0].url} alt={product.name} className="w-full h-auto mb-4" />
                        </Link>
                        <div className="product-info">
                            <h2 className="text-[16px] font-[700] text-[#252B42] leading-[24px] tracking-[0.1px] text-center font-montserrat">{product.name}</h2>
                            <p className="text-[14px] font-[700] text-[#737373] leading-[24px] tracking-[0.2px] text-center font-montserrat">
                                <span className="text-[#BDBDBD] text-[16px] font-[700] leading-[24px] tracking-[0.1px] text-center">${product.price}</span>
                                <span className="ml-2 text-[#23856D] text-[16px] font-[700] leading-[24px] tracking-[0.1px] text-center">${(product.price * 0.8).toFixed(2)}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductPage;
