
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from './components/header';


export default function Shopheader() {
    return (
        <header className="relative bg-gray-100 h-[316px]">
          
            <div className="absolute inset-0">
                <Image
                    src="/images/shop.png"
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                />
            </div>

         
            <div className="relative flex flex-col items-center justify-center h-full text-center text-black">
    
                <Image
                    src="/images/meubl.png"
                    alt="Logo"
                    width={77}
                    height={77}
                    className="h-[77px] w-[77px] object-contain"
                />
             <h1 className="text-4xl font-bold mt-4">Home</h1>


                <nav className="flex items-center space-x-2 mt-2 text-sm">
                    <Link href="/" className="hover:underline">
                        Home
                    </Link>
                    <span>&gt;</span>
                    <Link href="/shop" className="hover:underline">
                        Shop
                    </Link>

                </nav>
             
                <Header />
            </div>

      
        </header>
    );
}
