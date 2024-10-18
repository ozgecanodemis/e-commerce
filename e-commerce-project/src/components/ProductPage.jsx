// src/components/ProductPage.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../index.css';

const ProductPage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Sahte API'den veri çekmek
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                setProducts(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading products...</p>;
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Product Page</h1>
            <div className="grid grid-cols-1 gap-4">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.title} />
                        <div className="product-info">
                            <h2 className="text-xl font-semibold">{product.title}</h2>
                            <p className="text-gray-700">
                                <span className="line-through">${product.price}</span> {/* Normal Fiyat */}
                                <span className="text-red-500 ml-2">${(product.price * 0.8).toFixed(2)}</span> {/* İndirimli Fiyat */}
                            </p>
                            <p className="mt-2">Renk Seçenekleri: <span className="text-gray-500">Mavi, Kırmızı, Siyah</span></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductPage;
