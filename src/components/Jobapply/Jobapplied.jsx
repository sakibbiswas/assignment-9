import React from 'react';
import { MapPinIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const Jobapplied = ({ job }) => {
    console.log(job);
    const { id, name, location, title, img, salary } = job;
    return (
        <div className=" pl-10 pt-10">
            <div className='border-2  w-8/12 md:flex items-center gap-10  h-auto p-5 mb-10'>
                <img className='w-56' src={img} alt="" />
                <div>
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
                    <Link to={`/jobdetail/${id}`}><button className='px-3 py-2 bg-slate-300 mt-2 rounded-xl'>View details</button> </Link>
                </div>
            </div >
        </div>
    );
};

export default Jobapplied;