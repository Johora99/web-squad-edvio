import React from 'react';

const Card = ({ feature }) => {
    return (
        <div className="h-lvh flex flex-wrap justify-center sticky top-16">
            <div 
                className="card relative flex flex-col md:flex-row items-center  rounded-xl shadow-lg w-[1000px] h-[500px] overflow-hidden"
                style={{ backgroundColor: feature.color }}
            >
                {/* Image Section */}
                <div className="bg-base-100 w-1/2 h-full flex items-center justify-center">
                    <img 
                        src={feature.img} 
                        alt={feature.title} 
                        className="w-full h-full"
                    />
                </div>

                {/* Text Content */}
                <div className="w-full md:w-1/2 p-6 text-white">
                    <h3 className="text-3xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-lg mb-4">{feature.description}</p>

                    {/* Benefits List */}
                    <ul className="list-disc pl-5 space-y-2">
                        {feature.benefits.map((benefit, index) => (
                            <li key={index} className="text-md">{benefit}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Card;
