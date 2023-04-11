import React from 'react';
import { useLoaderData } from 'react-router-dom';
import JobDetails from '../JobDetails/JobDetails';

const Detailsjob = ({ detail }) => {
    console.log(detail);
    const { id, phone, email, address, name, salary, title, location, EducationalRequirements, Experiences, JobDescription, JobResponsibility


    } = detail;
    return (
        <div className='md:flex  items-center justify-center gap-32 pl-10 pr-10'>
            <div className=''>
                <h3 className='mb-10'><strong>Job Description:</strong> <span className='text-lg'>
                    {JobDescription}</span> </h3>


                <h2 className='text-lg mb-10'><strong>Job Responsibility:</strong> {JobDescription}</h2>


                <h3 className='text-lg mb-10'><strong>Educational Requirements:</strong> {EducationalRequirements}</h3>



                <h2 className='text-lg'><strong>Experiences:</strong>{Experiences}</h2>
            </div>
            <div className="bg-slate-400 p-10">

                <h2 className=''>Job Details</h2>
                <div>
                    <h2>Salary:{salary}</h2>
                    <h4>Job-Title: {title}</h4>
                </div>
                <h2>Contact Information</h2>
                <div className="">
                    <h3>Phone: {phone}</h3>
                    <h2>Email : {email}</h2>
                    <h2>Address: {address}</h2>
                </div>
                <div className='text-center mt-6'>
                    <button className='px-10 py-3 bg-orange-400 rounded-xl'><span className='text-gray-100'>ApplyNow</span> </button>
                </div>


            </div>

        </div>
    )
};

export default Detailsjob;