import React from 'react';
import { useLoaderData } from 'react-router-dom';
import JobDetails from '../JobDetails/JobDetails';

const Detailsjob = ({ detail }) => {
    console.log(detail);
    const { id, phone, email, address, name, salary, title, location, EducationalRequirements, Experiences, JobDescription, JobResponsibility


    } = detail;
    return (
        <div className='md:flex  items-center justify-center gap-24 pl-10 pr-10'>
            <div className=''>
                <h3 className='mb-10'><strong>Job Description:</strong> <span className='text-lg'>
                    {JobDescription}</span> </h3>


                <h2 className='text-lg mb-10'><strong>Job Responsibility:</strong> {JobDescription}</h2>


                <h3 className='text-lg mb-10'><strong>Educational Requirements:</strong> {EducationalRequirements}</h3>



                <h2 className='text-lg'><strong>Experiences:</strong>{Experiences}</h2>
            </div>
            <div className="bg-gray-300 p-14">

                <h2 className='text-xl font-semibold mb-5'>Job Details</h2>
                <div>
                    <h2 className='font-semibold'>Salary:<span className='text-gray-700'>{salary}</span></h2>
                    <h4 className='font-semibold'>Job-Title:<span className='text-gray-700'>{title}</span> </h4>
                </div>
                <h2 className=' text-xl font-semibold mb-4'><span className='text-gray-700'>Contact Information</span></h2>
                <p className='border-2 mb-4'><hr /></p>
                <div className="">
                    <h3 className='font-semibold'>Phone:<span className='text-gray-700'>{phone}</span> </h3>
                    <h2 className='font-semibold'>Email:<span className='text-gray-700'>{email}</span> </h2>
                    <h2 className='font-semibold'>Address:<span className='text-gray-700'>{address}</span> </h2>
                </div>
                <div className='text-center mt-6'>
                    <button className='px-10 py-3 bg-orange-400 rounded-xl'><span className='text-gray-100'>ApplyNow</span> </button>
                </div>


            </div>

        </div>
    )
};

export default Detailsjob;