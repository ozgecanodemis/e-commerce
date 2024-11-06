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

    // Create a shallow copy of the array before sorting
    const topCategories = [...categories]
        .sort((a, b) => b.rating - a.rating) // Get top 5 based on rating
        .slice(0, 5);

    return (
        <div>
            <h2>Top 5 Categories</h2>
            <ul>
                {topCategories.map((category) => (
                    <li key={category.id} className="flex items-center mb-4">
                        <img src={category.img} alt={category.title} className="w-12 h-12 mr-4" />
                        <Link to={`/shop/${category.gender}/${category.code}`} className="text-lg font-semibold">
                            {category.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryList;
