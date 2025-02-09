"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaGlobe, FaShoppingCart, FaHeart } from "react-icons/fa";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [cartItems, setCartItems] = useState<string[]>([]);
  const [showEmptyCartMessage, setShowEmptyCartMessage] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showWishlistDropdown, setShowWishlistDropdown] = useState(false);

  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    const storedCart = localStorage.getItem("cart");

    setWishlist(storedWishlist ? JSON.parse(storedWishlist) : []);
    setCartItems(storedCart ? JSON.parse(storedCart) : []);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleWishlist = (item: string) => {
    const updatedWishlist = wishlist.includes(item)
      ? wishlist.filter((wishlistItem) => wishlistItem !== item)
      : [...wishlist, item];

    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  const handleCartClick = () => {
    if (cartItems.length === 0) {
      setShowEmptyCartMessage(true);
      setTimeout(() => setShowEmptyCartMessage(false), 2000);
    } else {
      window.location.href = "/cart"; // You can use Link here instead for better navigation
    }
  };

  useEffect(() => {
    console.log("Header component rendered");
    console.log("Wishlist items:", wishlist);
    console.log("Cart items:", cartItems);
    console.log("Is scrolled:", isScrolled);
    console.log("Show wishlist dropdown:", showWishlistDropdown);
    console.log("Show empty cart message:", showEmptyCartMessage);
  }, [wishlist, cartItems, isScrolled, showWishlistDropdown, showEmptyCartMessage]);

  return (
    <header className={`main-container w-full h-[100px] fixed top-0 left-0 z-50 bg-white shadow-md transition-all duration-300 ${isScrolled ? "h-[80px] shadow-lg" : "h-[100px]"}`}>
      <div className="flex items-center justify-between w-full h-full px-6">
        <div className="flex items-center gap-4">
          <FaGlobe className="text-xl text-gray-700" />
          <span className="text-sm font-medium text-gray-700">Delivery All Over the Country</span>
        </div>

        <nav className="hidden md:flex gap-6">
          <Link href="/" passHref><span className="cursor-pointer hover:text-gray-600">Home</span></Link>
          <Link href="/shop" passHref><span className="cursor-pointer hover:text-gray-600">Shop</span></Link>
          <Link href="/about" passHref><span className="cursor-pointer hover:text-gray-600">About</span></Link>
          <Link href="/contact" passHref><span className="cursor-pointer hover:text-gray-600">Contact</span></Link>
          <Link href="/checkout" passHref><span className="cursor-pointer hover:text-gray-600">CheckOut</span></Link>
        </nav>

        <div className="flex items-center gap-4">
          <div className="relative">
            <FaHeart
              className={`cursor-pointer text-xl ${wishlist.length > 0 ? "text-red-500" : "text-gray-700"}`}
              onClick={() => setShowWishlistDropdown(!showWishlistDropdown)}
            />
            {wishlist.length > 0 && <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">{wishlist.length}</span>}
            {showWishlistDropdown && (
              <div className="absolute top-8 right-0 w-48 bg-white shadow-lg p-4 rounded">
                <h3 className="text-sm font-bold">Wishlist</h3>
                {wishlist.length > 0 ? (
                  wishlist.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <p className="text-sm text-gray-700">{item}</p>
                      <button
                        onClick={() => toggleWishlist(item)}
                        className="text-sm text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-gray-500">No items in wishlist</p>
                )}
              </div>
            )}
          </div>

          <div className="relative">
            <FaShoppingCart
              className="cursor-pointer text-xl text-gray-700"
              onClick={handleCartClick}
            />
            {cartItems.length > 0 && <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-1.5 rounded-full">{cartItems.length}</span>}
            {showEmptyCartMessage && (
              <div className="absolute top-8 right-0 bg-red-500 text-white text-sm px-2 py-1 rounded">
                Cart is empty!
              </div>
            )}
          </div>

          <Link href="/signup" passHref>
            <button className="px-4 py-1.5 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
              Sign Up
            </button>
          </Link>
        </div>
      </div>

      <button onClick={() => setMenuOpen(!menuOpen)} className="block md:hidden absolute top-6 right-6 text-black focus:outline-none">
        {menuOpen ? "Close" : "Menu"}
      </button>

      {menuOpen && (
        <div className="absolute top-[100px] left-0 w-full bg-white shadow-lg md:hidden">
          <ul className="flex flex-col items-center gap-4 p-4">
            <Link href="/" passHref><li className="cursor-pointer hover:text-gray-600">Home</li></Link>
            <Link href="/shop" passHref><li className="cursor-pointer hover:text-gray-600">Shop</li></Link>
            <Link href="/about" passHref><li className="cursor-pointer hover:text-gray-600">About</li></Link>
            <Link href="/contact" passHref><li className="cursor-pointer hover:text-gray-600">Contact</li></Link>
            <Link href="/checkout" passHref><li className="cursor-pointer hover:text-gray-600">CheckOut</li></Link>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
