import React from 'react';
import Image from 'next/image'; // Correctly import Image from next/image

const Watches = () => {
    const watchData = [
        { id: 1, name: "Rolex", price: 12000, description: "Luxury Watch", image: "/rolex.jpg" },
        { id: 2, name: "IWC", price: 13000, description: "Sporty Watch", image: "/watches3.jpg" },
        { id: 3, name: "Citizen", price: 15000, description: "Luxury Watch", image: "/watches2.jpg" },
        { id: 4, name: "Tempo", price: 11000, description: "Luxury Watch", image: "/watch.jpg" },
        { id: 5, name: "Omax", price: 7000, description: "Classic Watch", image: "/watches4.jpg" },
        { id: 6, name: "Rolex", price: 17000, description: "Luxury Watch", image: "/watches6.jpg" },
    ];

    return (
        <div className="watches grid grid-cols-1 md:grid-cols-3 gap-10 px-10 my-10">
            {watchData.map(watch => (
                <div key={watch.id} className="watch-card bg-white p-5 rounded-md shadow-md text-center">
                    {/* Use the Image component with width and height for optimization */}
                    <Image
                        src={watch.image}
                        alt={watch.name}
                        width={300}  // Specify width for the image
                        height={300} // Specify height for the image
                        className="w-full rounded-md transition-transform duration-300 transform hover:scale-110"
                    />
                    <h3 className="mt-4 text-2xl font-bold">{watch.name}</h3>
                    <p className="text-gray-500">{watch.description}</p>
                    <div className="price text-brown-500 text-xl font-semibold mt-2">${watch.price}</div>
                    <button className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md">
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Watches;
