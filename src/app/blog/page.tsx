
"use client";
import { useEffect, useState } from 'react';
import { client } from '@/src/sanity/lib/client';
import Image from 'next/image';
interface Product {
  productImage: {
    asset: {
      url: string;
    };
  };
  title: string;
  price: number;
  discountpercentage: number;
  description: string;
  inventory: number;
}

export default function Blog() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"]{
        productImage{
          asset->{
            url
          }
        },
        title,
        price,
        discountpercentage,
        description,
        inventory
      }`;
      const products = await client.fetch(query);
      setProducts(products);
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Blog for our products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-lg">
            <Image
              src={product.productImage.asset.url}
              alt={product.title}
              className=" object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-300 ease-in-out"
              width={500}
              height={500}
            />  
            
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <p className="text-gray-700">{product.description}</p>
            <p className="text-lg font-bold">${product.price}</p>
            <p className="text-sm text-gray-500">{product.discountpercentage}% off</p>
            <p className="text-sm text-gray-500">{product.inventory} in stock</p>
          </div>
        ))}
      </div>
    </div>
  );
}