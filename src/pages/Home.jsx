import { useState, useEffect } from "react";
import { FaLeaf, FaStar, FaShoppingCart, FaArrowRight, FaSeedling, FaAward, FaTruck, FaHeart, FaBars, FaTimes, FaCheck, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { MdLocalOffer, MdNaturePeople } from "react-icons/md";
import { GiFruitBowl } from "react-icons/gi";
import { BsInstagram, BsFacebook, BsTwitterX } from "react-icons/bs";

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

export default function FoodLanding() {
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
  
      {/* ── NAVBAR ── */}
   

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="fixed top-16 left-0 right-0 z-40 bg-white/97 backdrop-blur-md shadow-xl border-t border-gray-100 px-6 py-5 flex flex-col gap-4 lg:hidden">
          {NAV_LINKS.map(l => (
            <a key={l} href="#" className="nav-item text-gray-700 py-2 border-b border-gray-50 last:border-0">{l}</a>
          ))}
          <button className="btn text-white border-0 rounded-full font-lato font-bold mt-2" style={{ background: "linear-gradient(135deg,#e74c6f,#c0392b)" }}>
            Order Now <FaArrowRight size={13} />
          </button>
        </div>
      )}

      {/* ══════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════ */}
      <section className="hero-bg min-h-screen flex items-center pt-20 relative overflow-hidden grain-overlay">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.07]" style={{ background: "radial-gradient(circle,#3a7d44,transparent)", transform: "translate(30%,-30%)" }} />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-[0.06]" style={{ background: "radial-gradient(circle,#e74c6f,transparent)", transform: "translate(-30%,30%)" }} />
        <div className="absolute top-1/3 left-1/2 w-2 h-2 rounded-full bg-green-400 opacity-40" />
        <div className="absolute top-2/3 right-1/3 w-3 h-3 rounded-full" style={{ background: "#e74c6f", opacity: 0.3 }} />

        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center w-full py-16">
          {/* ── Left Text ── */}
          <div className="anim-up">
            <div className="badge badge-outline border-rose-400 text-rose-500 font-lato font-bold tracking-widest text-xs px-4 py-3 mb-6 gap-2 uppercase">
              <FaLeaf size={11} /> 100% Natural Food
            </div>
            <h1 className="font-playfair font-black leading-[1.08] mb-6 text-gray-900" style={{ fontSize: "clamp(40px,5.5vw,68px)" }}>
              Choose the Best<br />
              <span className="text-green-700">Healthier Way</span><br />
              of Life
            </h1>
            <p className="font-lato text-gray-500 text-lg leading-relaxed mb-10 max-w-[420px]">
              Discover premium organic fruits and vegetables, sourced directly from accredited farmers. Fresh, nutritious, delivered to your door.
            </p>

            <div className="flex gap-4 flex-wrap mb-12">
              <button className="btn rounded-full px-8 text-white border-0 font-lato font-bold text-base gap-2" style={{ background: "linear-gradient(135deg,#2d6a4f,#3a7d44)", boxShadow: "0 8px 28px rgba(58,125,68,0.32)" }}>
                Explore Now <FaArrowRight size={14} />
              </button>
              <button className="btn btn-outline rounded-full px-7 border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white hover:border-green-700 font-lato font-bold text-base transition-all">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 md:gap-12">
              {STATS.map(([n, l]) => (
                <div key={l} className="text-center md:text-left">
                  <div className="font-playfair font-black text-3xl text-gray-900">{n}</div>
                  <div className="font-lato text-[11px] text-gray-400 tracking-[2px] uppercase mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right Image ── */}
          <div className="anim-left relative flex justify-center lg:justify-end">
            <div className="float relative w-full max-w-[480px]">
              <img
                src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&h=800&fit=crop"
                alt="Healthy organic food"
                className="w-full rounded-[2.5rem] object-cover"
                style={{ height: 520, boxShadow: "0 40px 90px rgba(58,125,68,0.25), 0 0 0 1px rgba(58,125,68,0.08)" }}
              />

              {/* Floating badge — top left */}
              <div className="absolute -left-8 top-10 bg-white rounded-2xl px-4 py-3.5 flex items-center gap-3 shadow-2xl border border-gray-50">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg,#2d6a4f,#57a85e)" }}>
                  <FaLeaf className="text-white" size={16} />
                </div>
                <div>
                  <div className="font-lato font-bold text-xs text-gray-800">100% Organic</div>
                  <div className="font-lato text-[11px] text-gray-400">Certified Fresh</div>
                </div>
              </div>

              {/* Floating badge — bottom right */}
              <div className="absolute -right-8 bottom-14 bg-white rounded-2xl px-4 py-3.5 shadow-2xl border border-gray-50">
                <div className="flex gap-0.5 mb-1.5">
                  {[...Array(5)].map((_, i) => <FaStar key={i} size={12} className="text-amber-400" />)}
                </div>
                <div className="font-playfair font-bold text-sm text-gray-900">4.9 / 5.0</div>
                <div className="font-lato text-[11px] text-gray-400 mt-0.5">50K+ Reviews</div>
              </div>

              {/* Floating badge — bottom left */}
              <div className="absolute left-4 -bottom-5 bg-white rounded-2xl px-4 py-3 flex items-center gap-2.5 shadow-xl border border-gray-50">
                <div className="avatar-group -space-x-3">
                  {["img=47", "img=12", "img=32"].map(q => (
                    <div key={q} className="avatar border-2 border-white">
                      <div className="w-8 rounded-full">
                        <img src={`https://i.pravatar.cc/60?${q}`} alt="" />
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  <div className="font-lato font-bold text-xs text-gray-800">Happy Customers</div>
                  <div className="font-lato text-[11px] text-green-600">+50,000 joined</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CATEGORIES
      ══════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="badge badge-outline border-rose-400 text-rose-500 font-lato font-bold tracking-widest text-xs px-4 py-3 mb-4 gap-2 uppercase">
              <GiFruitBowl size={13} /> Browse Categories
            </div>
            <h2 className="font-playfair font-black text-gray-900" style={{ fontSize: "clamp(26px,3vw,40px)" }}>
              Shop by <span className="text-green-700">Category</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {CATEGORIES.map((c) => (
              <div key={c.name} className="card card-compact img-scale cursor-pointer group rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <figure className="h-40">
                  <img src={c.img} alt={c.name} className="w-full h-full object-cover" />
                </figure>
                <div className="card-body bg-white py-4 px-4">
                  <h3 className="font-playfair font-bold text-base text-gray-900">{c.name}</h3>
                  <p className="font-lato text-xs text-green-600 font-semibold">{c.count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PROMO BANNERS
      ══════════════════════════════════════ */}
      <section className="py-6 pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Red promo */}
          <div className="relative rounded-3xl overflow-hidden cursor-pointer group" style={{ minHeight: 220, background: "#b01235" }}>
            <img
              src="https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=600&h=400&fit=crop"
              alt="Fresh Fruits"
              className="absolute right-0 top-0 w-[55%] h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="overlay-red absolute inset-0" />
            <div className="relative z-10 p-8 flex flex-col justify-center h-full">
              <span className="font-lato text-[11px] font-bold tracking-[3px] uppercase text-pink-200 block mb-3">Natural!!</span>
              <h3 className="font-playfair font-black text-white leading-tight mb-6" style={{ fontSize: "clamp(24px,2.5vw,34px)" }}>
                Get Garden<br />Fresh Fruits
              </h3>
              <button className="btn btn-sm rounded-full bg-white text-rose-600 border-0 font-lato font-bold w-fit gap-2 hover:bg-rose-50 shadow-lg">
                Shop Now <FaArrowRight size={11} />
              </button>
            </div>
          </div>

          {/* Green promo */}
          <div className="relative rounded-3xl overflow-hidden cursor-pointer group" style={{ minHeight: 220, background: "#1b4332" }}>
            <img
              src="https://images.unsplash.com/photo-1518843875459-f738682238a6?w=600&h=400&fit=crop"
              alt="Fresh Vegetables"
              className="absolute right-0 top-0 w-[55%] h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="overlay-green absolute inset-0" />
            <div className="relative z-10 p-8 flex flex-col justify-center h-full">
              <div className="badge badge-error text-white border-0 font-lato font-bold text-xs gap-1 mb-3 w-fit">
                <MdLocalOffer size={12} /> Offer!!
              </div>
              <h3 className="font-playfair font-black text-white leading-tight mb-6" style={{ fontSize: "clamp(24px,2.5vw,34px)" }}>
                Get 10% off<br />on Vegetables
              </h3>
              <button className="btn btn-sm rounded-full bg-white text-green-800 border-0 font-lato font-bold w-fit gap-2 hover:bg-green-50 shadow-lg">
                Grab Deal <FaArrowRight size={11} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          ABOUT SECTION
      ══════════════════════════════════════ */}
      <section className="py-20 section-bg">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          {/* Image collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1557800636-894a64c1696f?w=500&h=600&fit=crop"
                alt="Organic fruits"
                className="w-full rounded-3xl object-cover col-span-1 row-span-2"
                style={{ height: 400, boxShadow: "0 20px 50px rgba(0,0,0,0.1)" }}
              />
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=280&fit=crop"
                alt="Farm fresh"
                className="w-full rounded-2xl object-cover"
                style={{ height: 190, boxShadow: "0 12px 30px rgba(0,0,0,0.08)" }}
              />
              <img
                src="https://images.unsplash.com/photo-1475609471617-0ef53b59cff5?w=400&h=280&fit=crop"
                alt="Healthy vegetables"
                className="w-full rounded-2xl object-cover"
                style={{ height: 190, boxShadow: "0 12px 30px rgba(0,0,0,0.08)" }}
              />
            </div>
            {/* Experience badge */}
            <div className="absolute -bottom-5 -right-4 text-white rounded-2xl px-6 py-4 shadow-2xl" style={{ background: "linear-gradient(135deg,#2d6a4f,#3a7d44)" }}>
              <div className="font-playfair font-black text-4xl">15+</div>
              <div className="font-lato text-xs text-green-100 mt-1 tracking-wide">Years Experience</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="badge badge-outline border-rose-400 text-rose-500 font-lato font-bold tracking-widest text-xs px-4 py-3 mb-6 gap-2 uppercase">
              <MdNaturePeople size={14} /> About the Farm
            </div>
            <h2 className="font-playfair font-black leading-tight mb-5 text-gray-900" style={{ fontSize: "clamp(26px,3.5vw,44px)" }}>
              We Believe in Working<br />
              <span className="text-green-700">Accredited Farmers</span>
            </h2>
            <p className="font-lato text-gray-500 leading-relaxed mb-10 text-base">
              Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>

            <div className="flex flex-col gap-5 mb-10">
              {FEATURES.map((f) => (
                <div key={f.title} className="flex gap-4 items-start">
                  <div className="w-13 h-13 min-w-[52px] rounded-2xl flex items-center justify-center text-green-700 flex-shrink-0" style={{ width: 52, height: 52, background: "linear-gradient(135deg,#e8f5e9,#c8e6c9)" }}>
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="font-playfair font-bold text-gray-900 text-base mb-1">{f.title}</h4>
                    <p className="font-lato text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="btn rounded-full px-9 text-white border-0 font-lato font-bold text-base gap-2" style={{ background: "linear-gradient(135deg,#2d6a4f,#3a7d44)", boxShadow: "0 8px 28px rgba(58,125,68,0.3)" }}>
              Shop Now <FaArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PRODUCTS
      ══════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-6">
            <div className="badge badge-outline border-rose-400 text-rose-500 font-lato font-bold tracking-widest text-xs px-4 py-3 mb-4 gap-2 uppercase">
              <GiFruitBowl size={13} /> Our Products
            </div>
            <h2 className="font-playfair font-black text-gray-900" style={{ fontSize: "clamp(26px,3vw,42px)" }}>
              Fresh From the <span className="text-green-700">Garden</span>
            </h2>
          </div>

          {/* Filter tabs */}
          <div className="flex justify-center mb-10">
            <div className="tabs tabs-boxed bg-gray-100 p-1 rounded-full font-lato font-semibold text-sm gap-1">
              {["All", "Fruits", "Vegetables", "Exotic"].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`tab rounded-full px-5 transition-all font-lato font-semibold ${activeTab === tab ? "tab-active bg-green-700 text-white shadow-md" : "text-gray-600 hover:text-green-700"}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {PRODUCTS.map((p) => (
              <div key={p.id} className="card card-compact bg-white rounded-3xl border border-gray-100 shadow-sm card-lift hover:shadow-2xl overflow-hidden">
                <figure className="relative img-scale">
                  <img src={p.img} alt={p.name} className="w-full object-cover" style={{ height: 200 }} />
                  <div className={`badge ${p.tagColor} text-white border-0 absolute top-3 left-3 font-lato font-bold text-[11px] px-2.5`}>{p.tag}</div>
                  <button
                    onClick={() => toggleLike(p.id)}
                    className="btn btn-circle btn-sm bg-white border-0 shadow-md absolute top-3 right-3 hover:scale-110 transition-transform"
                  >
                    <FaHeart size={13} style={{ color: liked[p.id] ? "#e74c6f" : "#ccc" }} />
                  </button>
                </figure>
                <div className="card-body p-4">
                  <h4 className="font-playfair font-bold text-sm text-gray-900">{p.name}</h4>
                  <div className="flex gap-0.5 my-1">
                    {[...Array(5)].map((_, i) => <FaStar key={i} size={11} className="text-amber-400" />)}
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <div>
                      <span className="font-playfair font-black text-lg text-green-700">{p.price}</span>
                      <span className="font-lato text-xs text-gray-400 line-through ml-2">{p.oldPrice}</span>
                    </div>
                    <button
                      onClick={() => addToCart(p)}
                      className="btn btn-circle btn-sm border-0 text-white hover:scale-110 transition-transform"
                      style={{ background: "linear-gradient(135deg,#2d6a4f,#3a7d44)" }}
                    >
                      <FaShoppingCart size={12} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="btn btn-outline rounded-full px-10 border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white hover:border-green-700 font-lato font-bold gap-2 transition-all">
              View All Products <FaArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          OFFER STRIP
      ══════════════════════════════════════ */}
      <div className="py-5 flex items-center justify-center gap-8 font-lato font-bold text-white text-sm overflow-hidden" style={{ background: "linear-gradient(135deg,#e74c6f,#c0183e)" }}>
        {["🌿 Free delivery on orders over $30", "🍎 New arrivals every Monday", "🥦 100% Certified Organic", "⭐ Rated #1 Organic Store 2026"].map(t => (
          <span key={t} className="whitespace-nowrap px-4">{t}</span>
        ))}
      </div>

      {/* ══════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════ */}
      <section className="py-20" style={{ background: "linear-gradient(150deg,#1b4332 0%,#2d6a4f 60%,#1b4332 100%)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="font-lato text-[11px] font-bold tracking-[3px] uppercase text-green-300 block mb-4">Testimonials</span>
            <h2 className="font-playfair font-black text-white" style={{ fontSize: "clamp(26px,3vw,42px)" }}>
              What Our <span className="text-amber-400">Customers Say</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={t.name} className="card bg-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-7 hover:bg-white/15 transition-all duration-300 hover:-translate-y-2">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => <FaStar key={j} size={14} className="text-amber-400" />)}
                </div>
                <p className="font-lato text-white/80 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="w-12 rounded-full ring-2 ring-green-400 ring-offset-2 ring-offset-transparent">
                      <img src={t.avatar} alt={t.name} />
                    </div>
                  </div>
                  <div>
                    <div className="font-playfair font-bold text-white text-sm">{t.name}</div>
                    <div className="font-lato text-green-300 text-xs mt-0.5">{t.role}</div>
                    <div className="font-lato text-green-400 text-[11px] flex items-center gap-1 mt-0.5">
                      <FaCheck size={9} /> Verified Buyer
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA SECTION
      ══════════════════════════════════════ */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #3a7d44 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <div className="badge badge-outline border-rose-400 text-rose-500 font-lato font-bold tracking-widest text-xs px-4 py-3 mb-6 gap-2 uppercase">
            Get Started Today
          </div>
          <h2 className="font-playfair font-black text-gray-900 mb-6" style={{ fontSize: "clamp(28px,4vw,50px)" }}>
            Start Your Healthy<br /><span className="text-green-700">Journey Today</span>
          </h2>
          <p className="font-lato text-gray-500 text-base leading-relaxed mb-12 max-w-lg mx-auto">
            Join 50,000+ happy customers who trust FreshOrganic for their daily dose of nature's best. First order gets 15% off!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="btn btn-lg rounded-full px-10 text-white border-0 font-lato font-bold gap-2" style={{ background: "linear-gradient(135deg,#2d6a4f,#3a7d44)", boxShadow: "0 10px 35px rgba(58,125,68,0.35)" }}>
              Shop Now <FaArrowRight size={15} />
            </button>
            <button className="btn btn-lg rounded-full px-10 text-white border-0 font-lato font-bold gap-2" style={{ background: "linear-gradient(135deg,#e74c6f,#c0392b)", boxShadow: "0 10px 35px rgba(231,76,111,0.35)" }}>
              Get 15% Off <MdLocalOffer size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FOOTER
      ══════════════════════════════════════ */}
      <footer className="bg-gray-950 text-gray-400 pt-16 pb-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg,#2d6a4f,#57a85e)" }}>
                  <FaLeaf className="text-white" size={15} />
                </div>
                <span className="font-playfair font-black text-xl text-white">
                  Fresh<span className="text-green-500">Organic</span>
                </span>
              </div>
              <p className="font-lato text-sm leading-relaxed mb-6">Premium organic produce delivered fresh from accredited farms straight to your door.</p>
              <div className="flex gap-3">
                {[BsInstagram, BsFacebook, BsTwitterX].map((Icon, i) => (
                  <button key={i} className="btn btn-circle btn-sm bg-white/10 border-0 text-gray-400 hover:bg-green-700 hover:text-white transition-all">
                    <Icon size={14} />
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-playfair font-bold text-white text-base mb-5">Quick Links</h4>
              <ul className="flex flex-col gap-3">
                {["Home", "About Us", "Products", "Blog", "Contact"].map(l => (
                  <li key={l}><a href="#" className="font-lato text-sm hover:text-green-400 transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="font-playfair font-bold text-white text-base mb-5">Categories</h4>
              <ul className="flex flex-col gap-3">
                {["Fresh Fruits", "Vegetables", "Exotic Fruits", "Berries", "Herbs"].map(l => (
                  <li key={l}><a href="#" className="font-lato text-sm hover:text-green-400 transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-playfair font-bold text-white text-base mb-5">Contact Us</h4>
              <div className="flex flex-col gap-4">
                {[
                  { icon: <FaPhone size={13} />, text: "+1 (555) 123-4567" },
                  { icon: <FaEnvelope size={13} />, text: "hello@freshorganic.com" },
                  { icon: <FaMapMarkerAlt size={13} />, text: "123 Farm Lane, Green Valley" },
                ].map(({ icon, text }) => (
                  <div key={text} className="flex items-start gap-3 font-lato text-sm">
                    <span className="text-green-500 mt-0.5 flex-shrink-0">{icon}</span>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="divider divider-neutral opacity-20 my-0" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6">
            <p className="font-lato text-xs text-gray-600">© 2026 FreshOrganic. All rights reserved.</p>
            <div className="flex gap-6">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(l => (
                <a key={l} href="#" className="font-lato text-xs text-gray-600 hover:text-green-400 transition-colors">{l}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}