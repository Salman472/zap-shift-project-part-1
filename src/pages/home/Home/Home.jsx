import React from 'react';
import Banner from '../Banner/Banner';
import Works from '../Works/Works';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='space-y-24'>
            <Banner/>
            <Works/>
            <Services/>
        </div>
    );
};

export default Home;