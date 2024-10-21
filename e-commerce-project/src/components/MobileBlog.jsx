// src/components/MobileBlog.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Clock, BarChart } from 'react-feather';

const MobileBlog = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        // Fake API'den veri çekimi
        const fetchArticles = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                // İlk üç makaleyi al
                setArticles(response.data.slice(0, 3));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchArticles();
    }, []);

    return (
        <section className="p-4 flex flex-col items-center gap-[30px]">

            <div className="flex flex-col justify-center items-center mb-8">
                <h3 className="font-[400] text-[40px] w-[263px] leading-[30px] text-center font-montserrat mb-4">
                    Part of the Neural Universe
                </h3>

                <p className="text-[14px] w-[263px] font-[400] text-[#737373] text-center font-montserrat mb-4">
                    Problems trying to resolve the conflict between
                </p>
                <div className="flex flex-col justify-center items-center gap-[25px]">
                    <button className="button-4">BUY NOW</button>
                    <button className="button-4">Learn More</button>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center mb-8">
                <h3 className="font-[400] text-[40px] w-[263px] leading-[30px] text-center font-montserrat mb-4">
                    Featured Products
                </h3>

                <p className="text-[14px] w-[263px] font-[400] text-[#737373] leading-[20px] tracking-[0.2px] text-center font-montserrat mb-4">
                    Problems trying to resolve the conflict between
                </p>
                {articles.map((article) => (
                    <div key={article.id} className="w-[329px] h-[606px] flex flex-col border border-gray-300 rounded-md p-4">
                        <img
                            src={`https://picsum.photos/330/300?random=${article.id}`}
                            alt="Article"
                            className="w-[330px] h-[300px] object-cover mb-4"
                        />

                        {/* Google Trending Links */}
                        <div className="flex space-x-2 mb-2">
                            <a href="#" className="text-[12px] text-[#23A6F0]">Google</a>
                            <a href="#" className="text-[12px] text-[#23A6F0]">Trending</a>
                            <a href="#" className="text-[12px] text-[#23A6F0]">New</a>
                        </div>

                        <h4 className="text-[var(--h4-size)] leading-[var(--h4-line-height)] font-[var(--h4-weight)] text-[#252B42] my-2">
                            {article.title}
                        </h4>
                        <p className="text-[14px] leading-[20px] text-[#737373] mb-2">{article.body}</p>
                        <div className="flex justify-between">
                            <div className="flex items-center">
                                <Clock className="text-[#23A6F0] mr-1" size={16} />
                                <p className="text-[12px] text-gray-500">Date: {new Date().toLocaleDateString()}</p>
                            </div>
                            <div className="flex items-center">
                                <BarChart className="text-[#23856D] mr-1" size={16} />
                                <p className="text-[12px] text-gray-500">Comments: 0</p>
                            </div>
                        </div>
                        <a href="#" className="text-[12px] text-[#23A6F0] mt-2">Learn More</a>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default MobileBlog;