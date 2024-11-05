import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from '../store/reducers/categoriesSlice';
import { Link } from 'react-router-dom';

const CategoryList = () => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categories.items);
    const status = useSelector((state) => state.categories.status);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchCategories());
        }
    }, [status, dispatch]);

    if (status === 'loading') return <p>Loading...</p>;
    if (status === 'failed') return <p>Error loading categories.</p>;

    return (
        <div>
            <h2>Top 5 Categories</h2>
            <ul>
                {categories.slice(0, 5).map((category) => (
                    <li key={category.id}>
                        <Link to={`/shop/${category.gender}/${category.title}`}>
                            {category.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryList;
