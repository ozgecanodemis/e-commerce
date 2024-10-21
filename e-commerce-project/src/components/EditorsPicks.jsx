import React from 'react';
import editorImg1 from '../assets/editors1.jpg';
import editorImg2 from '../assets/editors2.jpg';
import editorImg3 from '../assets/editors3.jpg';
import editorImg4 from '../assets/editors4.jpg';
import '../index.css'; // Button stilleri için CSS dosyasını ekleyin

const EditorsPicks = () => {
    return (
        <section className="p-4 flex-row justify-center items-center ">
            {/* Başlık ve Açıklama */}
            <h3 className="w-[181px] text-[24px] font-[700] leading-[32px] mx-auto tracking-[0.1px] text-[#252B42] text-left font-montserrat mb-2">
                EDITOR'S PICK
            </h3>
            <p className="w-[181px] text-[14px] font-[400] leading-[20px] mx-auto tracking-[0.2px] text-[#737373] text-center font-montserrat mb-4">
                Check out our top picks for you this season.
            </p>

            {/* Kartlar */}
            <div className="flex flex-col gap-4">
                {/* Kart 1 */}
                <div
                    className="relative p-4 h-[500px] w-full rounded bg-cover bg-center flex flex-col justify-between"
                    style={{ backgroundImage: `url(${editorImg1})` }}
                >
                    <button className="button-s-2 absolute left-4 bottom-4">MEN</button>
                </div>

                {/* Kart 2 */}
                <div
                    className="relative p-4 h-[500px] w-full rounded bg-cover bg-center flex flex-col justify-between"
                    style={{ backgroundImage: `url(${editorImg2})` }}
                >
                    <button className="button-s-2 absolute left-4 bottom-4">WOMEN</button>
                </div>

                {/* Kart 3 */}
                <div
                    className="relative p-4 h-[242px] w-full rounded bg-cover bg-center flex flex-col justify-between"
                    style={{ backgroundImage: `url(${editorImg3})` }}
                >
                    <button className="button-s-2 absolute left-4 bottom-4"> ACCESSORIES</button>
                </div>

                {/* Kart 4 */}
                <div
                    className="relative p-4 h-[242px] w-full rounded bg-cover bg-center flex flex-col justify-between"
                    style={{ backgroundImage: `url(${editorImg4})` }}
                >
                    <button className="button-s-2 absolute left-4 bottom-4">KIDS</button>
                </div>
            </div>
        </section>
    );
};

export default EditorsPicks;
