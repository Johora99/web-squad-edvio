import React from 'react';
import features from '../../../public/features.json';
import Card from './Card';

const WhyUs = () => {
    return (
        <div>
            <div>
                <h2 className='text-8xl text-LightTeal font-extrabold'>Why Choose EdVio?</h2>
            </div>
            <div className='mt-32'>
                {features.map((feature, index) => (
                    <Card key={index} feature={feature} />
                ))}
            </div>
        </div>
    );
};

export default WhyUs;
