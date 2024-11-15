import React, { useEffect, useState, useCallback } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import '../index.css';

export default function ProductPage({ limit, page }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sort, setSort] = useState(""); // State for sorting
    const { code } = useParams(); // Expect code in format like 'k:elbise' or 'e:gomlek'
    const history = useHistory();

    // Fetch products based on category and sorting
    const fetchProducts = useCallback(async () => {
        try {
            setLoading(true);
            const params = { category: code };
            if (sort) {
                params.sort = sort; // Add sort parameter to the API request
            }
            const response = await axios.get('https://workintech-fe-ecommerce.onrender.com/products', { params });
            setProducts(response.data.products || []);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching products:', error);
            setLoading(false);
        }
    }, [code, sort]);

    // Fetch products when component mounts or dependencies change
    useEffect(() => {
        fetchProducts();
    }, [code, sort, fetchProducts]);

    // Handle sorting change
    const handleSortChange = (e) => {
        const newSort = e.target.value;
        setSort(newSort);
        const queryString = new URLSearchParams({ sort: newSort }).toString();
        history.push(`/shop/${code}?${queryString}`);
    };

    if (loading) {
        return <p>Loading products...</p>;
    }

    // Calculate paginated products
    const startIndex = limit ? (page - 1) * limit : 0;
    const limitedProducts = limit ? products.slice(startIndex, startIndex + limit) : products;
    const displayProducts = window.innerWidth < 414 ? limitedProducts.slice(0, 4) : limitedProducts;

    return (
        <div className="p-4 mt-20">
            {/* Sorting Dropdown */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-[24px] font-[700] text-[#252B42]">BESTSELLER PRODUCTS</h1>
                <select
                    className="p-2 border rounded"
                    onChange={handleSortChange}
                    value={sort}
                >
                    <option value="">Sort by</option>
                    <option value="price:asc">Price: Low to High</option>
                    <option value="price:desc">Price: High to Low</option>
                    <option value="rating:asc">Rating: Low to High</option>
                    <option value="rating:desc">Rating: High to Low</option>
                </select>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto">
                {displayProducts.map((product) => (
                    <div
                        key={product.id}
                        className="product-card p-4 rounded-lg transition-transform duration-200 hover:scale-105"
                    >
                        <Link to={{ pathname: `/product/${product.id}`, state: { product } }}>
                            <img
                                src={product.images[0].url}
                                alt={product.name}
                                className="w-full h-auto mb-4"
                            />
                        </Link>
                        <div className="product-info">
                            <h2 className="text-[16px] font-[700] text-[#252B42] text-center">{product.name}</h2>
                            <p className="text-[14px] font-[700] text-[#737373] text-center">
                                <span className="text-[#BDBDBD] line-through">
                                    ${product.price}
                                </span>
                                <span className="ml-2 text-[#23856D]">
                                    ${(product.price * 0.8).toFixed(2)}
                                </span>
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
        </div>
    );
}
