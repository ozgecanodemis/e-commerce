import React, { useEffect, useState } from 'react'; import axios from 'axios'; import '../index.css'; import { Link } from 'react-router-dom'; const ProductPage = ({ limit, page }) => {
    const [products, setProducts] = useState([]); const [loading, setLoading] = useState(true); useEffect(() => { axios.get('https://fakestoreapi.com/products').then(response => { setProducts(response.data); setLoading(false); }).catch(error => { console.error('Error fetching data: ', error); setLoading(false); }); }, []); if (loading) { return <p>Loading products...</p>; } const startIndex = limit ? (page - 1) * limit : 0; const limitedProducts = limit ? products.slice(startIndex, startIndex + limit) : products; // 414px'den küçükse sadece ilk 4 ürünü al 




    const displayProducts = window.innerWidth < 414 ? limitedProducts.slice(0, 4) : limitedProducts; return (<div className="p-4 mt-20"> <div className="w-full max-w-md flex flex-col justify-center items-center text-center mx-auto mb-6"> <h6 className="text-[20px] font-[400] text-[#737373] leading-[30px] tracking-[0.2px] font-montserrat mb-4"> Featured Products </h6> <h1 className="text-[24px] font-[700] text-[#252B42] leading-[32px] tracking-[0.1px] font-montserrat mb-4"> BESTSELLER PRODUCTS </h1> <p className="text-[14px] font-[400] text-[#737373] leading-[20px] tracking-[0.2px] font-montserrat"> Problems trying to resolve the conflict between </p> </div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto"> {displayProducts.map(product => (<div key={product.id} className="product-card p-4  rounded-lgtransition-transform duration-200 hover:scale-105"> <Link to={`/product/${product.id}`}> <img src={product.image} alt={product.title} className="w-full h-auto mb-4" /> </Link> <div className="product-info"> <h2 className="text-[16px] font-[700] text-[#252B42] leading-[24px] tracking-[0.1px] text-center font-montserrat"> {product.title} </h2> <p className="text-[14px] font-[700] text-[#737373] leading-[24px] tracking-[0.2px] text-center font-montserrat"> <span className="text-[#BDBDBD] text-[16px] font-[700] leading-[24px] tracking-[0.1px] text-center"> ${product.price} </span> <span className="ml-2 text-[#23856D] text-[16px] font-[700] leading-[24px] tracking-[0.1px] text-center"> ${(product.price * 0.8).toFixed(2)} </span> </p> <div className="flex justify-center gap-2 mt-2"> <span className="w-4 h-4 rounded-full bg-[#23A6F0]"></span> <span className="w-4 h-4 rounded-full bg-[#23856D]"></span> <span className="w-4 h-4 rounded-full bg-[#E77C40]"></span> <span className="w-4 h-4 rounded-full bg-[#252B42]"></span> </div> </div> </div>))} </div> </div>);
}; export default ProductPage; 