import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import Banner from '../Banner/Banner';
import Items from '../items/Items';

const Header = () => {
    const [open, setopen] = useState(false)
    return (
        <div>
            <nav className='mb-10 pl-10 pr-10 bg-gray-200  flex items-center justify-between'>

                <div className='md:hidden' onClick={() => setopen(!open)}>
                    <span>
                        {open ?
                            <XMarkIcon className="h-6 w-6 text-blue-500" /> :
                            <Bars3Icon className="h-6 w-6 text-blue-500" />}
                    </span>

                </div>
                <h2 className='text-xl font-bold  pl-4'>Job Caircular</h2>
                <ul className={` font-medium   text-slate-500 md:flex p-5 justify-center absolute md:static gap-10  items-center duration-500  bg-gray-200  ${open ? ' top-6' : '-top-48'} `}>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/statistics">Statistics</Link></li>
                    <li><Link to="/applied Jobs">Applied Jobs</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><button className='bg-sky-500 px-4 py-2 rounded-md text-fuchsia-100'>Start Applying</button></li>
                </ul>
            </nav>
            <Banner></Banner>
            <Items></Items>
        </div>
    );
};

export default Header;