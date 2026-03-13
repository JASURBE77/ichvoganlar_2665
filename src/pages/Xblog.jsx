import React, { useState, useEffect } from "react";
import axios from "axios";

const Cards = () => {
    const [cards, setCards] = useState([]);

    const getCards = async () => {
        try {
            const res = await axios.get("http://localhost:3001/cards");
            setCards(res.data);
        } catch (error) {
            console.error("Ошибка при получении данных:", error);
        }
    };

    useEffect(() => {
        getCards();
    }, []);

    return (
        <div className="min-h-screen  p-10 mx-auto w-[85%]">
            <div className="w-[900px] mx-auto flex flex-wrap gap-[20px]">
                <div className="grid md:grid-cols-3 gap-6">
                    {cards.map((card) => (
                        <div
                            key={card.id}
                            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
                        >
                            <img
                                src={`https://picsum.photos/400/250?random=${card.id}`}
                                alt={card.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-5">
                                <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                                <p className="text-gray-500 text-sm mb-4">{card.description}</p>
                                <button className="text-green-600 font-semibold hover:underline">
                                    Read More →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Cards;