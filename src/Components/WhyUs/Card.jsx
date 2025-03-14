import React from 'react';

const Card = ({ feature }) => {
    return (
        <div 
            className="card p-4 rounded-lg shadow-md text-white" 
            style={{ backgroundColor: feature.color }}
        >
            <h3 className="text-xl font-bold">{feature.title}</h3>
            <p className="mt-2">{feature.description}</p>
        </div>
    );
};

export default Card;
