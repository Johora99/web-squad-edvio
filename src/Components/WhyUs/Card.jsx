import React from 'react';

const Card = ({ feature }) => {
    return (
        <div className='h-lvh flex flex-wrap justify-center sticky top-16'>
            <div 
            className="card p-4 rounded-lg shadow-md text-white w-[1000px] h-[500px]" 
            style={{ backgroundColor: feature.color }}
        >
            <h3 className="text-xl font-bold">{feature.title}</h3>
            <p className="mt-2">{feature.description}</p>
        </div>
        </div>
    );
};

export default Card;
