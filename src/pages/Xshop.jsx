import { useEffect, useState } from "react";
import axios from "axios";

function Products() {
    const [product, setproduct] = useState([]);

    const getproduct = async () => {
        const res = await axios.get("http://localhost:3001/products");
        setproduct(res.data);
    };

    useEffect(() => {
        getproduct();
    }, []);

    return (
        <div className="grid grid-cols-4 gap-6 p-10 mx-auto w-[84%] ">
            {product.map((item) => (
                <div
                    key={item.id}
                    className="bg-gray-100 rounded-xl p-5  shadow hover:shadow-lg transition">
                    <span className="text-[18px] inline-block bg-teal-700 text-white text-xs px-[15px]  py-1 rounded-[9px] mb-4  text-center">
                        {item.category}
                    </span>

                    <img
                        src={`${item.image}`}
                        alt={item.title}
                        className="w-[220px] h-[130px] object-contain mx-auto rounded-[10px]"/>

                    <h3 className="mt-4 text-gray-700 font-semibold text-[20px] border-b-1 border-gray-300 pb-[5px]">{item.title}</h3>
                    

                    <div className="flex  gap-2 mt-2 items-center">
                        <span className="line-through text-gray-400">$20.00</span>
                        <span className="text-green-600 font-bold">${item.price}</span>
                    </div>

                    <div className="text-orange-400 mt-2 opacity-[0.5]">★★★★★</div>
                </div>
            ))}
        </div>
    );
}

export default Products;