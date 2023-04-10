import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [open, setopen] = useState(false)
    return (
        <nav className=' bg-gray-200 flex justify-between items-center   '>

            <div className='md:hidden' onClick={() => setopen(!open)}>
                <span>
                    {open ?
                        <XMarkIcon className="h-6 w-6 text-blue-500" /> :
                        <Bars3Icon className="h-6 w-6 text-blue-500" />}
                </span>
            </div>
            <h2 className='text-2xl font-bold  pl-4'>Job Caircular</h2>
            <ul className={` font-medium  text-slate-500 md:flex p-5 justify-center absolute md:static gap-10  items-center duration-500    ${open ? ' top-6' : '-top-48'} `}>


                <li><Link to="/home">Home</Link></li>
                <li><Link to="/statistics">Statistics</Link></li>
                <li><Link to="/applied Jobs">Applied Jobs</Link></li>
                <li><Link to="/blog">Blog</Link></li>

                <button className='bg-sky-500 px-4 py-2 rounded-md text-fuchsia-100'>Start Applying</button>
            </ul>


        </nav>
    );
};

export default Header;