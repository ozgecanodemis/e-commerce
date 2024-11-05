import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductPage = ({ limit, page }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { category } = useParams(); // Get category from URL

    useEffect(() => {
        axios
            .get('https://fakestoreapi.com/products')
            .then(response => {
                // Filter products by category if category exists
                const filteredProducts = category
                    ? response.data.filter(product => product.category === category)
                    : response.data;
                setProducts(filteredProducts);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
                setLoading(false);
            });
    }, [category]);

    if (loading) {
        return <p>Loading products...</p>;
    }

    const startIndex = limit ? (page - 1) * limit : 0;
    const limitedProducts = limit ? products.slice(startIndex, startIndex + limit) : products;

    return (
        <div className="p-4 mt-20">
            <h1 className="text-2xl font-bold text-center mb-4">{category ? `${category} Products` : 'All Products'}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto">
                {limitedProducts.map(product => (
                    <div key={product.id} className="product-card p-4 rounded-lg transition-transform duration-200 hover:scale-105">
                        <img src={product.image} alt={product.title} className="w-full h-auto mb-4" />
                        <h2 className="text-lg font-bold">{product.title}</h2>
                        <p>${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductPage;
