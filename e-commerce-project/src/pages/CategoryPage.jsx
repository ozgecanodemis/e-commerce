import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { setFilter, setOffset } from '../store/actions/productActions';
import Spinner from '../components/Spinner';
import { useHistory } from 'react-router-dom';
import { fetchCategories, fetchProducts } from '../store/actions/authActions';

const CategoryPage = () => {
    const dispatch = useDispatch();
    const { gender, category, categoryId } = useParams();
    const categories = useSelector(state => state.product.categories);
    const products = useSelector(state => state.product.productList);
    const total = useSelector(state => state.product.total);
    const fetchState = useSelector(state => state.product.fetchState);
    const limit = useSelector(state => state.product.limit);
    const offset = useSelector(state => state.product.offset);
    const filter = useSelector(state => state.product.filter);
    const history = useHistory();

    const [sort, setSort] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = window.innerWidth <= 414 ? 4 : 16;
    const totalPages = Math.ceil(total / itemsPerPage);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    useEffect(() => {
        if (categoryId) {
            dispatch(setOffset(0));
            dispatch(setFilter(""));
            setSort("");
            history.replace(`/shop/${gender}/${category}/${categoryId}`);
        }
    }, [categoryId, gender, category, dispatch, history]);

    const createQueryString = useCallback(() => {
        const params = new URLSearchParams();

        if (categoryId) params.append("category", categoryId);
        if (filter) params.append("filter", filter);
        if (sort) params.append("sort", sort);
        if (limit) params.append("limit", limit);
        if (offset) params.append("offset", offset);

        return params.toString();
    }, [categoryId, filter, sort, limit, offset]);

    const loadProducts = useCallback(() => {
        const queryString = createQueryString();
        const newUrl = `/shop/${gender}/${category}/${categoryId}${queryString ? `?${queryString}` : ""}`;
        history.push(newUrl);
        dispatch(fetchProducts(queryString));
    }, [dispatch, createQueryString, history, gender, category, categoryId]);

    useEffect(() => {
        const params = new URLSearchParams(history.location.search);
        const urlFilter = params.get("filter");
        const urlSort = params.get("sort");
        const urlOffset = params.get("offset");

        if (urlFilter) dispatch(setFilter(urlFilter));
        if (urlSort) setSort(urlSort);
        if (urlOffset) dispatch(setOffset(parseInt(urlOffset)));
    }, [dispatch, history.location.search]);

    useEffect(() => {
        loadProducts();
    }, [categoryId, filter, sort, offset, loadProducts]);

    const handleSortChange = (e) => {
        setSort(e.target.value);
        dispatch(setOffset(0));
    };

    const handleFilterClick = () => {
        dispatch(setOffset(0));
        loadProducts();
    };

    if (fetchState === "loading") {
        return <Spinner />;
    }

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <main className="flex-grow container mx-auto px-4 py-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center md:text-left">Shop</h2>

                <div className="flex flex-col md:flex-row justify-between mb-8">
                    <div className="flex items-center justify-center md:justify-start space-x-4 mb-4 md:mb-0">
                        <span>Views:</span>
                        <button className="p-2 border rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-grid h-5 w-5">
                                <rect width="7" height="7" x="3" y="3" rx="1"></rect>
                                <rect width="7" height="7" x="14" y="3" rx="1"></rect>
                                <rect width="7" height="7" x="14" y="14" rx="1"></rect>
                                <rect width="7" height="7" x="3" y="14" rx="1"></rect>
                            </svg>
                        </button>
                        <button className="p-2 border rounded">
                            <i className="fa-solid fa-list text-muted-foreground"></i>
                        </button>
                    </div>
                    <div className="flex items-center justify-center md:justify-end space-x-4">
                        <select className="p-2 border rounded w-[141px]" onChange={handleSortChange} value={sort}>
                            <option value="">Popularity</option>
                            <option value="price">Price</option>
                        </select>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleFilterClick}>Filter</button>
                    </div>
                </div>

                {products.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {products.map((product) => (
                            <div key={product.id} className="product-card p-4 rounded-lg transition-transform duration-200 hover:scale-105">
                                <Link to={`/product/${product.id}`}>
                                    <img src={product.images[0].url} alt={product.name} className="w-full h-48 object-cover mb-4" />
                                </Link>
                                <div className="text-center">
                                    <h3 className="text-[16px] font-bold text-[#252B42] mb-2">{product.name}</h3>
                                    <p className="text-[14px] text-[#737373] mb-2">{product.description}</p>
                                    <p className="text-blue-600 font-bold">${product.price.toFixed(2)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-600">No products found.</p>
                )}
            </main>
        </div>
    );
};

export default CategoryPage;
