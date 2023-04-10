import React from 'react';
import Banner from '../Banner/Banner';
import Items from '../items/Items';
import FeaturedJobs from '../Featured Jobs/FeaturedJobs';
// import Main from '../Layout/Main';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Items></Items>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;