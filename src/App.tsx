import React, { useState } from "react";
import { ShoppingBag, X, Trash2, CheckCircle2 } from "lucide-react";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import SectionTitle from "./components/SectionTitle";
import TrendingPlants from "./components/TrendingPlants";
import PlantCard from "./components/PlantCard";
import TestimonialCard from "./components/TestimonialCard";
import BestO2 from "./components/BestO2";
import Footer from "./components/Footer";
import Button from "./components/Button";
import { Plant } from "./types";
import {
  TOP_SELLING_PLANTS,
  TRENDING_PLANTS,
  O2_PLANTS,
  CUSTOMER_REVIEWS,
} from "./data/plantsData";

export default function App() {
  const [cart, setCart] = useState<Plant[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);

  // Cart actions
  const handleAddToCart = (plant: Plant) => {
    setCart((prev) => [...prev, plant]);
    // Optional: open cart drawer immediately to show success
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (indexToRemove: number) => {
    setCart((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  const handleCheckout = () => {
    if (cart.length === 0) return;
    setPurchaseSuccess(true);
    setTimeout(() => {
      setCart([]);
      setPurchaseSuccess(false);
      setIsCartOpen(false);
    }, 2000);
  };

  const cartTotal = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="relative min-h-screen bg-forest-950 font-sans overflow-x-hidden text-forest-800 selection:bg-forest-800 selection:text-white">
      {/* Decorative Blur Background Circles for organic texture */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute top-[30%] left-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* Navbar */}
      <Navbar cartCount={cart.length} onCartClick={() => setIsCartOpen(true)} />

      {/* Main Layout Containers */}
      <main className="relative z-10">
        {/* Hero Section */}
        <HeroBanner
          onBuyNowClick={handleAddToCart}
          featuredPlants={TOP_SELLING_PLANTS.slice(0, 3)}
        />

        {/* Section: Trending Plants */}
        <section className="pt-24 pb-12">
          <SectionTitle className="mb-16">Our Trendy plants</SectionTitle>
          <TrendingPlants
            trendingPlants={TRENDING_PLANTS}
            onAddToCart={handleAddToCart}
            onExploreClick={handleAddToCart}
          />
        </section>

        {/* Section: Top Selling Plants */}
        <section id="top-selling" className="py-20 px-6 md:px-12 bg-forest-950">
          <div className="max-w-7xl mx-auto">
            <SectionTitle className="mb-16">Our Top Selling Plants</SectionTitle>
            
            {/* 3x2 Grid for Top Selling Plants */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {TOP_SELLING_PLANTS.map((plant) => (
                <PlantCard
                  key={plant.id}
                  plant={plant}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Section: Customer Reviews */}
        <section id="reviews" className="py-20 px-6 md:px-12 bg-forest-900">
          <div className="max-w-7xl mx-auto">
            <SectionTitle className="mb-16">Customer Review</SectionTitle>
            
            {/* Reviews Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              {CUSTOMER_REVIEWS.map((review) => (
                <TestimonialCard key={review.id} review={review} />
              ))}
            </div>
          </div>
        </section>

        {/* Section: Our Best O2 Purifying Plants */}
        <section className="py-24">
          <SectionTitle className="mb-16">Our Best o2</SectionTitle>
          <BestO2
            o2Plants={O2_PLANTS}
            onExploreClick={handleAddToCart}
          />
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Cart Sidebar Overlay */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop Blur */}
          <div
            className="absolute inset-0 bg-forest-800/40 backdrop-blur-sm transition-opacity"
            onClick={() => setIsCartOpen(false)}
          />

          <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md bg-white border-l border-forest-800/10 text-forest-800 flex flex-col shadow-2xl relative animate-slide-in">
              
              {/* Drawer Header */}
              <div className="px-6 py-6 border-b border-forest-800/10 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <ShoppingBag className="w-5 h-5 text-forest-800" />
                  <h3 className="font-display text-lg md:text-xl font-medium text-forest-800">Your Cart</h3>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-1.5 rounded-lg hover:bg-forest-900 text-forest-800/60 hover:text-forest-800 transition-all cursor-pointer"
                  aria-label="Close cart"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Body */}
              <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-4">
                {purchaseSuccess ? (
                  <div className="flex-1 flex flex-col items-center justify-center text-center gap-4">
                    <CheckCircle2 className="w-16 h-16 text-emerald-600 animate-bounce" />
                    <h4 className="font-display text-xl font-semibold text-forest-800">Order Placed Successfully!</h4>
                    <p className="font-sans text-sm text-forest-800/60 font-light">
                      Thank you for purchasing. Your green companions are packing up!
                    </p>
                  </div>
                ) : cart.length === 0 ? (
                  <div className="flex-1 flex flex-col items-center justify-center text-center gap-4">
                    <ShoppingBag className="w-12 h-12 text-forest-800/30" />
                    <h4 className="font-sans text-base font-semibold text-forest-800/60">Your cart is empty</h4>
                    <p className="font-sans text-xs text-forest-800/50 font-light max-w-xs">
                      Explore our collections to add some organic green life to your spaces!
                    </p>
                    <Button variant="outline" size="sm" onClick={() => setIsCartOpen(false)}>
                      Continue Browsing
                    </Button>
                  </div>
                ) : (
                  cart.map((item, index) => (
                    <div
                      key={`${item.id}-${index}`}
                      className="flex items-center gap-4 p-3 bg-forest-900 border border-forest-800/10 rounded-2xl"
                    >
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        referrerPolicy="no-referrer"
                        className="w-16 h-16 object-contain bg-white rounded-xl border border-forest-800/10"
                      />
                      <div className="flex-1 text-left">
                        <h4 className="font-display text-sm font-medium text-forest-800 line-clamp-1">
                          {item.name}
                        </h4>
                        <span className="font-mono text-xs text-forest-700 font-bold">
                          Rs. {item.price}/-
                        </span>
                      </div>
                      <button
                        onClick={() => handleRemoveFromCart(index)}
                        className="p-2 text-forest-800/50 hover:text-red-600 hover:bg-forest-900 rounded-lg transition-all cursor-pointer"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4.5 h-4.5" />
                      </button>
                    </div>
                  ))
                )}
              </div>

              {/* Drawer Footer */}
              {cart.length > 0 && !purchaseSuccess && (
                <div className="px-6 py-6 border-t border-forest-800/10 bg-forest-900 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-sm text-forest-800/60 font-light">Subtotal</span>
                    <span className="font-mono text-lg font-bold text-forest-800">
                      Rs. {cartTotal}/-
                    </span>
                  </div>
                  
                  <Button
                    variant="gold"
                    className="w-full font-semibold font-sans tracking-wide py-3 text-base"
                    onClick={handleCheckout}
                  >
                    Proceed to Checkout
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
