
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
  productImage?: {
    asset?: {
      _ref?: string;
      _type: "reference";
    };
  };
  price: number;
  discountPercentage?: number;
  description?: string;
  inventory?: number;
  tag?: string;
  isNew?: boolean;
  slug?: {
    current?: string;
  };
}


interface SanityImageSource {
  asset?: {
    _ref?: string;
    _type: "reference";
  };
}


const builder = imageUrlBuilder(client);
function urlFor(source?: SanityImageSource) {
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
          "slug": slug { current }
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
    const matchesSearch = product.title?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice =
      priceFilter === "all" ||
      (priceFilter === "lowToHigh" && product.price <= 20000) ||
      (priceFilter === "highToLow" && product.price > 20000);

    return matchesSearch && matchesPrice;
  });

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();

    Swal.fire({
      title: `<strong>Checkout ${product.title}</strong>`,
      html: `
        <div class="text-left">
          <p class="text-gray-700 mb-4">Price: <span class="font-bold">$${product.price}</span></p>
          <label class="block text-gray-700 mb-2">Billing Address</label>
          <input
            type="text"
            id="billingAddress"
            class="w-full px-4 py-2 border rounded-lg mb-4"
            placeholder="Enter your billing address"
          />
          <label class="block text-gray-700 mb-2">Payment Method</label>
          <select
            id="paymentMethod"
            class="w-full px-4 py-2 border rounded-lg mb-4"
          >
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="cashOnDelivery">Cash on Delivery</option>
          </select>
        </div>
      `,
      showCancelButton: true,
      confirmButtonText: "Place Order",
      cancelButtonText: "Cancel",
      customClass: {
        confirmButton: "bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg",
        cancelButton: "bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-lg ml-2",
      },
      buttonsStyling: false,
    }).then((result) => {
      if (result.isConfirmed) {
        const billingAddress = (document.getElementById("billingAddress") as HTMLInputElement).value;
        const paymentMethod = (document.getElementById("paymentMethod") as HTMLSelectElement).value;

        processOrder(billingAddress, paymentMethod, product);
      }
    });
  };

  const processOrder = (billingAddress: string, paymentMethod: string, product: Product) => {
    console.log(`Order placed for ${product.title}`);
    console.log(`Billing Address: ${billingAddress}`);
    console.log(`Payment Method: ${paymentMethod}`);

    Swal.fire({
      icon: "success",
      title: "Order Placed!",
      text: `Your order for ${product.title} has been placed successfully.`,
      confirmButtonText: "OK",
      customClass: {
        confirmButton: "bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg",
      },
      buttonsStyling: false,
    });
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
          <div key={product._id} className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden transform hover:scale-105">
            <Link href={product.slug?.current ? `/product/${product.slug.current}` : "#"}>
              <div>
                <div className="relative">
                  {product.productImage?.asset?._ref ? (
                    <Image src={urlFor(product.productImage)} alt={product.title} width={500} height={300} className="w-full h-64 object-cover" />
                  ) : (
                    <div className="w-full h-64 flex items-center justify-center bg-gray-200">
                      <p className="text-gray-500">No Image Available</p>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-800">{product.title}</h2>
                  <p className="text-lg text-gray-600 mt-2">Price: ${product.price}</p>
                  <button className="bg-indigo-600 text-white py-2 px-4 rounded-full hover:bg-indigo-700 transition-colors duration-300" onClick={(e) => handleAddToCart(e, product)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;