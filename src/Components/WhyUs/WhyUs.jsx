import React from 'react';
import features from '../../../public/features.json';
import Card from './Card';

const WhyUs = () => {
    return (
        <div className=' p-4 mx-auto py-32 bg-LightTeal mb-32'>
            <div className=' flex flex-col items-center'>
                <h2 className='text-start text-8xl text-zinc-200 font-extrabold'>Why Choose <span>EdVio?</span></h2>
            </div>
            <div className='mt-10'>
                {features.map((feature, index) => (
                    <Card key={index} i={index} feature={feature} />
                ))}
            </div>
        </div>
    );
};

export default WhyUs;
