import React from 'react';
import logo1 from '../../Icons/accounts 1.png'
import logo2 from '../../Icons/business 1.png'
import logo3 from '../../Icons/chip 1.png'
import logo4 from '../../Icons/social-media 1.png'


const Items = () => {
    return (
        <div className='mb-16'>
            <div className='mb-4 text-center' >

                <h3 className='text-3xl font-bold'>Job
                    Category List</h3>
                <p>
                    Explore thousands of job opportunities with all the information you need. Its your future
                </p>
            </div>
            <div className="md:flex justify-center items-center pl-10 pr-10 gap-48 ">
                <div className="bg-slate-300  mb-4  pt-4
                 w-52 h-36 rounded-xl">
                    <img className='pl-2' src={logo1} alt="" />
                    <div className="pl-3">
                        <p className='text-xl font-semibold'>Account & Finance</p>
                        <p>100+ Jobs Available</p>
                    </div>
                </div>

                <div className="bg-slate-300  mb-4 pt-4
                 w-52 h-36 rounded-xl">
                    <img className='pl-2' src={logo2} alt="" />
                    <div className="pl-3">
                        <p className='text-xl font-semibold'>Creative Design</p>
                        <p>100+ Jobs Available</p>
                    </div>
                </div>

                <div className="bg-slate-300  mb-4  pt-4
                 w-52 h-36 rounded-xl">
                    <img className='pl-2' src={logo3} alt="" />
                    <div className="pl-3">
                        <p className='text-xl font-semibold'>Marketing & Sales</p>
                        <p>150+ Jobs Available</p>
                    </div>
                </div>

                <div className="bg-slate-300  mb-4 pt-4
                 w-52 h-36 rounded-xl">
                    <img className='pl-2' src={logo4} alt="" />
                    <div className="pl-3">
                        <p className='text-xl font-semibold'>Engineering Job</p>
                        <p>200+ Jobs Available</p>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Items;