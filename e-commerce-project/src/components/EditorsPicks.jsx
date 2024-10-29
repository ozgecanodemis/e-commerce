import React from 'react';
import editorImg1 from '../assets/editors1.jpg';
import editorImg2 from '../assets/editors2.jpg';
import editorImg3 from '../assets/editors3.jpg';
import editorImg4 from '../assets/editors4.jpg';
import '../index.css';

const EditorsPicks = ({ categoryImages }) => {
    return (
        <div className='md:mt-12 md:flex-col'>
            <div className='flex flex-col items-center mb-8 md:mb-0'>
                <h3 className='font-montserrat text-[#252B42] font-bold text-lg'>EDITOR'S PICK</h3>
                <div className='flex flex-col items-center md:flex-row md:gap-1'>
                    <p className='text-[#737373] text-xs'>Problems trying to resolve</p>
                    <p className='text-[#737373] text-xs'>the conflict between</p>
                </div>
            </div>
            <div className="w-full bg-white flex justify-center items-center overflow-x-hidden md:h-[80vh]">
                <div className="w-[85%] flex flex-col md:flex-row md:justify-center md:gap-6 md:mt-[-80px]">
                    {/* First column */}
                    <div
                        className="h-[50vh] border border-gray-300 mb-4 bg-cover bg-center md:w-[20vw]"
                        style={{ backgroundImage: `url(${editorImg1})` }}
                    >
                        <div className="w-full h-full bg-black bg-opacity-30 flex items-end p-4">
                            <button className="bg-white text-black py-2 px-12 font-bold">
                                MEN
                            </button>
                        </div>
                    </div>

                    {/* Second column */}
                    <div
                        className="h-[50vh] border border-gray-300 mb-4 bg-cover bg-center"
                        style={{ backgroundImage: `url(${editorImg2})` }}
                    >
                        <div className="w-full h-full bg-black bg-opacity-30 flex items-end p-4">
                            <button className="bg-white text-black py-2 px-8 font-bold">
                                WOMEN
                            </button>
                        </div>
                    </div>

                    {/* Third column with two rows */}
                    <div className="h-[60vh] flex flex-col md:h-[50vh]">
                        {/* First row of the third column */}
                        <div
                            className="flex-1 border border-gray-300 mb-4 bg-cover bg-center"
                            style={{ backgroundImage: `url(${editorImg3})` }}
                        >
                            <div className="w-full h-full bg-black bg-opacity-30 flex items-end p-4">
                                <button className="bg-white text-black py-2 px-6 font-bold">
                                    ACCESSORIES
                                </button>
                            </div>
                        </div>

                        {/* Second row of the third column */}
                        <div
                            className="flex-1 border border-gray-300 bg-cover bg-center"
                            style={{ backgroundImage: `url(${editorImg4})` }}
                        >
                            <div className="w-full h-full bg-black bg-opacity-30 flex items-end p-4">
                                <button className="bg-white text-black py-2 px-10 font-bold">
                                    KIDS
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditorsPicks;