import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Cards = () => {
    const [cards, setCards] = useState([]);

    const getCards = async () => {
        try {
            const res = await axios.get("http://localhost:3003/cards");
            setCards(res.data);
        } catch (error) {
            console.error("Ошибка при получении данных:", error);
        }
    };

    useEffect(() => {
        getCards();
    }, []);

    return (
        <div className=" p-10 py-20 mx-auto w-[75%]" >
            <div className="flex justify-center items-center gap-6 mx-auto">
                <div className="flex flex-wrap gap-8">
                    {cards.map((card) => (
                        <div
                            key={card.id}
                            className="w-[48%] bg-white rounded-2xl overflow-hidden transition hover:shadow-xl"
                            style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}
                        >
                            <div className="relative h-[200px]">
                                <img
                                    src={card.img}
                                    alt={card.title}
                                    className="w-full h-full object-cover rounded-t-2xl"
                                />
                            </div>

                            <div
                                className="bg-white relative"
                                style={{
                                    marginTop: "-20px",
                                    borderRadius: "20px 20px 16px 16px",
                                    padding: "20px 20px 22px",
                                    zIndex: 2,
                                }}
                            >
                                

                                <h3 className="text-gray-900 font-semibold mb-2 text-[15px] leading-[1.4]">
                                    {card.title}
                                </h3>

                                <p className="text-gray-400 mb-4 text-[13px] leading-[1.6]">
                                    {card.description}
                                </p>
                                <Link to={`/blogsingle/${card.id}`}>
                                    <button className="flex items-center gap-2 text-[13px] border border-gray-200 rounded-lg px-4 py-1.5">
                                        Read More
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Cards;