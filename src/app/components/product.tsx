
import Image from "next/image";


const Product: React.FC = () => {
  return (
    <div className="main-container max-w-[1242px] mx-auto p-4">
  
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { src: "/images/Maskwhite.png", alt: "Image 1", name: "Trenton modular sofa_3", price: "Rs. 25,000.00" },
          { src: "/images/white chair.png", alt: "Image 2", name: "Granite dining table with dining chair", price: "Rs. 25,000.00" },
          { src: "/images/mask1.png", alt: "Image 3", name: "Outdoor bar table and stool", price: "Rs. 25,000.00" },
          { src: "/images/plain console with teak mirror 1.png", alt: "Image 4", name: "Plain console with teak mirror", price: "Rs. 25,000.00" },
          { src: "/images/Grain coffee table 1.png", alt: "Image 5", name: "Grain coffee table", price: "Rs. 25,000.00" },
          { src: "/images/Mask6.png", alt: "Image 6", name: "Decorative piece", price: "Rs. 25,000.00" },
          { src: "/images/Plain console_ 1.png", alt: "Image 7", name: "Plain console", price: "Rs. 25,000.00" },
          { src: "/images/Mask3.png", alt: "Image 8", name: "Modern shelf", price: "Rs. 25,000.00" },
        ].map((item, index) => (
          <div key={index} className="relative group">
            <div className="w-full h-[200px] md:h-[287px] relative">
              <Image
                src={item.src}
                alt={item.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="mt-2 text-center">
              <p className="text-sm md:text-base font-medium">{item.name}</p>
              <p className="text-lg font-semibold text-gray-800">{item.price}</p>
            </div>
          </div>
        ))}
      </div>

     
      <div className="flex justify-center items-center mt-8">
   
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-yellow-200 text-black rounded-lg">1</button>
            <button className="px-4 py-2 bg-gray-100 text-black rounded-lg hover:bg-yellow-200">2</button>
            <button className="px-4 py-2 bg-gray-100 text-black rounded-lg hover:bg-yellow-200">3</button>
            <button className="px-6 py-2 bg-gray-100 text-black rounded-lg hover:bg-yellow-200">Next</button>
          </div>
      
      </div>
    </div>
  );
};

export default Product;


