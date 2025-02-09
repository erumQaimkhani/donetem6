
"use client";
import { client } from "../../sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Swal from "sweetalert2";

interface Product {
  _id: string;
  title: string;
  productImage: {
    asset: {
      _ref: string;
      _type: "reference";
    };
  };
  price: number;
  discountPercentage?: number;
  description?: string;
  inventory?: number;
  tag?: string;
  isNew?: boolean;
  slug: {
    current: string;
  };
}

const builder = imageUrlBuilder(client);


function urlFor(source: { asset: { _ref: string; _type: string } }) {
  return source?.asset?._ref ? builder.image(source).url() : "";
}

const Filter = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [priceFilter, setPriceFilter] = useState<string>("all");

  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchedProducts = await client.fetch(`*[_type == "product"]{
          _id,
          title,
          productImage,
          price,
          discountPercentage,
          description,
          tag,
          isNew,
          inventory,
          slug
        }`);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.title.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesPrice =
      priceFilter === "all" ||
      (priceFilter === "lowToHigh" && product.price <= 20000) ||
      (priceFilter === "highToLow" && product.price > 20000);

    return matchesSearch && matchesPrice;
  });

  const addToCart = (product: Product) => {
    console.log("Product added to cart:", product);
  };

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    Swal.fire({
      position: "top-start",
      icon: "success",
      title: `${product.title} added to cart`,
      showConfirmButton: false,
      timer: 1500,
    });
    addToCart(product);
  };

  if (loading) {
    return <p className="text-center text-gray-500">Loading products...</p>;
  }

  if (filteredProducts.length === 0) {
    return <p className="text-center text-gray-500">No products found.</p>;
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600">
        Our Products
      </h1>

      <div className="flex justify-between items-center mb-6">
        <input
          type="text"
          placeholder="Search for products"
          className="px-4 py-2 border rounded-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />


        <select
          className="px-4 py-2 border rounded-lg"
          value={priceFilter}
          onChange={(e) => setPriceFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
      </div>

    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden transform hover:scale-105"
          >
            {product.slug?.current ? (
              <Link href={`/product/${product.slug.current}`}>
                <div>
                  <div className="relative">
                    {product.productImage ? (
                      <Image
                        src={urlFor(product.productImage)}
                        alt={product.title}
                        width={500}
                        height={300}
                        className="w-full h-64 object-cover"
                      />
                    ) : (
                      <div className="w-full h-64 flex items-center justify-center bg-gray-200">
                        <p className="text-gray-500">No Image Available</p>
                      </div>
                    )}
                    {product.isNew && (
                      <button className="bg-gradient-to-r from-pink-300 via-purple-500 to-indigo-200 text-white py-2 px-4 rounded-full hover:bg-indigo-300 transition-transform duration-300 ease-in-out shadow-md">
                        New Arrival
                      </button>
                    )}
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-800">{product.title}</h2>
                    <p className="text-lg text-gray-600 mt-2">Price: ${product.price}</p>
                    {product.discountPercentage && (
                      <p className="text-sm text-red-500 mt-1">
                        Discount: {product.discountPercentage}%
                      </p>
                    )}
                    <div className="flex items-center justify-between mt-4">
                      <button
                        className="bg-indigo-600 text-white py-2 px-4 rounded-full hover:bg-indigo-700 transition-colors duration-300"
                        onClick={(e) => handleAddToCart(e, product)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ) : (
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800">{product.title}</h2>
                <p className="text-lg text-gray-600 mt-2">Price: ${product.price}</p>
                <p className="text-red-500 mt-2">Slug not available</p>
                <button
                  className="bg-gradient-to-r from-pink-300 via-purple-500 to-indigo-200 text-white py-2 px-4 rounded-full hover:bg-indigo-300 transition-transform duration-300 ease-in-out shadow-md"
                  onClick={(e) => handleAddToCart(e, product)}
                >
                  Add to Cart
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
