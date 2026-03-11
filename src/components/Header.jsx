import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react";
import { FaLeaf, FaStar, FaShoppingCart, FaArrowRight, FaSeedling, FaAward, FaTruck, FaHeart, FaBars, FaTimes, FaCheck, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { MdLocalOffer, MdNaturePeople } from "react-icons/md";
import { GiFruitBowl } from "react-icons/gi";
import { BsInstagram, BsFacebook, BsTwitterX } from "react-icons/bs";



const Header = () => {
  const NAV_LINKS = ["Home", "About", "Products", "Blog", "Contact"];

const PRODUCTS = [
  { id: 1, name: "Fresh Strawberries", price: "$4.99", oldPrice: "$6.99", img: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=600&h=600&fit=crop", tag: "Best Seller", tagColor: "badge-error" },
  { id: 2, name: "Organic Oranges", price: "$3.49", oldPrice: "$5.00", img: "https://images.unsplash.com/photo-1547514701-42782101795e?w=600&h=600&fit=crop", tag: "Fresh", tagColor: "badge-success" },
  { id: 3, name: "Mixed Veggies", price: "$5.99", oldPrice: "$8.00", img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&h=600&fit=crop", tag: "10% OFF", tagColor: "badge-warning" },
  { id: 4, name: "Dragon Fruit", price: "$6.49", oldPrice: "$9.00", img: "https://images.unsplash.com/photo-1527325678964-54921661f888?w=600&h=600&fit=crop", tag: "Exotic", tagColor: "badge-info" },
  { id: 5, name: "Fresh Blueberries", price: "$5.49", oldPrice: "$7.50", img: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=600&h=600&fit=crop", tag: "Popular", tagColor: "badge-secondary" },
  { id: 6, name: "Ripe Mangoes", price: "$4.29", oldPrice: "$6.00", img: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=600&h=600&fit=crop", tag: "Seasonal", tagColor: "badge-warning" },
  { id: 7, name: "Cherry Tomatoes", price: "$3.99", oldPrice: "$5.50", img: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=600&h=600&fit=crop", tag: "Organic", tagColor: "badge-success" },
  { id: 8, name: "Avocados", price: "$5.99", oldPrice: "$8.00", img: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=600&h=600&fit=crop", tag: "Trending", tagColor: "badge-primary" },
];

const FEATURES = [
  { icon: <FaSeedling size={24} />, title: "Organic Foods Only", desc: "All products are certified organic, grown without pesticides or artificial chemicals for your health." },
  { icon: <FaAward size={24} />, title: "Quality Standards", desc: "We partner only with accredited farmers who meet our strict quality benchmarks every season." },
  { icon: <FaTruck size={24} />, title: "Fast Delivery", desc: "Fresh produce delivered to your doorstep within 24 hours of harvesting from the farm." },
];

const TESTIMONIALS = [
  { name: "Sarah Mitchell", role: "Health Coach", text: "The freshest produce I've ever tasted! Every delivery arrives perfectly packed and bursting with flavor.", rating: 5, avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&crop=face" },
  { name: "James Karimov", role: "Chef & Food Blogger", text: "Amazing quality organic vegetables. My restaurant guests always compliment the freshness of ingredients!", rating: 5, avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=face" },
  { name: "Aisha Tashkentova", role: "Nutritionist", text: "Best online grocery service I've used. The fruits are incredibly fresh and delivery is always on time.", rating: 5, avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=face" },
];

const CATEGORIES = [
  { name: "Fresh Fruits", img: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=400&h=300&fit=crop", count: "120+ items" },
  { name: "Vegetables", img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop", count: "85+ items" },
  { name: "Exotic Fruits", img: "https://images.unsplash.com/photo-1571575173700-afb9492e6a50?w=400&h=300&fit=crop", count: "40+ items" },
  { name: "Berries", img: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400&h=300&fit=crop", count: "30+ items" },
];

const STATS = [["500+", "Products"], ["50K+", "Customers"], ["100%", "Organic"], ["24h", "Delivery"]];
  const [menuOpen, setMenuOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [scrolled, setScrolled] = useState(false);
  const [liked, setLiked] = useState({});
  const [activeTab, setActiveTab] = useState("All");
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleLike = (id) => setLiked((l) => ({ ...l, [id]: !l[id] }));

  const addToCart = (product) => {
    setCart((c) => [...c, product]);
    setToast(product.name);
    setTimeout(() => setToast(null), 2500);
  };

  const cartCount = cart.length;
  return (
    <div>
      <div className={`navbar fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-10 ${scrolled ? "bg-white/96 backdrop-blur-lg shadow-lg py-1" : "bg-transparent py-3"}`}>
           {/* Logo */}
           <div className="navbar-start">
             <div className="flex items-center gap-2.5">
               <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg,#2d6a4f,#57a85e)" }}>
                 <FaLeaf className="text-white" size={15} />
               </div>
               <span className="font-playfair font-black text-xl text-gray-900">
                 Fresh<span className="text-green-700">Organic</span>
               </span>
             </div>
           </div>
   
           {/* Desktop links */}
           <div className="navbar-center hidden lg:flex">
             <ul className="flex items-center gap-8">
               {NAV_LINKS.map(l => <li key={l}><a href="#" className="nav-item text-gray-700">{l}</a></li>)}
             </ul>
           </div>
   
           {/* Right */}
           <div className="navbar-end flex items-center gap-2">
             <div className="indicator">
               <span className={`indicator-item badge badge-error badge-sm font-lato font-bold text-white ${cartCount === 0 ? "hidden" : ""}`}>{cartCount}</span>
               <button className="btn btn-ghost btn-circle text-gray-700 hover:bg-green-50">
                 <FaShoppingCart size={19} />
               </button>
             </div>
             <button className="btn hidden lg:flex text-white border-0 rounded-full px-6 font-lato font-bold text-sm" style={{ background: "linear-gradient(135deg,#e74c6f,#c0392b)" }}>
               Order Now <FaArrowRight size={13} />
             </button>
             <button className="btn btn-ghost btn-circle lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
               {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
             </button>
           </div>
         </div>
    </div>
  )
}

export default Header