import React from 'react';
import { MapPinIcon } from '@heroicons/react/24/solid'

const Jobcard = ({ job }) => {
    const { id, name, location, title, img, salary } = job
    return (

        <div className='border-2 w-10/12 h-auto p-5 mb-10'>
            <img src={img} alt="" />
            <p className='pl-3 text-xl font-semibold'>{title}</p>
            <p className='pl-3'>{name}</p>
            <div className='flex  pl-3 gap-5 mt-2 mb-2'>
                <button className='px-3 py-2 rounded-md bg-red-400'>Remote</button>
                <button className='px-3 py-2 rounded-md bg-red-400'>Fulltime</button>
            </div>

            <div className='flex pl-5 items-center gap-10'>
                <p className='flex gap-4'> <MapPinIcon className="h-5 w-4 text-blue-500" /> {location}</p>
                <p>$ Salary :{salary}</p>
            </div>
            <button className='px-3 py-2 bg-slate-300 mt-2 rounded-xl'>View details</button>



        </div>

    );
};

export default Jobcard;