import React from 'react';
import img from '../../All Images/P3OLGJ1 copy 1.png'

const Banner = () => {
    return (
        <div className='md:flex pl-10 mb-10 pr-10 items-center justify-between container mx-auto'>
            <div className=" ">
                <h2 className='text-5xl font-semibold '>One Step <br /> Closer To Your <br /> <span className='text-cyan-400'>Dream Job</span> </h2>
                <p className='text-slate-800 font-medium mt-4'>Explore thousands of job opportunities with all <br /> the information you need. Its your <br /> Come find it. Manage all your job application from start to finish.</p>
                <button className='px-3 py-2 bg-amber-200 rounded-md mt-3'>Get Started</button>
            </div>
            <div className="">
                <img className='w-auto h-80' src={img} alt="" />
            </div>


        </div>
    );
};

export default Banner;