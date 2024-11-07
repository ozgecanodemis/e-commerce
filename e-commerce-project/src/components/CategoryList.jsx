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
            <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center limited-width mx-20">
                {topCategories.map((category) => (
                    <div key={category.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
                        <div className="relative pb-[100%]">
                            <div className="absolute inset-0 bg-gray-200 overflow-hidden shadow-md">
                                <img src={category.img} alt={category.title} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center">
                                    <Link to={`/shop/${category.gender}/${category.title.toLowerCase()}`}>
                                        <h2 className="text-white text-lg font-bold text-center">{category.title}</h2>
                                    </Link>
                                    <p className="text-white text-sm text-center">Rating: {category.rating.toFixed(1)} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div >
    );
};

export default CategoryList;