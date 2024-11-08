import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { setFilter, setOffset } from '../store/actions/productActions';
import ProductPage from '../components/ProductPage';
import Spinner from '../components/Spinner'; // Ensure this component is created
import CategoryList from '../components/CategoryList';
import { useHistory } from 'react-router-dom';
import { fetchCategories, fetchProducts } from '../store/actions/authActions';

const ShopPage = () => {
    const dispatch = useDispatch();
    const { gender, category, categoryId } = useParams();
    const categories = useSelector(state => state.product.categories);
    const products = useSelector(state => state.product.productList);
    const total = useSelector(state => state.product.total);
    const fetchState = useSelector(state => state.product.fetchState);
    const limit = useSelector(state => state.product.limit)
    const offset = useSelector(state => state.product.offset)
    const filter = useSelector(state => state.product.filter)
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

    const handleFilterChange = (e) => {
        dispatch(setFilter(e.target.value));
    };

    const handleFilterClick = () => {
        dispatch(setOffset(0));
        loadProducts();
    };

    const topCategories = categories
        .filter(category => category && category.title && category.rating)
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 5);

    if (fetchState === "loading") {
        return <Spinner />;
    }

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <main className="flex-grow container mx-auto px-4 py-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center md:text-left">Shop</h2>
                <CategoryList />

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
                {products.map((item, index) => {
                    <div key={index}>
                        <h1></h1>

                    </div>
                })}
                <div className="mt-6 w-full">
                    <ProductPage products={products} />
                </div>
            </main>
        </div>
    );
};

export default ShopPage;
